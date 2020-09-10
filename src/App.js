import React, { useState } from "react";
import "./App.scss";

// Components
import InputBar from "./components/InputBar";
import Todoitem from "./components/TodoItem";

function App() {
  const [task, setTask] = useState("");
  const [list, setlist] = useState([]);

  const addTask = (e) => {
    const newlist = [...list];
    newlist.push({ id: newlist.length, content: task });
    setTask("");
    setlist(newlist);
  };

  const deleteTask = (index) => {
    const newlist = list.filter(({ id }) => id !== index);
    setlist(newlist);
  };
  return (
    <div className="main">
      <h1 className="heading">Todo App</h1>
      <div className="container">
        <div className="lists">
          {list.length ? (
            list.map((todo, index) => (
              <Todoitem key={index} todo={todo} deleteTask={deleteTask} />
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
        <InputBar task={task} setTask={setTask} addTask={addTask} />
      </div>
      <div className="footer">
        Developed by{" "}
        <a href="https://github.com/jesswinw" target="blank">
          jesswinw
        </a>
      </div>
    </div>
  );
}

export default App;
