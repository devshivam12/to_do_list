import React, { useState } from 'react'

const TodoInput = ({ addList }) => {
    const [inputText, setInputText] = useState()

    return (
        <div className='main-input'>
            <input type="text"
                className='input-box'
                value={inputText}
                onChange={(e) => {
                    setInputText(e.target.value)
                }}
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

        </div>
    )
}

export default TodoInput
