import React from "react";
import './Tasks.css'
import { AiOutlineCloseCircle as Closeicon } from "react-icons/ai";

function Tasks({ id, text, done, completeTask, deleteTask }) {
  return (
    <div className={done ? 'task-done task-container' : 'task-container'} >
      <div className="task-text"
        onClick={() => completeTask(id)} >
        {text}
      </div>
      <div className="task-icon-container"
        onClick={() => deleteTask(id)}>
        <Closeicon className="task-icon" />
      </div>
    </div>
  )
}

export default Tasks