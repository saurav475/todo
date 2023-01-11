


const AddTaskForm = ({ newTask, setNewTask, addTask, search, setSearch }) => {
 
  return(
    <>
      <div className="row">
      <div className="col">
          <input 
            value={search}
            onChange={ (e) => setSearch(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Search List"
          />
        </div>
        <br />
        <div className="col">
          <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Add Task"
          />
        </div>
        <div className="col-auto" >
          <button
            onClick={addTask}
            className="btn btn-lg btn-success"
          >Add Task</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddTaskForm;