import Card from "../common/Card/Card";
import "./TodoList.css";

export default function TodoList({ title, list }) {
  console.log(list)
  return (
    <div className="todoList-wrapper">
      <div className="todoList-title">{title}</div>
      {
        list.map((todo) => {
          <Card id={todo.id} title={todo.title} content={todo.content} />;
        })}
    </div>
  );
}
