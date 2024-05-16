import Card from "../common/Card/Card";
import "./TodoListView.css";

export default function TodoListView({ onDelete, onToggleDone, title, list }) {
  return (
    <section className="todo-list-wrapper">
      <div className="todo-list-title">{title}</div>
      <ul className="todo-list-view">
        {list.map((todo) => {
          return (
          <li key={todo.id}>
            <Card
              id={todo.id}
              onDelete={onDelete}
              onToggleDone={onToggleDone}
              title={todo.title}
              content={todo.content}
              isDone={todo.isDone}
            />
          </li>)
        })}
      </ul>
    </section>
  );
}
