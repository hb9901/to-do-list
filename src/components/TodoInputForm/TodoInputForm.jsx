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
  const MAX_TITLE_LENGTH = 10;
  const MAX_CONTENT_LEGNTH = 10;
  const $titleInput = document.querySelector(".todo-input-form-title-input");
  const $contentInput = document.querySelector(
    ".todo-input-form-content-input"
  );

  const onTitleChange = ({ target: { value } }) => {
    if (value.length < MAX_TITLE_LENGTH) {
      setTodo((prevState) => {
        return { ...prevState, title: value };
      });
    } else {
      alert(`제목은 ${MAX_TITLE_LENGTH}자를 초과할 수 없습니다!`);
      $titleInput.value = todo.title;
    }
  };

  const onContentChange = ({ target: { value } }) => {
    if (value.length < MAX_CONTENT_LEGNTH) {
      setTodo((prevState) => {
        return { ...prevState, content: value };
      });
    } else {
      alert(`내용은 ${MAX_CONTENT_LEGNTH}자를 초과할 수 없습니다!`);
      $contentInput.value = todo.content;
    }
  };

  const onClickAdd = (e) => {
    e.preventDefault();
    if (todo.title.length > 0 && todo.content.length > 0) {
      setTodo((prevState) => {
        return { ...prevState, id: new Date().getTime() };
      });
      onAdd(todo);
    } else {
      alert("빈 칸은 추가할 수 없습니다!");
    }
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
