import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import State from './components/State'

function App() {
  const [listTodo, setListTodo] = useState([])
  

  const addList = (taskName) => {
    const newTask = { id: Date.now(), taskName, checked: false }
    setListTodo([...listTodo, newTask])
  }

  const deleteItem = (taskId) => {
    setListTodo(listTodo.filter(task => task.id !== taskId))
  }

  const toggleCheck = (taskId) => {
    setListTodo((prevToDOList) => prevToDOList.map((task) => task.id === taskId ? { ...task, checked: !task.checked } : task))

   
  }

  return (
    <div className='main-container'>
      <div className="center-container">
        <h1 className='main-text'>Your To-Do list</h1>

        <State listTodo={listTodo}/>

        <TodoInput addList={addList} />
        <hr className='line' />

        {listTodo.map((item) => (
          <TodoList item={item} key={item.id} deleteItem={deleteItem} toggleCheck={toggleCheck} />
        ))}
      </div>
    </div>
  )
}

export default App
