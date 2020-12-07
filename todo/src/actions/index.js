export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo };
};
export const toggleComplete = (itemId) => {
  return { type: TOGGLE_TODO, payload: itemId };
};
export const clearCompleted = (itemId) => {
  return { type: CLEAR_COMPLETED };
};
