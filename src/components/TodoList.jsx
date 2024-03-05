import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
const TodoList = ({ item, index, deleteItem, toggleCompleted }) => {
  return (
    <div className='list-container'>
      <li className={item.completed ? 'todo-list completed' : 'todo-list'}
        onClick={() => {
          toggleCompleted(index)
        }}>
        {item.text}
        <button
          className='delete-btn'
          onClick={(e) => {
            deleteItem(index)
          }}><MdDeleteForever /></button>
      </li>
    </div>
  )
}

export default TodoList
