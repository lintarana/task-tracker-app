import React, { useState, useEffect } from 'react';
import '../styles/task.css';

const Task = ({ task, index, deleteTask, completeTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(!task.completed);
  const [isComplete, setIsComplete] = useState(task.completed);

  useEffect(() => {
    let interval;

    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerActive]);

  const handleComplete = () => {
    setIsComplete(true);
    completeTask(index);
    setTimerActive(false);
  };

  const handleIncomplete = () => {
    setIsComplete(false);
    completeTask(index);
    setTimerActive(true);
  };

  const handleUpdate = () => {
    updateTask(index, updatedTitle);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div className='cool_box'>
          <span style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          <div>Time spent: {time} seconds</div>
          <button onClick={isComplete ? handleIncomplete : handleComplete}>
            {isComplete ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;
