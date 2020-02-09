import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { TodoList } from '../TodoList'

const todos = [
  {
    id: 101,
    text: 'Buy groceries',
    isCompleted: false,
  },
  {
    id: 102,
    text: 'Do the dishes',
    isCompleted: true,
  },
]

describe('TodoList', () => {
  test('shows a message when there are no todos', () => {
    const { getByText } = render(<TodoList todos={[]} />)

    expect(getByText('Your todo list is currently empty.')).toBeInTheDocument()
  })

  test('shows a list of todos', () => {
    const { getByText } = render(<TodoList todos={todos} />)

    expect(getByText('Buy groceries')).toBeInTheDocument()
    expect(getByText('Do the dishes')).toBeInTheDocument()
    expect(getByText('Do the dishes')).toHaveStyle(`
      text-decoration: line-through;
    `)
  })

  test('checks the "onTodoClick" callback exists before calling it', () => {
    const { getByText } = render(<TodoList todos={todos} />)

    fireEvent.click(getByText('Buy groceries'))
  })

  test('calls the "onTodoClick" callback when a todo is clicked', () => {
    const mockOnTodoClick = jest.fn()

    const { getByText } = render(
      <TodoList todos={todos} onTodoClick={mockOnTodoClick} />
    )

    fireEvent.click(getByText('Buy groceries'))

    expect(mockOnTodoClick).toHaveBeenCalledTimes(1)
    expect(mockOnTodoClick).toHaveBeenCalledWith(101)
  })
})
