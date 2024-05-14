import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { TodoInputForm } from "./components/TodoInputForm/TodoInputForm";
import TodoListView from "./components/TodoListView/TodoListView";

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
        <Header/>
        <TodoListView
          onDelete={handleDelete}
          onToggleDone={handleToggleDone}
          title={"Working.."}
          list={workList}
        />
        <TodoListView
          onDelete={handleDelete}
          onToggleDone={handleToggleDone}
          title={"Done..!"}
          list={doneList}
        />
        <TodoInputForm onAdd={handleAdd} />
      </div>
    </>
  );
}
