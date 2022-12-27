import React, { useEffect, useState } from "react";
import { StyledListBox, StyledTodoBox } from "./style";
import Modal from "./Modal";
import {
  removeTodo,
  editTodo,
  toggleTodo,
  getTodo,
} from "../../redux/modules/todoUser";
import { useNavigate } from "react-router-dom";
import UpdateTodo from "./UpdateTodo";

function Main() {
  const [todos, setTodos] = useState([]);
  const [todoPw, setTodoPw] = useState("");
  const [UserEdit, setUserEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handlegettodo();
  });

  const handlegettodo = () => {
    return getTodo().then(
      (res) => {
        setTodos(res.data);
      },
      [setTodos]
    );
  };

  const handleToggle = (id, toggle) => {
    toggleTodo({ id, toggle }).then(() => handlegettodo());
  };

  const getPassword = (event) => {
    setTodoPw(event.target.value);
  };
  const passwordMatch = (event) => {
    event.preventDefault();
    if (!UserEdit) {
      if (todoListPw === todoPw) {
        setUserEdit(true);
      } else {
        console.log("비밀번호가 일치하지 않습니다.");
      }
    }
  };
  const handleDelete = (id) => {
    removeTodo(id).then(() => handlegettodo());
  };
  const handleUpdate = (id, editing) => {
    editTodo({ id, editing }).then(() => handlegettodo());
  };
  return (
    <StyledListBox>
      <Modal />
      {todos.map((data) => (
        <div key={data.id}>
          {data.editing ? (
            <UpdateTodo data={data} key={data.id} />
          ) : (
            <StyledTodoBox key={data.id}>
              <h4>{data.todoListTitle}</h4>
              <p>{data.user}</p>
              <button onClick={() => handleToggle(data.id, !data.toggle)}>
                수정/삭제하기
              </button>
              {data.toggle ? (
                <form onSubmit={passwordMatch}>
                  <input
                    onChange={getPassword}
                    value={data.todoPw}
                    type="text"
                    placeholder="비밀번호확인"
                  />
                  <button>확인</button>
                  {UserEdit ? (
                    <div>
                      <button
                        onClick={() => handleUpdate(data.id, !data.editing)}
                      >
                        수정
                      </button>
                      <button onClick={() => handleDelete(data.id)}>
                        삭제
                      </button>
                    </div>
                  ) : null}
                </form>
              ) : null}
              <br />
              <button
                onClick={() => {
                  navigate(`/${data.id}`);
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
