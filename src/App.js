import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const newTodo = event.target.value;

    setInputText(newTodo);
  };

  const addTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, inputText];
    });
    setInputText("");
  };

  const deleteItem = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              id={index}
              todo={todo}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
