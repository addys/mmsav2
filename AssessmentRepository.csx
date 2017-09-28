
#load ".\Assessment.csx"
#load ".\Repository.csx"

public class AssessmentRepository : Repository<Assessment>
{
    public AssessmentRepository(TraceWriter log) : base(log, Repository<Assessment>.AssessmentCollection) {}
}