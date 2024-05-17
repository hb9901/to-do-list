import { useRef, useState } from "react";
import {
  checkBtnValidation,
  checkInputValidation,
} from "../../assets/functions";
import { Button } from "../common/Button/Button";
import "./TodoInputForm.css";

export function TodoInputForm({ onAdd }) {
  const MAX_TITLE_LENGTH = 10;
  const MAX_CONTENT_LEGNTH = 20;

  const [todo, setTodo] = useState({
    id: crypto.randomUUID,
    title: "",
    content: "",
    isDone: false,
  });
  const titleInputRef = useRef(null);

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

    const isBtnValidate = checkBtnValidation({
      targetList: [todo.title, todo.content],
      limit: 0,
      message: "빈 칸은 추가할 수 없습니다!",
    });

    if (isBtnValidate) {
      setTodo((prevState) => {
        return { ...prevState, id: new Date().getTime() };
      });
      onAdd(todo);
    }

    titleInputRef.current.focus();
  };

  return (
    <div className="todo-input-form-wrapper">
      <form className="todo-input-form" onSubmit={onClickAdd}>
        <div>
          <label className="todo-input-form-label">
            제목: 
            <input
              ref={titleInputRef}
              className="todo-input-form-title-input"
              type="text"
              onChange={onTitleChange}
            />
          </label>
          <label className="todo-input-form-label">
            내용: 
            <input
              className="todo-input-form-content-input"
              type="text"
              onChange={onContentChange}
            />
          </label>
        </div>
        <Button borderColor={"#2F4858"} backColor={"#4B6767"} color={"white"}>
          추가하기
        </Button>
      </form>
    </div>
  );
}
