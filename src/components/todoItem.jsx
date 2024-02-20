export function TodoItem({id, title, completed}) {
    return (
        <li>
            <div>
                <span>
                    <input type="checkbox" checked={completed}></input>
                    {title}
                </span>
                <button>Delete</button>
            </div>
        </li>
    )
}