#r "Microsoft.WindowsAzure.Storage"
#r "Newtonsoft.Json"
#r "Microsoft.Azure.Documents.Client"
#r "System.Configuration"
#r "System.Net.Http.Formatting"

#load "..\Model.csx"
#load "..\Assessment.csx"
#load "..\AssessmentRepository.csx" 

using System.Configuration;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.Azure.Documents.Client;
using System.Net.Http.Formatting; 

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, string company, TraceWriter log)
{
    log.Info($"company:{company}"); 

    var repo = new AssessmentRepository(log);

    await repo.CreateDocumentCollectionIfNotExistsAsync(); 

    IQueryable<Assessment> query = repo.CreateQuery("SELECT * FROM a WHERE STARTSWITH(a.id,'" + company.ToLower() + "')");
    //    .Where(f => f.id.StartsWith(company.ToLower()));

    //query = query.OrderByDescending(f=> f.timestamp);

    var results = (await repo.QueryAsync(query)).ToArray(); 

    var result = results.FirstOrDefault();


    var modelRepo = new Repository<Model>(log);
    if (result != null)
    {
    
          log.Info($"using existing :{result.id}"); 

        IQueryable<Model> modelQuery = modelRepo.CreateQuery().Where(f => f.id == result.version);
        var modelResults = (await modelRepo.QueryAsync(modelQuery)).ToArray();

        result.model = modelResults.FirstOrDefault(); 
    }
    else
    {
        IQueryable<Model> modelQuery = modelRepo.CreateQuery().Where(f => f.id.StartsWith("model")).OrderByDescending(f => f.version);
        var modelResults = (await modelRepo.QueryAsync(modelQuery)).ToArray();
        var latestModel = modelResults.FirstOrDefault();            

        result = new Assessment
        {
            id = company.ToLower() + "-" + Guid.NewGuid(),
            company = company,
            model = latestModel,
            version = latestModel.id,
            Answers = new Answer[0]
        };

        log.Info($"creating new; {result.id} "); 
        
    }

    var resp =  req.CreateResponse(HttpStatusCode.OK, result, new JsonMediaTypeFormatter());
    return resp;
}
