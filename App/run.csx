using System.Net;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.IO;

public static HttpResponseMessage Run(HttpRequestMessage req,TraceWriter log, ExecutionContext context)
{
    var response = new HttpResponseMessage(HttpStatusCode.OK);

    var path = req.RequestUri.PathAndQuery.ToLower();
    var localDir = context.FunctionDirectory; 

    path = FixPath(localDir, path);

    if (!File.Exists(path))
    {
        path = FixPath(localDir, "/app");
    }

    var stream = new FileStream(path, FileMode.Open);
    response.Content = new StreamContent(stream);
    response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html"); 
    return response;
}

public static string FixPath(string localDir, string path)
{
    if (path == "/app" || path == "/app/")
    {
        path = "/app/index.html";
    }
     
    return path.Replace("/app/", localDir + "/dist/") ?? "index.html";
}