import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { TodoForm } from '../TodoForm'

describe('TodoForm', () => {
  test('shows the form for adding a new todo', () => {
    const { getByTestId } = render(<TodoForm />)

    expect(getByTestId('todo-form')).toBeInTheDocument()
    expect(getByTestId('todo-form-input-text')).toBeInTheDocument()
    expect(getByTestId('todo-form-input-text')).not.toHaveValue()
    expect(getByTestId('todo-form-submit-button')).toBeInTheDocument()
  })

  test('checks the "onTodoClick" callback exists before calling it', () => {
    const { getByTestId } = render(<TodoForm />)

    fireEvent.submit(getByTestId('todo-form'))
  })

  test('calls the "onTodoAdd" callback with the input value when the form is submitted', () => {
    const mockOnTodoAdd = jest.fn()
    const { getByTestId } = render(<TodoForm onTodoAdd={mockOnTodoAdd} />)

    getByTestId('todo-form-input-text').value = 'Buy milk'

    fireEvent.submit(getByTestId('todo-form'))

    expect(mockOnTodoAdd).toHaveBeenCalledTimes(1)
    expect(mockOnTodoAdd).toHaveBeenCalledWith('Buy milk')
  })

  test('does not submit the form when the input is empty', () => {
    const mockOnTodoAdd = jest.fn()
    const { getByTestId } = render(<TodoForm onTodoAdd={mockOnTodoAdd} />)

    fireEvent.submit(getByTestId('todo-form'))

    expect(mockOnTodoAdd).not.toHaveBeenCalled()
  })
})
