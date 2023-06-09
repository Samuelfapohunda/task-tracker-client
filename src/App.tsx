import './App.css'
import { useState, useEffect } from 'react'
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Lists from './components/Lists'
import AddList from './components/AddList'

interface ITasks {
  _id: any,
  name: string,
 date: any,
  reminder: boolean
}





const App = () => {

const [showAddTask, setShowAddTask] = useState<boolean>(false)



const fetchData = () => {
fetch("https://task-tracker-server2.onrender.com/").then((res) => res.json())
.then((data) => {setLists(data)})
}

useEffect(() => {
  fetchData()
}, [])
  


 
  const initialTasks: 
  ITasks[] = [

] 


  const [lists, setLists] = useState(initialTasks)


  //Add Task

  const addTasks = (list: any) => {
    const id = Math.floor(Math.random() * 10000) + 1

    console.log(id);
    const newTask = { id, ...list}
 setLists([...lists, newTask])    
  }


  //Delete Task
  const deleteTask = (id: string) => {

    
    fetch(`https://task-tracker-server2.onrender.com/${id}`, {
      method: "DELETE"  }).then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    
   setLists(lists.filter((list) => list._id !== id ))
    
  } 


//Toggle Reminder 
const toggleReminder = (id: any) => {
setLists(lists.map((list) => list._id === id ? { ...list, reminder: !list.reminder} : list))  
}



  return (
    <div className='container'>
   <Header {...{title:  'Task Tracker'}} onAdd =
    {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
   {showAddTask &&<AddList onAdd={addTasks} />}
   { lists.length > 0 ? <Lists lists={lists} onDelete={deleteTask} onToggle= {toggleReminder} /> : 'No Tasks To Show'}

    </div>
  )
} 

export default App