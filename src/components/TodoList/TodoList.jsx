import Card from "../common/Card/Card";
import "./TodoList.css";

export default function TodoList(list) {
  return (
    <div className="todoList-wrapper">
      {
        list.map((todo)=>{
          <Card id={todo.id} title={todo.title} content={todo.content} />;
        })
      }
    </div>
  )
}
