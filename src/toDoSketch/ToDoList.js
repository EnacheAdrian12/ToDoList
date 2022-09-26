import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import ToDoListLogic from "./Components/ToDoListLogic";
import CRUD from "./reducers/CRUD";

const store = configureStore({
  reducer: {
    CRUD: CRUD,
  },
});

const ToDoList = () => {
  return (
    <Provider store={store}>
      <ToDoListLogic />
    </Provider>
  );
};

export default ToDoList;
