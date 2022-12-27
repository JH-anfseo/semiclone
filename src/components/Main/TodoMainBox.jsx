import React, { useState } from "react";
import { removeTodo, editTodo, toggleTodo } from "../../redux/modules/todoUser";
import { useNavigate } from "react-router-dom";

function TodoBox({
  user,
  todoListTitle,
  todoListPw,
  id,
  handlegettodo,
  toggle,
  data,
  editing,
}) {
  const [todoPw, setTodoPw] = useState("");
  const [UserEdit, setUserEdit] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (id, toggle) => {
    toggleTodo({ id, toggle }).then(() => handlegettodo());
  };

  const getPassword = (event) => {
    setTodoPw(event.target.value);
  };
  // const filteredTodo = (event) => {
  //   event.preventDefault();
  //   const filteredTodo = todos.filter((item) => item.todoListPw === todoPw);
  //   console.log("filteredTodo", filteredTodo);
  // };
  const passwordMatch = (event) => {
    event.preventDefault();
    if (!UserEdit) {
      if (todoPw === todoListPw) {
        setUserEdit(true);
      } else {
        alert("비밀번호가 일치하지 않습니다.");
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
    <div>
      <h4>{todoListTitle}</h4>
      <p>{user}</p>
      <button onClick={() => handleToggle(id, !toggle)}>수정/삭제하기</button>
      {toggle ? (
        <form onSubmit={passwordMatch}>
          <input
            onChange={getPassword}
            value={todoPw}
            type="text"
            placeholder="비밀번호확인"
          />
          <button>확인</button>
          {UserEdit ? (
            <div>
              <button onClick={() => handleUpdate(id, !editing)}>수정</button>
              <button onClick={() => handleDelete(id)}>삭제</button>
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
    </div>
  );
}

export default TodoBox;
