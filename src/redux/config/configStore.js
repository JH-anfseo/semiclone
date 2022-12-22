import { configureStore } from "@reduxjs/toolkit";
import todoList from "../modules/todoListSlice";

// modules 모음

const store = configureStore({ reducer: { todoList } });

export default store;
