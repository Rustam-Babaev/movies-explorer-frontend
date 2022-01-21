import { SET_LANGUAGE } from "./types";

const initialData = {
  language: localStorage.getItem("language") ? localStorage.getItem("language") : "en",
};

export const languageReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
