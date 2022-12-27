import { combineReducers, createStore } from "@reduxjs/toolkit";
import ModalList from "../modules/ModalList";
//import todoUser from "../modules/todoUser";
// modules 모음
const reducer = combineReducers({
  ModalList,
  //todoUser,
});
const store = createStore(reducer);

export default store;
