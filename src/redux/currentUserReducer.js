import { SET_CURRENT_USER } from "./types";
const initialUser = {
  currentUser: {},
};

export const currentUserReducer = (state = initialUser, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
