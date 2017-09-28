#r "Microsoft.WindowsAzure.Storage"
#r "Newtonsoft.Json"
#r "Microsoft.Azure.Documents.Client"
#r "System.Configuration"
#r "System.Net.Http.Formatting"

#load "..\Model.csx"
#load "..\Assessment.csx"
#load "..\repository.csx"

using System.Configuration;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.Azure.Documents.Client;
using System.Net.Http.Formatting;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{

    var repo = new Repository<object>(log, Repository<string>.AssessmentCollection);

    IQueryable<object> modelQuery = repo.CreateQuery("select c.id, c.company, c.timestamp from c", new FeedOptions { MaxItemCount = 200 });

    var results = (await repo.QueryAsync(modelQuery)).ToArray(); 

    var length =results.Length;

    var resp =  req.CreateResponse(HttpStatusCode.OK, results, new JsonMediaTypeFormatter());
    return resp;


/* 
    using (DocumentClient client = new DocumentClient(endpoint, authKey))
    {
         // Set some common query options
        FeedOptions queryOptions = new FeedOptions { MaxItemCount = -1 };
 
        IQueryable<Model> modelQuery = client.CreateDocumentQuery<Model>(
                UriFactory.CreateDocumentCollectionUri(databaseName, collectionName), queryOptions)
                .Where(f => f.id.Contains("model"))
                .OrderByDescending(f=> f.version);

        var results = modelQuery.ToArray();
        var length =results.Length;
        var model = results[0];

        return req.CreateResponse(HttpStatusCode.OK, JsonConvert.SerializeObject(model));
    }
*/
/* 
    if (id == null)
        return req.CreateResponse(HttpStatusCode.OK, $"All {company} items were requested.");
    else
        return req.CreateResponse(HttpStatusCode.OK, $"{company} item with id = {id} has been requested.");
*/
}

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
