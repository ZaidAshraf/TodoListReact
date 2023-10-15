import "./App.css";
import React, { useState } from "react";

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
      console.log(newItem);
      setItemList([...itemList, newItem]);
      setInput("");
    }
  };

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
        <Categories itemList={itemList} setItemList={setItemList} />
      </table>
    </>
  );
}

function Categories({ itemList, setItemList }) {
  return (
    <>
      <thead>
        <tr>
          <th className="header">Todo</th>
        </tr>
      </thead>
      <tbody>
        <ul>
          {itemList
            .filter((i) => !i.isDone)
            .map((item, i) => (
              <ListItem key={i} item={item} setItemList={setItemList} />
            ))}
        </ul>
      </tbody>
      <thead>
        <tr>
          <th className="header">Done</th>
        </tr>
      </thead>
      <tbody>
        <ul>
          {itemList
            .filter((i) => i.isDone)
            .map((item, i) => (
              <ListItem key={i} item={item} setItemList={setItemList} />
            ))}
        </ul>
      </tbody>
      <button
        onClick={() => {
          setItemList((prevItems) => prevItems.filter((i) => !i.isDone));
        }}
      >
        Clear Done
      </button>
    </>
  );
}

const ListItem = ({ item, setItemList }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <li>{item.name}</li>
      <button
        className="btn"
        onClick={() => {
          setItemList((prevItems) =>
            prevItems.map((i) =>
              i.name === item.name
                ? { name: item.name, isDone: !item.isDone }
                : i
            )
          );
        }}
      >
        {item.isDone ? "Undo" : "Done"}
      </button>
    </div>
  );
};

export default function App() {
  return <Container></Container>;
}
