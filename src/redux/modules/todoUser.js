import axios from "axios";

// const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";
// const EDIT_TODO = "EDIT_TODO";
// const UPDATED_TODO = "UPDATE_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";

export const getTodo = () => {
  return axios.get("http://localhost:3001/todoList");
};

export const addTodo = (data = {}) => {
  return axios.post(`http://localhost:3001/todoList`, {
    todoListTitle: data.todoListTitle,
    user: data.user,
    editing: false,
    todoListPw: data.todoListPw,
    toggle: false,
  });
  //method: "POST",
  //type: ADD_TODO,
  //payload,
};
export const removeTodo = (id) => {
  return axios.delete(`http://localhost:3001/todoList/${id}`);
  //method: "DELETE",
  //type: REMOVE_TODO,
  //payload,
};
export const editTodo = ({ id, editing }) => {
  return axios.patch(`http://localhost:3001/todoList/${id}`, {
    editing: editing,
  });
  // type: EDIT_TODO,
  //method: "PATCH",
  //payload,
};
export const updatedTodo = ({ id, todoListTitle, editing }) => {
  return axios.patch(`http://localhost:3001/todoList/${id}`, {
    todoListTitle: todoListTitle,
    editing: !editing,
  });
  //type: UPDATED_TODO,
  //method: "PATCH",
  //payload,
};
export const toggleTodo = ({ id, toggle }) => {
  return axios.patch(`http://localhost:3001/todoList/${id}`, {
    toggle: toggle,
  });
  //type: TOGGLE_TODO,
  //method: "PATCH",
  //payload,
};
// const initialState = {
//   todoList: [],
// };
// const todoUser = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     case REMOVE_TODO:
//       return state.filter((item) => item.id !== action.payload);
//     case EDIT_TODO:
//       return state.map((item) =>
//         item.id === action.payload ? { ...item, editing: !item.editing } : item
//       );
//     case UPDATED_TODO:
//       return state.map((item) =>
//         item.id === action.payload.id
//           ? {
//               ...item,
//               todoListTitle: action.payload.newTitle,
//               editing: !item.editing,
//             }
//           : item
//       );
//     case TOGGLE_TODO:
//       return state.map((item) =>
//         item.id === action.payload ? { ...item, toggle: !item.toggle } : item
//       );
//     default:
//       return state;
//   }
// };
