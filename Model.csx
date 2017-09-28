public class Model
{
    public string id {get; set;}
    public int version {get; set;}
    public Section[] sections {get; set;}
}

public class Section
{
    public string id {get; set;}
    public string title {get; set;}
    public Question[] questions {get; set;}
}

public class Question
{
    public string id {get; set;}
    public string title {get; set;}
    public string subtitle {get; set;}
    public Option[] options {get; set;}
}

public class Option
{
    public int number {get; set;}
    public string text {get; set;}
}
