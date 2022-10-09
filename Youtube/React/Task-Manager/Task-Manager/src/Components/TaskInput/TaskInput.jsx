import React, { useState } from "react";
import './TaskInput.css'
import { v4 } from 'uuid'

function TaskInput(props) {

    const [userInput, setUserInput] = useState('');

    const changeHandle = e => {
        setUserInput(e.target.value);

    }
    const inputHandle = e => {
        e.preventDefault();
        const newTask = {
            id: v4(),
            text: userInput,
            done: false
        }

        props.onSubmit(newTask);
    }
    return (
        <form className="task-input"
            onSubmit={inputHandle}>
            <input
                className="get-input"
                type='text'
                placeholder="Escribe una Tarea"
                name='input-text'
                onChange={changeHandle}
            />
            <button className="task-button"> Agregar Tarea</button>
        </form>
    )
}

export default TaskInput;