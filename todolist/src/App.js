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
  const rows = [];

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

  itemList.forEach((item) => {
    rows.push(<ToDoList item={item.name} key={item.name} />);
  });

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
      <table>
        <Categories rows />
      </table>
    </>
  );
}

function Categories({ rows }) {
  // const items = rows.map((item) => <li key={item.name}>{item.name}</li>);

  return (
    <>
      <thead>
        <tr>
          <th>Todo</th>
        </tr>
      </thead>
      <thead>
        <tr>{/* <td>{items}</td> */}</tr>
      </thead>
      <thead>
        <tr>
          <th>Done</th>
        </tr>
      </thead>
    </>
  );
}

function ToDoList({ item }) {
  return (
    <>
      <li>{item}</li>
    </>
  );
}

export default function App() {
  return <Container></Container>;
}
