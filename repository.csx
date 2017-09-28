#r "Microsoft.WindowsAzure.Storage"
#r "Newtonsoft.Json"
#r "Microsoft.Azure.Documents.Client"
#r "System.Configuration"

using System.Configuration;
using System.Net;
using System.Threading.Tasks;

using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;

using Newtonsoft.Json;

public interface IRepository<T>
{
    Task<IEnumerable<T>> QueryAsync(IQueryable<T> query);
    IQueryable<T>  CreateQuery(string spec, FeedOptions options);
    T Get(string id);
    Task<bool> UpdateAsync(T item);
    Task<bool> InsertAsync(T item);
    Task<bool> DeleteAsync(string id);
}

public class Repository<T> : IRepository<T>
{

    public const string ModelCollection = "mmsa-model";
    public const string AssessmentCollection = "mmsa-assessments";

    private string collectionName = null;
    private TraceWriter log = null;

    public Repository(TraceWriter _log, string _collectionName = null)
    {
        this.collectionName =_collectionName ?? ConfigurationManager.AppSettings["DocDB_collectionId"];
        this.log = _log;
    }

    public DocumentClient GetClient()
    {
        var endpoint = new Uri(ConfigurationManager.AppSettings["DocDB_host"]);
        var authKey = ConfigurationManager.AppSettings["DocDB_authKey"];

        return new DocumentClient(endpoint, authKey);
    }

    protected Uri GetCollectionUri()
    {
        var databaseName =  ConfigurationManager.AppSettings["DocDB_databaseId"];
        var collectionName = this.collectionName;
        log.Info($"collectionName:{collectionName}");

        return UriFactory.CreateDocumentCollectionUri(databaseName, collectionName);
    }

    protected DocumentCollection GetDocumentCollection()
    {
        log.Info($"collectionName:{this.collectionName}");
        return new DocumentCollection { Id = this.collectionName };
    }

    public async Task<ResourceResponse<DocumentCollection>> CreateDocumentCollectionIfNotExistsAsync()
    {

        return await GetClient().CreateDocumentCollectionIfNotExistsAsync(UriFactory.CreateDatabaseUri(ConfigurationManager.AppSettings["DocDB_databaseId"]), GetDocumentCollection() );
    }

    public IQueryable<T> CreateQuery(string spec = null, FeedOptions options = null)
    {
        var client = GetClient();
        if (spec != null)
        {
            return client.CreateDocumentQuery<T>(GetCollectionUri(), new SqlQuerySpec(spec), options);
        }
        else
        {
            return client.CreateDocumentQuery<T>(GetCollectionUri(), options);
        }
    }

    public T Get(string id)
    {
        return default(T);
    }

    public virtual async Task<bool> UpdateAsync(T item)
    {
        var client = GetClient();
        var link = GetCollectionUri().ToString();
        log.Info($"link:{link}");
        await client.UpsertDocumentAsync(link, item);
        return true;
    }

    public async Task<bool> InsertAsync(T item)
    {
        var client = GetClient();
        await client.UpsertDocumentAsync( GetDocumentCollection().SelfLink, item);
        return true;
    }

    public async Task<bool> DeleteAsync(string id)
    {
        return false;
    }
    
    public async Task<IEnumerable<T>> QueryAsync(IQueryable<T> query)
    {
        var docQuery = query.AsDocumentQuery();
        var batches = new List<IEnumerable<T>>();

        do
        {
            var batch = await docQuery.ExecuteNextAsync<T>();

            batches.Add(batch);
        }
        while (docQuery.HasMoreResults);

        var docs = batches.SelectMany(b => b);

        return docs;
    }

}
