//1. action items
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const EDIT_TODO = "EDIT_TODO";
const UPDATED_TODO = "UPDATE_TODO";
//2. action creators (dispatch때 사용)
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};
export const editTodo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};
export const updatedTodo = (payload) => {
  return {
    type: UPDATED_TODO,
    payload,
  };
};

//3. intial State = > reducer를 구성할 떄
const initialState = [
  {
    id: 1,
    title: "1",
    user: "12",
    editing: false,
    todoListPw: 123,
  },
  {
    id: 2,
    title: "2",
    user: "22",
    editing: false,
    todoListPw: 456,
  },
];

//4. reducer를 만들 것(함수)
const todoUser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case EDIT_TODO:
      return state.map((item) =>
        item.id === action.payload ? { ...item, editing: !item.editing } : item
      );
    case UPDATED_TODO:
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.newTitle,
              editing: !item.editing,
            }
          : item
      );

    default:
      return state;
  }
};
//5.reducer를 export
export default todoUser;
