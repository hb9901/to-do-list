import { useState } from "react";
import { Button } from "../common/Button/Button";
import "./Header.css";

export function Header({ workingList, setWorkingList }) {
  let [todo, setTodo] = useState({
    id: new Date().getDate(),
    title: "",
    content: "",
    state: "",
  });

  function onTitleChange({ target: { value } }) {
    setTodo((todo.title = value));
  }

  function onContentChange({ target: { value } }) {
    setTodo((todo.content = value));
  }

  function onClickAdd() {
    setWorkingList([...workingList, todo]);
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
