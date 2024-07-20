import { useState } from "react";
import './TodoItem.css';

function TodoItems(props){
    const [isEditting, setIsEditting] = useState(false);
    const [todoData, setTodoData] = useState(props.todo.data);
    return (
        <div>
            <li>
                {
                    (isEditting) ? <input type="text" value={todoData} onChange={(e) => setTodoData(e.target.value)}/> : <span>{props.todo.data}</span>
                }
            </li>
            <button onClick={() => {
                props.delete();
            }
            }>Delete</button>
            <button onClick={() => {
                setIsEditting(!isEditting)
                props.edit(todoData);
            }}>
                {(isEditting) ? 'Save' : 'Edit'}
            </button>
        </div>
    );
}

export default TodoItems;