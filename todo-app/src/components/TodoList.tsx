import React from "react";
import Todo from "./Todo.tsx";


interface TodoItem{
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps{
    todos: TodoItem[];
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;


}


const TodoList:React.FC<TodoListProps> = ({todos,onComplete, onDelete}) =>{
return(
    <>
    <ul>
        {todos.map((todo) => (
            <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={onComplete}
            onDelete={onDelete}
            />
        ))}
    </ul>
    </>
);};

export default TodoList;