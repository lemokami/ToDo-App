import React from "react";

const Todoitem = ({ todo, dispatch }) => {
  return (
    <div className="wrapper">
      <div className="fg"></div>
      <div className="task-box">
        <p className="task-txt">{todo.content}</p>
        <button
          className="del-btn"
          onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Todoitem;
