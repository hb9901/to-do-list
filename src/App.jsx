import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { TodoInputForm } from "./components/TodoInputForm/TodoInputForm";
import TodoListView from "./components/TodoListView/TodoListView";

export default function App() {
  let [todoList, setTodoList] = useState([]);
  const workList = todoList.filter((todo) => !todo.isDone);
  const doneList = todoList.filter((todo) => todo.isDone);

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleToggleDone = (id) => {
    // 방법1. 완료/취소 버튼을 누르면 처음 생성했던 순서대로 정렬한다.
    // setTodoList(
    //   todoList.map((todo) =>  id === todo.id ? { ...todo, isDone: !todo.isDone } : todo)
    // );

    // 방법2. 새로 완료/취소 버튼을 누른 카드를 맨 뒤로 보낸다.
    let newTodoList = {};
    setTodoList([...todoList.filter((todo) => {
      if (todo.id === id) newTodoList = { ...todo, isDone: !todo.isDone };
      return todo.id !== id
    }), newTodoList]);
  };

  const handleAdd = (todo) => {
    setTodoList((prevState) =>  prevState.concat(todo));
  };

  return (
    <>
      <div className="layout-wrapper">
        <Header />
        <TodoInputForm onAdd={handleAdd} />
        <TodoListView
          onDelete={handleDelete}
          onToggleDone={handleToggleDone}
          title={"Working"}
          list={workList}
        />
        <TodoListView
          onDelete={handleDelete}
          onToggleDone={handleToggleDone}
          title={"Done"}
          list={doneList}
        />
      </div>
    </>
  );
}
