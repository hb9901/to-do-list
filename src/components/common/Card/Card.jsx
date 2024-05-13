import { Button } from "../Button/Button";
import "./Card.css";

export default function Card({ id, todoList, setTodoList, title, content }) {
  function onClickDelete() {
    setTodoList(todoList.filter((todo)=> todo.id !== id))
  }

  return (
    <div className="card-wrapper">
      <div className="card-title">{title}</div>
      <div className="card-content">{content}</div>
      <div className="card-button-wrapper">
        <Button
          borderColor={"red"}
          backColor={"white"}
          color={"black"}
          onClick={onClickDelete}
        >
          삭제하기
        </Button>
        <Button borderColor={"green"} backColor={"white"} color={"black"}>
          완료
        </Button>
      </div>
    </div>
  );
}
