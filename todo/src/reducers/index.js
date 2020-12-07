import { ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from "./../actions";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
  {
    item: "Learn about TODO FORsadMS",
    completed: false,
    id: 3897589,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() },
      ];
    case TOGGLE_TODO:
      const newTasks = state.map((item) => {
        if (action.payload === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return newTasks;
    case CLEAR_COMPLETED:
      const completedTasks = state.filter((item) => !item.completed);
      return completedTasks;
    default:
      return state;
  }
};

export default reducer;
