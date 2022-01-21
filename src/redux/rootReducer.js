import { combineReducers } from "redux";
import { currentUserReducer } from "./currentUserReducer";
import { loaderReducer } from "./loaderReducer";
import { loginReducer } from "./loginReducer";
import { moviesReducer } from "./moviesReducer";
import { languageReducer } from "./languageReducer";

export const rootReducer = combineReducers({
  user: currentUserReducer,
  loader: loaderReducer,
  login: loginReducer,
  movies: moviesReducer,
  language: languageReducer,
});
