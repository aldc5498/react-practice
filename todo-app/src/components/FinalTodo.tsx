import React , {useState} from "react";
import TodoList from "./TodoList.tsx";
import AddTodoForm from "./AddTodoForm.tsx";

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

const FinalTodo:React.FC = () => {

    const [todos, setTodos] = useState<TodoItem[]>([]);

    const handleComplete = (id: number) => {
        setTodos((prevTodos) =>
        prevTodos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed}: todo));
    };
    
    const handleDelete = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const handleAdd = (text: string) => {
        const newTodo: TodoItem = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos((prevTodos) =>[...prevTodos, newTodo]);
    };


return (<>
<div>
    <h1>Todo App</h1>
    <TodoList todos={todos} onComplete = {handleComplete} onDelete={handleDelete}></TodoList>
    <AddTodoForm onAdd={handleAdd}/>
</div>
</>
);
};

export default FinalTodo;