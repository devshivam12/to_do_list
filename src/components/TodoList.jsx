import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
const TodoList = ({ item, deleteItem, toggleCheck }) => {
  return (
    <div className='list-container'>
      <li className='todo-list'>
        <div className='list-item'>
          <input type="checkbox" checked={item.checked} onChange={() => toggleCheck(item.id)} />
          <p className={item.checked ? 'isChecked' : ''}>{item.taskName}</p>
        </div>
        <MdDeleteSweep className='delete-btn' onClick={() => deleteItem(item.id)}></MdDeleteSweep>
      </li>
    </div>
  )
}

export default TodoList;
