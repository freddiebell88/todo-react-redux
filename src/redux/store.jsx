/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'

export default configureStore({
    reducer: {
        todos: todoReducer,
    }
})