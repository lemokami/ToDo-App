import React from "react";

const InputBar = ({ task, setTask, addTask }) => {
  const handleTask = (e) => {
    e.preventDefault();
    if (!task.length || task[0] === " ") return false;
    addTask();
  };
  return (
    <form className="search" onSubmit={(e) => handleTask(e)}>
      <input
        type="text"
        placeholder="Enter the task..."
        id="tinput"
        autoComplete="off"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default InputBar;
