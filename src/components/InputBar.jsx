import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const InputBar = () => {
  const [task, setTask] = useState("");
  const { dispatch } = useContext(TodoContext);
  const handleTask = (e) => {
    e.preventDefault();
    if (!task.length || task[0] === " ") return false;
    dispatch({ type: "ADD_TODO", content: task });
    setTask("");
  };
  return (
    <form className="search" onSubmit={handleTask}>
      <input
        type="text"
        placeholder="Enter the task..."
        id="tinput"
        autoComplete="off"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-btn">Add to list</button>
    </form>
  );
};

export default InputBar;
