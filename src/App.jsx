import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  let [todoList, setTodoList] = useState([]);
  let workList = [];
  let doneList = [];

  todoList.forEach((todo) => {
    if (!todo.isDone) {
      workList.push(todo);
    } else{
      doneList.push(todo);
    }
  });

  // const workList = todoList.filter((todo) => !todo.isDone);
  // const doneList = todoList.filter((todo) => todo.isDone);

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleToggleDone = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleAdd = (todo) => {
    setTodoList((prevState) => {
      return [...prevState, todo];
    });
  };

  return (
    <>
      <div className="layout-wrapper">
        <Header onAdd={handleAdd} />
        <TodoList
          onDelete={handleDelete}
          onToggleDone={handleToggleDone}
          title={"Working.."}
          list={workList}
        />
        <TodoList
          onDelete={handleDelete}
          onToggleDone={handleToggleDone}
          title={"Done..!"}
          list={doneList}
        />
      </div>
    </>
  );
};

export default App;
