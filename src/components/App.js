import React, { useState } from 'react'

import { TodoList } from './TodoList'

const initialTodos = [
  {
    id: 1,
    text: 'Buy groceries',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'Do the dishes',
    isCompleted: true,
  },
]

export function App() {
  const [todos] = useState(initialTodos)

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}
