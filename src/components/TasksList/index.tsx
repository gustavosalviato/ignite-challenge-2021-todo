import { TaskDescription, TaskHeader, TaskItem, TaskList, TasksContainer } from "./styles";
import { Check, CheckCircle, Circle, Trash } from 'phosphor-react'
import { FormEvent, useState } from "react";
import { TasksEmpty } from "../TasksEmpty";
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todo:savedTasks'

export interface ITask {
  description: string
  id: string
  isCompleted: boolean
}

export function TasksList() {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return []
  })
  const [taskDescription, setTaskDescription] = useState('')

  function setAndSaveTask(tasks: ITask[]) {
    setTasks(tasks)

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault()

    if (!taskDescription.trim()) {
      alert('Por favor informe a descrição da tarefa')
      setTaskDescription('')
      return;
    }

    const newTask: ITask = {
      id: uuidv4(),
      description: taskDescription,
      isCompleted: false,
    }

    setAndSaveTask([
      ...tasks,
      newTask
    ])

    setTaskDescription('')
  }

  function handleToggleTask(taskId: string) {
    const taskToChange = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task
    })

    setAndSaveTask(taskToChange)
  }

  function handleDeleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setAndSaveTask(newTasks)
  }

  return (
    <>
      <TasksContainer onSubmit={handleSubmitForm}>
        <TaskHeader>
          <strong>Minhas Tasks</strong>
          <div>
            <input
              type="text"
              placeholder="Adicionar nova tarefa"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />

            <button type="submit" data-testid="add-task-button">
              <Check size={24} weight="bold" />
            </button>
          </div>
        </TaskHeader>



        <TaskList>
          {tasks.length === 0 && <TasksEmpty />}
          {tasks.map((task) => {
            return (
              <TaskItem key={task.id} data-testid="task" className={task.isCompleted ? 'completed' : 'incompleted'}>
                <div>
                  <button
                    type="button"
                    onClick={() => handleToggleTask(task.id)}
                    data-testid="toggle-task-button"
                  >
                    {task.isCompleted ? <CheckCircle size={24} color="#1d4ed8" weight="bold" /> : <Circle size={24} color="#1d4ed8" weight="bold" />}
                  </button>


                  {task.isCompleted ? <TaskDescription taskSituation={"completed"}>
                    {task.description}
                  </TaskDescription> :
                    <TaskDescription taskSituation={"incompleted"}>
                      {task.description}
                    </TaskDescription>
                  }

                </div>
                <button
                  type="button"
                  data-testid="remove-task-button"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <Trash
                    size={24}
                    color="#dc2626"

                  />
                </button>
              </TaskItem>
            )
          })}

        </TaskList>
      </TasksContainer >
    </>
  )
}