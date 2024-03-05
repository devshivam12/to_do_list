import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [listTodo, setListTodo] = useState([])
  const [completed, setCompleted] = useState(0)
  const [totalTask, setTotalTask] = useState(0)
 

  const addList = (inputText) => {
    if (inputText !== "") {
      const newTask = { text: inputText, completed: false };
      setListTodo([...listTodo, { text: inputText, completed: false }])
      updateTask([...listTodo, newTask])
    }
  }

  const deleteItem = (key) => {
    let newListTodo = [...listTodo]
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
    updateTask(newListTodo)
  }

  const toggleCompleted = (index) => {
    let updatedList = [...listTodo]
    updatedList[index].completed = !updatedList[index].completed
    setListTodo(updatedList)
    updateTask(updatedList)
  }

  const updateTask = (tasks) => {
    setTotalTask(tasks.length);
    const completedCount = tasks.filter(task => task.completed).length
    setCompleted(completedCount)
  }
  return (
    <div className='main-container'>
      <div className="center-container">
        <h1 className='main-text'>Your To-Do list</h1>
        <div className='total-conter'>
          Total tasks : {totalTask}, Completed tasks : {completed}
        </div>
        <TodoInput addList={addList} />
        <hr className='line' />
        {listTodo.map((listItem, index) => {
          return (
            <TodoList key={index} index={index} item={listItem} deleteItem={deleteItem}
              toggleCompleted={toggleCompleted}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
