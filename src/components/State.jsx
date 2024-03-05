import React from 'react'

const State = ({ listTodo }) => {
    const countList = listTodo.length
    const completedTask = listTodo.filter(task => task.checked)
    const completedCount = completedTask.length
    return (
        <div className='list-item'>
            <p className='total-counter'>{`Total List : ${countList}`}</p>
            <p className='total-counter'>{`Completed Task : ${completedCount}`}</p>
        </div>
    )
}

export default State
