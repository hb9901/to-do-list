import Card from "../common/Card/Card";
import "./TodoList.css";

export default function TodoList({ todoList, setTodoList, title, list }) {
  return (
    <div className="todoList-wrapper">
      <div className="todoList-title">{title}</div>
      {
        list.map((todo) => {
          return (
            <Card
              key={todo.id}
              id = {todo.id}
              todoList={todoList}
              setTodoList={setTodoList}
              title={todo.title}
              content={todo.content}
            />
          );
        })
      }
    </div>
  );
}
