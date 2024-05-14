import Card from "../common/Card/Card";
import "./TodoListView.css";

export default function TodoListView({ onDelete, onToggleDone, title, list }) {
  return (
    <div className="todoList-wrapper">
      <div className="todoList-title">{title}</div>
      {list.map((todo) => {
        return (
          <Card
            key={todo.id}
            id={todo.id}
            onDelete={onDelete}
            onToggleDone={onToggleDone}
            title={todo.title}
            content={todo.content}
            isDone={todo.isDone}
          />
        );
      })}
    </div>
  );
}
