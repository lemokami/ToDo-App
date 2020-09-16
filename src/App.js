import React from "react";
import "./App.scss";

// Components
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="main">
      <TodoContextProvider>
        <h1 className="heading">Todo App</h1>
        <div className="container">
          <TodoList />
          <InputBar />
        </div>
        <div className="footer">
          Developed by{" "}
          <a href="https://github.com/jesswinw" target="blank">
            jesswinw
          </a>
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
