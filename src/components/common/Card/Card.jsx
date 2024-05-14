import { Button } from "../Button/Button";
import "./Card.css";

export default function Card({ id, onDelete, onToggleDone, title, content, isDone}) {
  const onClickDelete = () => {
    onDelete(id);
  }

  const onClickState = () => {
    onToggleDone(id);
  }

  return (
    <div className="card-wrapper">
      <div
        className="card-title"
        style={{
          backgroundColor: isDone ? `#F0937F` : `#40CEB1`,
        }}
      >
        {title}
      </div>
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
        <Button
          borderColor={"green"}
          backColor={"white"}
          color={"black"}
          onClick={onClickState}
        >
          {isDone ? `취소` : `완료`}
        </Button>
      </div>
    </div>
  );
}
