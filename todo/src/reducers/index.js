import { ADD_TODO } from "./../actions";

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about TODO FORsadMS',
        completed: false,
        id: 3897589
    },
]



// const reducer = (state, action) => {
//   switch (action.type) {
//     case ("SET_TITLE"):
//       return ({...state, title: action.payload});

//     case ("SET_EDITING"):
//       return ({...state, editing: action.payload});

//     case ("SET_NEW_TITLE_TEXT"):
//       return ({...state, newTitleText: action.payload});

//     default:
//       return (state);
//   }
// };

const reducer = (state, action) => {
  switch (action.type) {
    case (ADD_TODO):
      return ([...state, {item: action.payload, completed: false, id: Date.now()}]);
    default:
      return (state);
  }
};

export default reducer;