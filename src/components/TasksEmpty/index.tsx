import { TaskEmptyContainer } from "./styles";
import { ClipboardText } from 'phosphor-react'
export function TasksEmpty() {
  return (
    <TaskEmptyContainer>
      <ClipboardText size={48} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </TaskEmptyContainer>
  )
}