import React from 'react'

export function TodoList({ todos, onTodoClick }) {
  if (todos.length === 0) {
    return 'Your todo list is currently empty.'
  }

  return (
    <div>
      {todos.map(todo => (
        <div
          key={todo.id}
          style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
          onClick={() => {
            if (onTodoClick) {
              onTodoClick(todo.id)
            }
          }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  )
}
