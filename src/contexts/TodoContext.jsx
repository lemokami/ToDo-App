import React, { createContext, useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [list, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ list, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
