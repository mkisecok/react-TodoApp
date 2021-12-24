import React, { useState } from "react";
import Nav from "./components/Nav";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import "./App.css";

const greeting = "Important thingss...";
const navTitle = "Todo-App";
const removeItem = "";
const addButton = "Neues Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");
  const deleteItem = (index) => {
    setTodos(todos.filter((element, i) => i !== index));
  };
  return (
    <div className="App">
      <div className="App-header">
        <Nav title={navTitle} />
        <p style={{ color: "lightcoral", fontFamily: "fantasy" }}>{greeting}</p>
        <div className="content">
          <TodoList todos={todos} title={removeItem} deleteItem={deleteItem} />
          <input
            type="text"
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
          />
          <Button
            disabled={newItem.trim().length === 0}
            title={addButton}
            onClick={() => {
              setTodos([...todos, newItem]);
              setNewItem("");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
