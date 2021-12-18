import React from 'react'
import './ToDo.css'
function ToDo({todo, removeTask, toggleTask}) {
    return (
        <div className="list" key={todo.id}>
            <div className={todo.complete ? "control complete" : "control"} onClick={() => toggleTask(todo.id)}>{todo.task}</div>
            <button onClick={() => removeTask(todo.id)}>удалить...</button>
        </div>
    )
}
export default ToDo;