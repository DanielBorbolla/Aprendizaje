import React, { useState } from "react";
import './TaskList.css';
import TaskInput from '../TaskInput/TaskInput'
import Tasks from '../Tasks/Tasks'

function TaskList() {
  const [task, setTasks] = useState([]);

  const addTask = taskitem => {
    if (taskitem.text.trim()) {
      taskitem.text = taskitem.text.trim();

      const actualizedTasks = [taskitem, ...task];
      setTasks(actualizedTasks);
    }
  }
  const deleteTask = id => {
    const actualizedTasks = task.filter(taskitem => taskitem.id !== id);
    setTasks(actualizedTasks);
  }
  const completeTask = id => {
    const actualizedTasks = task.map(taskitem => {
      if (taskitem.id === id) {
        taskitem.done = !taskitem.done;
      }
      return taskitem
    })
    setTasks(actualizedTasks)
  }
  return (
    <>
      <TaskInput onSubmit={addTask} />
      <div className="task-list-container">
        {
          task.map((taskitem) =>
            <Tasks
              key={taskitem.id}
              id={taskitem.id}
              text={taskitem.text}
              done={taskitem.done}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        }
      </div>

    </>
  )
}

export default TaskList