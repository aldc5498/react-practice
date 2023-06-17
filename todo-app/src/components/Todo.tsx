import React from "react";

interface TodoProps{
    id: number;
    text: string;
    completed: boolean;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}


const Todo:React.FC<TodoProps> = ({id, text,completed,onComplete,onDelete}) =>{
    return(
        <>
        <li>
            <input type="checkbox" checked={completed} onChange={() => onComplete(id)}/>
            <span style={{textDecoration: completed? 'line-through':'none'}}>{text}</span>
            
            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
        </>
    )
}

export default Todo;