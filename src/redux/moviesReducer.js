import { SET_FILTERED_MOVIES, SET_SAVED_MOVIES } from "./types";
const filteredMovies = [];
const savedMovies = localStorage.getItem("savedMovies") ? JSON.parse(localStorage.getItem("savedMovies")) : [];

const initialMovies = {
  filteredMovies: filteredMovies,
  savedMovies: savedMovies,
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case SET_FILTERED_MOVIES:
      return { ...state, filteredMovies: action.payload };
    case SET_SAVED_MOVIES:
      return { ...state, savedMovies: action.payload };
    default:
      return state;
  }
};
