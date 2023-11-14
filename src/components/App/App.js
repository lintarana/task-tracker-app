import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from '../Task/TaskForm';
function App() {
  const [tasks, setTasks] = useState([]);

  
  const addTask = (newTask) => {
    setTasks([...tasks, { title: newTask, completed: false }]);
  };

  
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  
  const completeTask = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return {
          ...task,
          completed: !task.completed,
          timerActive: !task.completed ? true : task.timerActive, 
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  
  const updateTask = (index, updatedTitle) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, title: updatedTitle } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>

      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
