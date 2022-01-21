import { SET_LOGIN } from "./types";
const initialData = {
  isLoggedIn: localStorage.getItem("isLoggedIn") ? localStorage.getItem("isLoggedIn") === "true" && true : false,
};

export const loginReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};
