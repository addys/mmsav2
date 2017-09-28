#load ".\Model.csx"
#load ".\Repository.csx"

public class ModelRepository : Repository<Model>
{
    public ModelRepository(TraceWriter log) : base(log, Repository.ModelCollection) {}
}