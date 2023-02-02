import { Header } from "./components/Header"
import { TasksList } from "./components/TasksList"
import { Container } from "./styles"

export function App() {
  return (
    <Container>
      <Header />
      <TasksList />
    </Container>
  )
}

