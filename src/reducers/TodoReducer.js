import { v4 as uuidv4 } from "uuid";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: uuidv4(), content: action.content }];
    case "REMOVE_TODO":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
