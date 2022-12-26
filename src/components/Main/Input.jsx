import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/modules/todoUser";

function Input() {
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [todoListPw, setTodoListPw] = useState("");
  const [todoListPwConf, setTodoListPwConf] = useState("");
  const [type, setType] = useState("password");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      user,
      editing: false,
      todoListPw,
      todoListPwConf,
    };
    if (todoListPw === todoListPwConf) {
      dispatch(addTodo(newTodo));
      setTitle("");
      setUser("");
      setTodoListPw("");
      setTodoListPwConf("");
    } else {
      alert("비밀번호틀림");
    }
  };
  const show = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const titleInput = (event) => {
    setTitle(event.target.value);
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
          value={title}
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
