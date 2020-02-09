import React from 'react'

export function TodoForm({ onTodoAdd }) {
  function handleSubmit(event) {
    event.preventDefault()

    const { text } = event.target.elements

    if (onTodoAdd && text.value) {
      onTodoAdd(text.value)
    }
  }

  return (
    <form onSubmit={handleSubmit} data-test="todo-form">
      <input id="text" data-test="todo-form-input-text" />
      <button type="submit" data-test="todo-form-submit-button">
        Add todo
      </button>
    </form>
  )
}
