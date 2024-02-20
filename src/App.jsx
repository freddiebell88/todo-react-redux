import { AddTodoForm } from './components/addTodoForm'
import { TodoList } from './components/todoList'
import { TotalCompleteItems } from './components/totalCompleteItems'
import './App.css'

function App() {
  

  return (
    <div>
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  )
}

export default App
