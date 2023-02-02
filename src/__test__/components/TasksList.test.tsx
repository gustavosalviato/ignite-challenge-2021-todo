import '@testing-library/jest-dom'
import { fireEvent, getAllByTestId, getByText, queryByTestId, render, screen, waitFor, waitForElementToBeRemoved, } from '@testing-library/react'
import { describe, expect } from 'vitest'
import { TasksList } from '../../components/TasksList'

describe('App page', () => {
  it('should be able to add a task', () => {
    render(<TasksList />)

    const taskInput = screen.getByPlaceholderText('Adicionar nova tarefa')
    const addTaskButton = screen.getByTestId('add-task-button')

    fireEvent.change(taskInput, {
      target: { value: 'Desafio ReactJS Ignite' }
    })

    fireEvent.click(addTaskButton)

    const addedFirstTaskTitle = screen.getByText('Desafio ReactJS Ignite')

    expect(addedFirstTaskTitle).toHaveTextContent('Desafio ReactJS Ignite')

    fireEvent.change(taskInput, {
      target: { value: 'Estudar Programação' }
    })

    fireEvent.click(addTaskButton)

    const addedSecondTaskTitle = screen.getByText('Estudar Programação')

    expect(addedFirstTaskTitle).toBeInTheDocument()
    expect(addedFirstTaskTitle).toHaveTextContent('Desafio ReactJS Ignite')
    expect(addedSecondTaskTitle).toHaveTextContent('Estudar Programação')
  })

  it('should be able to remove a task from task list', async () => {
    const { getAllByTestId, getByText, debug, queryByText } = render(<TasksList />)

    expect(getByText('Desafio ReactJS Ignite')).toBeInTheDocument()
    expect(getByText('Estudar Programação')).toBeInTheDocument()

    const removeButtons = getAllByTestId('remove-task-button')

    fireEvent.click(removeButtons[0])

    await waitFor(() => {
      expect(queryByText('Desafio ReactJS Ignite')).not.toBeInTheDocument()
    })
  })

  it('should not be able to add a task with a empty title', () => {
    const { debug, queryByText, getAllByTestId } = render(<TasksList />)

    debug()

    const taskInput = screen.getByPlaceholderText('Adicionar nova tarefa')
    const addTaskButton = screen.getByTestId('add-task-button')

    fireEvent.change(taskInput, {
      target: { value: '  ' }
    })

    fireEvent.click(addTaskButton)

    const tasks = getAllByTestId('task')

    expect(tasks[0]).toBeInTheDocument()
    expect(queryByText('  ')).not.toBeInTheDocument()
  })

  it('should be able to toggle a task', () => {
    const { getByText, getAllByTestId } = render(<TasksList />)

    expect(getByText('Estudar Programação')).toHaveClass('c-jBkzff c-jBkzff-hpqwme-taskSituation-incompleted')

    const toggleButtons = getAllByTestId('toggle-task-button')

    fireEvent.click(toggleButtons[0])

    expect(getByText('Estudar Programação')).toHaveClass('c-jBkzff c-jBkzff-BNlzv-taskSituation-completed')

  })

})





