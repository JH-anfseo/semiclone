import React, { useState } from "react";
import { updatedTodo, editTodo } from "../../redux/modules/todoUser";

function UpdateTodo({ data }, handlegettodo) {
  const [newTitle, setnewTitle] = useState(data.todoListTitle);
  const handleUpdate = (event, editing) => {
    event.preventDefault();
    if (newTitle !== "") {
      updatedTodo({ ...data, todoListTitle: newTitle, editing: !editing }).then(
        () => handlegettodo()
      );
    } else {
      alert("수정값을 입력하세요");
    }
  };
  const handleCancel = (id, editing) => {
    editTodo({ id, editing }).then(() => handlegettodo());
  };
  const newtitleInput = (event) => {
    setnewTitle(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input defaultValue={data.todoListTitle} onChange={newtitleInput} />
        <button
          type="button"
          onClick={() => handleCancel(data.id, !data.editing)}
        >
          취소
        </button>
        <button>저장</button>
        {data.user}
      </form>
    </div>
  );
}
export default UpdateTodo;
