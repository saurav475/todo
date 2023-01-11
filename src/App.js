import {useState, useEffect} from 'react'
import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateForm from './components/UpdateForm.jsx'
import ToDo from './components/ToDo.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {

 
  const [toDo, setToDo] = useState([
    {id: 1, title: 'Task 1', status: false},
    {id: 2, title: 'Task 2', status: false}
  ])


  const [newTask, setNewTask] = useState('')
  const [search, setSearch] = useState('')
  const [updateData, setUpdateData] = useState('')
  const [filterTask, setFilterTask] = useState(toDo)
  
  useEffect(() =>{
   let filter = [...toDo];
   let filteredItems = filter.filter((el) =>{
    let item = el.title.toLowerCase();
    return item.includes(search.toLowerCase());
  });

  setFilterTask([...filteredItems])

 } , [toDo, search])

  
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1 
      
     
      setToDo([
        ...toDo, 
        { id: num, title: newTask, status: false }
      ])

      setNewTask('')

    }
  }

  const deleteTask = (id) => {
    setToDo(toDo.filter(task => task.id !== id))
  }


  const markDone = (id) => {  
    setToDo(toDo.map(
      task => task.id === id 
      ? ({ ...task, status: !task.status }) 
      : (task) 
    ))
  }


  const cancelUpdate = () => {
    setUpdateData('')
  }

  
  const changeHolder = (e) => {
    setUpdateData({...updateData, title: e.target.value})
  }

  const updateTask = () => {
    let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)
    setToDo([
      ...removeOldRecord, 
      updateData
    ])
    setUpdateData('')
  }

  return (
    <div className="container App">

    <br /><br />
    <h2>Todo App</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeHolder={changeHolder}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        search={search}
        setSearch={setSearch}
      />
    )}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
      filterTask={filterTask}
    />  

    </div>
  );
}

export default App;
