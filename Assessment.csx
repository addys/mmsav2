#load ".\Model.csx"


public class Assessment
{
    public string id {get; set;}
    
    public string version {get; set;}

    public Model model {get; set;}

    public string company {get; set;}
    public string owner {get; set;}
    public DateTime timestamp {get; set;}
    public Answer[] Answers {get; set;}
}

public class Answer
{
    public string id {get; set;}
    public int? answer {get; set;}
}
