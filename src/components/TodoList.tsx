import React from 'react';
import "./TodoList.css";

interface TodoListProps {
    todos: {id: string, text: string}[];
    todoDeleteHandler: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return <ul className="list-container">
        {props.todos.map(todo => (
            <li key={todo.id} className="list">
                <span>{todo.text}</span> 
                <button className="btn1" onClick={() => props.todoDeleteHandler(todo.id)}>DELETE</button>
            </li>
        ))}
    </ul>;
}


export default TodoList;