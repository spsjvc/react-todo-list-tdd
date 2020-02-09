import React, { useState } from 'react'

import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'

export function App() {
  const [id, setId] = useState(1)
  const [todos, setTodos] = useState([])

  function toggleTodoCompleted(todoId) {
    setTodos(
      todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }

        return todo
      })
    )
  }

  function addTodo(text) {
    setTodos([...todos, { id, text, isCompleted: false }])
    setId(id + 1)
  }

  return (
    <div>
      <TodoForm onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoClick={toggleTodoCompleted} />
    </div>
  )
}
