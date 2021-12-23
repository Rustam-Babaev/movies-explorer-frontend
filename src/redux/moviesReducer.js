import { SET_FILTERED_MOVIES, SET_SAVED_MOVIES, SET_MOVIES_DATA } from "./types";
const filteredMovies = [];
const savedMovies = localStorage.getItem("savedMovies") ? JSON.parse(localStorage.getItem("savedMovies")) : [];
const moviesData = localStorage.getItem("moviesData") ? JSON.parse(localStorage.getItem("moviesData")) : [];

const initialData = {
  filteredMovies: filteredMovies,
  savedMovies: savedMovies,
  moviesData: moviesData,
};

export const moviesReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_FILTERED_MOVIES:
      return { ...state, filteredMovies: action.payload };
    case SET_SAVED_MOVIES:
      return { ...state, savedMovies: action.payload };
    case SET_MOVIES_DATA:
      return { ...state, moviesData: action.payload };
    default:
      return state;
  }
};
