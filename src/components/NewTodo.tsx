import React, {useRef, useEffect, useState} from 'react'
import "./NewTodo.css";

type NewTodoProps = {
    todoAddHandler: (todoText: string) => void;
} 

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const [clearInput, setClearInput] = useState(false);

    useEffect(() => {
       textInputRef.current!.value = "";
    }, [clearInput]);


    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current!.value;
        props.todoAddHandler(enteredText);
        setClearInput(!clearInput);
    }
    return (
    <form id="todo-form" onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit" className="btn1">ADD TODO</button>
    </form>
    )
}

export default NewTodo;