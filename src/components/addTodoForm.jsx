import { useState } from 'react'

export function AddTodoForm() {
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('user entered: ' + value);
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