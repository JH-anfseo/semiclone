import React, { useState } from "react";
import { customAlphabet } from "nanoid";
import { addTodo } from "../../redux/modules/todoUser";
const nanoid = customAlphabet("01234567899abcedf", 6);

function Input() {
  const [todoListTitle, setTodoListTitle] = useState("");
  const [user, setUser] = useState("");
  const [todoListPw, setTodoListPw] = useState("");
  const [todoListPwConf, setTodoListPwConf] = useState("");
  const [type, setType] = useState("password");

  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const handleSubmit = (event, handlegettodo) => {
    event.preventDefault();
    const newTodo = {
      id: nanoid(),
      todoListTitle,
      user,
      editing: false,
      todoListPw,
      todoListPwConf,
    };
    if (todoListPw === todoListPwConf) {
      addTodo(newTodo).then(() => handlegettodo());
      setTodoListTitle("");
      setUser("");
      setTodoListPw("");
      setTodoListPwConf("");
    } else if (todoListPw.match(passwordRegEx) === null) {
      alert("비밀번호 형식을 확인해주세요");
    } else {
      alert("비밀번호틀림");
    }
  };
  const show = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const titleInput = (event) => {
    setTodoListTitle(event.target.value);
  };
  const userInput = (event) => {
    setUser(event.target.value);
  };
  const userPassWord = (event) => {
    setTodoListPw(event.target.value);
  };
  const userPassWordCon = (event) => {
    setTodoListPwConf(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={titleInput}
          value={todoListTitle}
          type="text"
          placeholder="누구의 투두리스트"
        />
        <input
          onChange={userInput}
          value={user}
          type="text"
          placeholder="작성자"
        />
        <input
          onChange={userPassWord}
          value={todoListPw}
          type={type}
          placeholder="비밀번호"
        />
        <div>
          <input
            onChange={userPassWordCon}
            value={todoListPwConf}
            type={type}
            placeholder="비밀번호확인"
          />
          <p onClick={show}>보임</p>
        </div>
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default Input;
