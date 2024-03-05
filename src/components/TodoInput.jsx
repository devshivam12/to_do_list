import React, { useState } from 'react'

const TodoInput = ({ addList }) => {
    const [inputText, setInputText] = useState()

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const handlelAddTask = (e) => {
        e.preventDefault()
        if (inputText.trim() === '') {
          
            return;
        }
        addList(inputText)
        setInputText('')
    }
    return (
        <form className='main-input' onSubmit={handlelAddTask}>
            <input type="text"
                className='input-box'
                value={inputText}
                onChange={handleChange}
                placeholder='Enter you to-do'
            />
            <button
                className='btn'
                onClick={() => {
                    if (inputText === "") {
                        alert('Please enter your todo')
                    }
                    else {
                        addList(inputText)
                        setInputText("")
                    }
                }}>+</button>

        </form>
    )
}

export default TodoInput
