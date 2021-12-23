import { SET_LOGIN } from "./types";

const initialData = {
  isLoggedIn: localStorage.getItem("isLoggedIn")
    ? localStorage.getItem("isLoggedIn") !== "false" && localStorage.getItem("isLoggedIn")
    : false,
};

export const loginReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};
