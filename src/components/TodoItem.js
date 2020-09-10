import React from "react";

const Todoitem = ({ todo, deleteTask }) => {
  return (
    <div className="wrapper">
      <div className="fg"></div>
      <div className="task-box">
        <p className="task-txt">{todo.content}</p>
        <button className="del-btn" onClick={() => deleteTask(todo.id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Todoitem;
