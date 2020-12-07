import React, { useState, useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import { addTodo } from "./actions";
import TodoForm from "./components/TodoForm";


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodoText, setNewTodoText] = useState("");

  // const handleChanges = (e) => {
  //   dispatch(setNewTitleText(e.target.value));
  // };
  const handleChanges = (e) => {
    setNewTodoText(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodoText));
    setNewTodoText("");
}
  
  console.log(newTodoText);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={state.newTodoText}
          onChange={handleChanges}
          type="text"
          name="task"
          placeholder="New task..."
        />
        <button>Add Task</button>
      </form>
      <div className="todoList">
        <button className="clear-btn">Clear Completed Tasks</button>
        <div className="items">
          {state.map((item) => (
            <div>{item.item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
