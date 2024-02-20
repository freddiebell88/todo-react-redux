import { useDispatch } from "react-redux"
import { toggleComplete, deleteTodo } from "../redux/todoSlice"

export function TodoItem({id, title, completed}) {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({id, completed: !completed}));
    }

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }))
    }

    return (
        <li>
            <div>
                <span>
                    <input type="checkbox" onClick={handleCheckboxClick} checked={completed}></input>
                    {title}
                </span>
                <button onClick={handleDeleteClick} >Delete</button>
            </div>
        </li>
    )
}