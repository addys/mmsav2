using System.Net;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.IO;

public static HttpResponseMessage Run(HttpRequestMessage req,TraceWriter log, ExecutionContext context)
{
    var response = new HttpResponseMessage(HttpStatusCode.OK);

    var localDir = context.FunctionDirectory;    

    var path = req.RequestUri.PathAndQuery.ToLower();
    
    if (path == "/app" || path == "/app/")
    {
        path = "/app/index.html";
    }

    path = path.Replace("/app/", localDir + "/dist/");

    var stream = new FileStream(path ?? "index.html", FileMode.Open);
    response.Content = new StreamContent(stream);
    response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html"); 
    return response;
}