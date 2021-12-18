import React from 'react'
import { useState } from 'react'
import classes from './ToDoForm.module.css'
function ToDoForm(props) {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTask(userInput)
        setUserInput("")
        
    }
    const handleChange = (event) => {
        setUserInput(event.target.value)
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <input
                type="text"
                value={userInput}
                onChange={handleChange}
                placeholder="Напишите список..."
            />
            <button type="submit">Добавить...</button>
        </form>
    )
}

export default ToDoForm
