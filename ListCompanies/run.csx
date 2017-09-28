#r "Microsoft.WindowsAzure.Storage"
#r "Newtonsoft.Json"
#r "Microsoft.Azure.Documents.Client"
#r "System.Configuration"

#load "..\Model.csx"
#load "..\Assessment.csx"
#load "..\repository.csx"

using System.Configuration;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.Azure.Documents.Client;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{

    var repo = new Repository<object>(log, Repository<string>.AssessmentCollection);

    IQueryable<object> modelQuery = repo.CreateQuery("select c.id, c.company, c.timestamp from c", new FeedOptions { MaxItemCount = 200 });

    var results = (await repo.QueryAsync(modelQuery)).ToArray(); 

    var length =results.Length;

    var json = JsonConvert.SerializeObject(results, Formatting.Indented);
    return new HttpResponseMessage(HttpStatusCode.OK) 
    {
        Content = new StringContent(json, Encoding.UTF8, "application/json")
    };
}

/*
public static async Task<HttpResponseMessage> ListCompanies(HttpRequestMessage req, string company, int? id, TraceWriter log)
{
    var repo = new Repository<string>(log);

    IQueryable<string> modelQuery = repo.CreateQuery("select id from *") 
        .OrderBy(f=> f)
        .Distinct();

    var modelResults = (await repo.QueryAsync(modelQuery)).ToArray(); 

    var length =modelResults.Length;

    var resp =  req.CreateResponse(HttpStatusCode.OK, length, new JsonMediaTypeFormatter());
    return resp;
}
 */