import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';

export default function App() {
  let [workList, setWorkList] = useState([]); 
  let [doneList, setDoneList] = useState([]);


  return (
    <>
      <div className="layout-wrapper">
        <Header setState={setWorkList} />
        {/* <TodoList title={"Working.."} list={workList} setState={setWorkList} /> */}
        {/* <TodoList title={"Done..!"} list={doneList} setState={setDoneList} /> */}
      </div>
    </>
  );
}