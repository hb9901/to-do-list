import { useState } from "react";
import { Button } from "../common/Button/Button";
import "./TodoInputForm.css";

export function TodoInputForm({ onAdd }) {
  let [todo, setTodo] = useState({
    id: new Date().getTime(),
    title: "",
    content: "",
    isDone: false,
  });

  const onTitleChange = ({ target: { value } }) => {
    setTodo((prevState) => {
      return { ...prevState, title: value };
    });
  };

  const onContentChange = ({ target: { value } }) => {
    setTodo((prevState) => {
      return { ...prevState, content: value };
    });
  };

  const onClickAdd = (e) => {
    e.preventDefault();
    setTodo((prevState) => {
      return { ...prevState, id: new Date().getTime() };
    });
    onAdd(todo);
  };

  return (
    <div className="todo-input-form-wrapper">
      <form className="todo-input-form">
        <div>
          <label className="todo-input-form-label">제목: </label>
          <input
            className="todo-input-form-title-input"
            type="text"
            onChange={onTitleChange}
          />
        </div>
        <div className="todo-input-form-content-wrapper">
          <label className="todo-input-form-label">내용: </label>
          <input
            className="todo-input-form-content-input"
            type="text"
            onChange={onContentChange}
          />
        </div>
      </form>
      <Button
        borderColor={"#2F4858"}
        backColor={"#4B6767"}
        color={"white"}
        onClick={onClickAdd}
      >
        추가하기
      </Button>
      {/* <button className="todo-input-form-button">추가하기</button> */}
    </div>
  );
}
