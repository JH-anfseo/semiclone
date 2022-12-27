import React, { useEffect, useState } from "react";
import { StyledListBox } from "./style";
import Modal from "./Modal";
import { getTodo } from "../../redux/modules/todoUser";
import UpdateTodo from "./UpdateTodo";
import TodoMainBox from "./TodoMainBox";

function Main() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    handlegettodo();
  }, []);

  const handlegettodo = () => {
    return getTodo().then(
      (res) => {
        setTodos(res.data);
      },
      [setTodos]
    );
  };

  return (
    <StyledListBox>
      <Modal />
      {todos.map((data) => (
        <div key={data.id}>
          {data.editing ? (
            <UpdateTodo
              data={data}
              key={data.id}
              handlegettodo={handlegettodo}
              id={data.id}
              editing={data.editing}
            />
          ) : (
            <TodoMainBox
              key={data.id}
              todoListTitle={data.todoListTitle}
              user={data.user}
              editing={data.editing}
              todoListPw={data.todoListPw}
              toggle={data.toggle}
              id={data.id}
              handlegettodo={handlegettodo}
            />
          )}
        </div>
      ))}
    </StyledListBox>
  );
}
export default Main;
