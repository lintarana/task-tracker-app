import React from 'react';
import Task from '../Task/Task'; 

const TaskList = ({ tasks, deleteTask, completeTask, updateTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
          updateTask={updateTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
