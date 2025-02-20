import React from "react";
import { todoReducer } from "./todo_reducer";
const initialState = {
  todolist: [],
};

export const TodoContextPr = React.createContext({});

export const TodoContext = ({ children }) => {
  const [data, dispatch] = React.useReducer(todoReducer, initialState);
  return (
    <TodoContextPr.Provider value={{ data, dispatch }}>
      {children}
    </TodoContextPr.Provider>
  );
};
