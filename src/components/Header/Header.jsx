import { useState } from "react";
import { Button } from "../common/Button/Button";
import "./Header.css";

export function Header({ workingList, setWorkList }) {
  let [todo, setTodo] = useState({
    id: new Date().getUTCDate(),
    title: "",
    content: "",
    state: "",
  });

  function onTitleChange({ target: { value } }) {
    setTodo((prevState) => {
      return {...prevState, title: value}
    });
  }

  function onContentChange({ target: { value } }) {
    setTodo((prevState) => {
      return { ...prevState, content: value };
    });
  }

  function onClickAdd(e) {
    e.preventDefault();
    setWorkList((prevState) => {
      return [...prevState, todo];
    });
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
