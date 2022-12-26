import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedTodo, editTodo } from "../../redux/modules/todoUser";

function UpdateTodo({ item }) {
  const dispatch = useDispatch();
  const [newTitle, setnewTitle] = useState(item.title);

  const handleUpdate = (event) => {
    event.preventDefault();
    if (newTitle !== "") {
      dispatch(updatedTodo({ ...item, newTitle }));
    } else {
      alert("수정값을 입력하세요");
    }
  };
  const handleCancel = () => {
    dispatch(editTodo(item.id));
  };
  const newtitleInput = (event) => {
    setnewTitle(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input defaultValue={item.title} onChange={newtitleInput} />
        <button type="button" onClick={() => handleCancel(item.id)}>
          취소
        </button>
        <button>저장</button>
        {item.user}
      </form>
    </div>
  );
}
export default UpdateTodo;
