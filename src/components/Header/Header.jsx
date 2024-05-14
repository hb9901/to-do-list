import { useState } from "react";
import { Button } from "../common/Button/Button";
import "./Header.css";

export function Header({ onAdd }) {
   let [todo, setTodo] = useState({
     id: new Date().getTime(),
     title: "",
     content: "",
     isDone: false,
   });

  const onTitleChange = ({ target: { value } }) => {
    setTodo((prevState) => {
      return {...prevState, title: value}
    });
  }

  const onContentChange = ({ target: { value } }) => {
    setTodo((prevState) => {
      return { ...prevState, content: value };
    });
  }

  const onClickAdd = (e) => {
    e.preventDefault();
    setTodo((prevState) => {
      return { ...prevState, id: new Date().getTime()};
    });
    onAdd(todo);
  }

  return (
    <div className="header-wrapper">
      <form>
        <label>제목</label>
        <input type="text" onChange={onTitleChange} />
        <label>내용</label>
        <input type="text" onChange={onContentChange} />
        <Button backColor={"blue"} color={"white"} onClick={onClickAdd}>
          추가하기
        </Button>
      </form>
    </div>
  );
}
