import "./App.css";
import React, { useEffect, useState } from "react";

function Container() {
  return (
    <>
      <div className="container">
        <div>
          <h1>Todo</h1>
        </div>
        <div>
          <Inputbox />
        </div>
      </div>
    </>
  );
}

function Inputbox() {
  const [itemList, setItemList] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input !== "") {
      const newItem = { name: input, isDone: false };
      setItemList([...itemList, newItem]);
      setInput("");
    }
  };

  useEffect(() => {
    console.log(itemList);
  }, [itemList]);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
      <Categories />
      <ToDoList />
    </>
  );
}

function Categories({ category }) {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  );
}

function ToDoList({ toDo }) {
  return (
    <>
      <h1>{toDo}</h1>
    </>
  );
}

export default function App() {
  return <Container></Container>;
}
