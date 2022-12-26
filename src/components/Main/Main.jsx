import React, { useState } from "react";
import { StyledListBox, StyledTodoBox } from "./style";
import Modal from "./Modal";
import { removeTodo, editTodo } from "../../redux/modules/todoUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UpdateTodo from "./UpdateTodo";

function Main() {
  const todos = useSelector((state) => state.todoUser);
  const [switchOn, switchChange] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getPassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };
  const handleUpdate = (id) => {
    dispatch(editTodo(id));
  };
  return (
    <StyledListBox>
      <Modal />
      {todos.map((item) => (
        <div key={item.id}>
          {item.editing ? (
            <UpdateTodo item={item} key={item.id} />
          ) : (
            <StyledTodoBox key={todos.id}>
              <h4>{item.title}</h4>
              <p>{item.user}</p>
              <div
                onClick={() => {
                  switchChange(!switchOn);
                }}
              >
                <button>버튼</button>
              </div>
              {switchOn === true ? (
                <div>
                  <button onClick={() => handleUpdate(item.id)}>수정</button>
                  <button onClick={() => handleDelete(item.id)}>삭제</button>
                </div>
              ) : null}
              <br />
              <button
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                상세보기
              </button>
            </StyledTodoBox>
          )}
        </div>
      ))}
    </StyledListBox>
  );
}
export default Main;
