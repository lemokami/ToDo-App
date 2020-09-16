import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import Todoitem from "./TodoItem";

const TodoList = () => {
  const { list, dispatch } = useContext(TodoContext);
  return (
    <div className="lists">
      {list.length ? (
        list.map((todo) => (
          <Todoitem key={todo.id} todo={todo} dispatch={dispatch} />
        ))
      ) : (
        <div className="message">
          Add Some Tasks{" "}
          <span role="img" aria-label="Party Popper">
            🎉
          </span>
        </div>
      )}
    </div>
  );
};

export default TodoList;
