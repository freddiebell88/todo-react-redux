import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

export function AddTodoForm() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('user entered: ' + value);
        if (value) {
            dispatch(
                addTodo({
                    title: value,
                })
            )
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input
                type='text'
                placeholder='Add todo...'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>
            <button type='submit'>Submit</button>

        </form>
    )
}