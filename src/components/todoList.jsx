import { TodoItem } from "./todoItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { createSelector } from "@reduxjs/toolkit";

export function TodoList() {
    // useSelector accepts a function and returns us data based on that function
    const todos = useSelector((state) => state.todos);
    // this accepts the state which is passed in by Redux and state.todos gets all the todos and assigns all the todos from state to the todos variable

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>
    )
}