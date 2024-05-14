import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

export default function App () {
  let [todoList, setTodoList] = useState([]);
  const workList = todoList.filter((todo) => !todo.isDone);
  const doneList = todoList.filter((todo) => todo.isDone);

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleToggleDone = (id) => {
    todoList.forEach((todo, index) => {
      if (todo.id === id) {
        const newTodoList = todoList[index];
        newTodoList.isDone = !newTodoList.isDone;

        setTodoList([
          ...todoList.filter((todo) => todo.id !== id),
          newTodoList,
        ]);
      }
    });
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
