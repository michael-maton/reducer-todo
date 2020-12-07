import React, { useState, useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import { addTodo, toggleComplete, clearCompleted } from "./actions";
import Todo from "./components/Todo";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodoText, setNewTodoText] = useState("");

  const handleChanges = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodoText));
    setNewTodoText("");
  };

  const handleToggle = (itemId) => {
    dispatch(toggleComplete(itemId));
  };

  const handleCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={newTodoText}
          onChange={handleChanges}
          type="text"
          name="task"
          placeholder="New task..."
        />
        <button>Add Task</button>
      </form>
      <div className="todoList">
        <button onClick={handleCompleted} className="clear-btn">
          Clear Completed Tasks
        </button>
        <div className="items">
          {state.map((item) => (
            <Todo key={item.id} item={item} handleToggle={handleToggle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
