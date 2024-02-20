import { useSelector } from "react-redux"

export function TotalCompleteItems() {
    const todos = useSelector((state) => 
        state.todos.filter((todo) => todo.completed === true))

    return <h4>Total Complete Items: {todos.length}</h4>
}