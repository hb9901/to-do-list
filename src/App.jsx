import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  let [todoList, setTodoList] = useState([]);
  let workList = [];
  let doneList = [];

  todoList.forEach((todo) => {
    if (todo.state === "working") {
      workList.push(todo);
    } else if (todo.state === "done") {
      doneList.push(todo);
    }
  });

  return (
    <>
      <div className="layout-wrapper">
        <Header setTodoList={setTodoList} />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          title={"Working.."}
          list={workList}
        />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          title={"Done..!"}
          list={doneList}
        />
      </div>
    </>
  );
}
