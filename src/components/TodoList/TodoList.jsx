import Card from "../common/Card/Card";
import "./TodoList.css";

export default function TodoList({ title, list }) {
  return (
    <div className="todoList-wrapper">
      <div className="todoList-title">{title}</div>
      {
        list.map((todo) => {
          return <Card key={todo.id} title={todo.title} content={todo.content} />;
        })}
    </div>
  );
}
