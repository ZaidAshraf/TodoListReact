import "./App.css";

function Container() {
  return (
    <>
      <div class="container">
        <h1>TodoList</h1>
      </div>
      <div class="container">
        <Inputbox />
      </div>
      <div class="container">
        <ListTable />
      </div>
    </>
  );
}

function Inputbox() {
  return (
    <>
      <input type="text"></input>
      <button class="btn">Add</button>
    </>
  );
}

function ListTable() {
  return <></>;
}

export default function App() {
  return <Container></Container>;
}
