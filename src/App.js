import React from 'react'
import ToDoForm from './components/ToDoForm/ToDoForm'
import { useState } from 'react'
import ToDo from './components/ToDo/ToDo'
import './App.css'
function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput)  {
      const newItem = {
        id: Math.random().toString(),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }
  const removeTask = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id)
    ])
  }
  const toggleTask = (id) => {
    setTodos([...todos.map((todo) => todo.id === id ?  {...todo, complete : !todo.complete} : {...todo})])
  }
  return (
    <>
      <div>
      <h1 className='h1'>Список дел:{todos.length}</h1>
          <ToDoForm addTask={addTask}/>
      </div>
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        )
      })}
    </>
  )
}

export default App
