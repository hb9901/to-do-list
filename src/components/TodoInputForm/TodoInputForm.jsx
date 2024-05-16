import { useState } from "react";
import {
  checkBtnValidation,
  checkInputValidation,
} from "../../assets/functions";
import { Button } from "../common/Button/Button";
import "./TodoInputForm.css";

export function TodoInputForm({ onAdd }) {
  const MAX_TITLE_LENGTH = 10;
  const MAX_CONTENT_LEGNTH = 10;
  
  let [todo, setTodo] = useState({
    id: new Date().getTime(),
    title: "",
    content: "",
    isDone: false,
  });

  const onTitleChange = ({ target }) => {
    checkInputValidation({
      target: target,
      limit: MAX_TITLE_LENGTH,
      message: `제목은 ${MAX_TITLE_LENGTH}자를 넘길 수 없습니다!`,
      value: todo.title,
    });

    setTodo((prevState) => {
      return { ...prevState, title: target.value };
    });
  };

  const onContentChange = ({ target }) => {
    checkInputValidation({
      target: target,
      limit: MAX_CONTENT_LEGNTH,
      message: `내용은 ${MAX_CONTENT_LEGNTH}자를 넘길 수 없습니다!`,
      value: todo.content,
    });

    setTodo((prevState) => {
      return { ...prevState, content: target.value };
    });
  };

  const onClickAdd = (e) => {
    e.preventDefault();

    const ifBtnValidate = checkBtnValidation({
      targetList: [todo.title, todo.content],
      limit: 0,
      message: "빈 칸은 추가할 수 없습니다!",
    });

    if (ifBtnValidate) {
      setTodo((prevState) => {
        return { ...prevState, id: new Date().getTime() };
      });
      onAdd(todo);
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
