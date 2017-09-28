#r "Microsoft.WindowsAzure.Storage"
#r "Newtonsoft.Json"
#r "Microsoft.Azure.Documents.Client"
#r "System.Configuration"

#load "..\Model.csx"
#load "..\Assessment.csx"
#load "..\Assessmentrepository.csx"

using System.Configuration;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.Azure.Documents.Client;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, string company, TraceWriter log)
{
    string jsonContent = await req.Content.ReadAsStringAsync();  

    log.Info(jsonContent);

    Assessment assessment = JsonConvert.DeserializeObject<Assessment>(jsonContent); 

    log.Info(assessment.company);

    var repo = new AssessmentRepository(log);

    assessment.timestamp = DateTime.Now;
    await repo.UpdateAsync(assessment);

    var resp =  req.CreateResponse(HttpStatusCode.OK);
    return resp;   //
     
}