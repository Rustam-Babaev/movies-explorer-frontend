import {
  SET_CURRENT_USER,
  SET_LOADER,
  SET_LOGIN,
  SET_FILTERED_MOVIES,
  SET_SAVED_MOVIES,
  SET_LOADER_DELETE,
  SET_MOVIES_DATA,
} from "./types";

export function setCurrentUser(user) {
  return { type: SET_CURRENT_USER, payload: user };
}

export function setLoader(isLoading) {
  return { type: SET_LOADER, payload: isLoading };
}
export function setLoaderDelete(movieId) {
  return { type: SET_LOADER_DELETE, payload: movieId };
}

export function loggedIn(isLoggedIn) {
  return { type: SET_LOGIN, payload: isLoggedIn };
}

export function setFilteredMovies(movies) {
  return { type: SET_FILTERED_MOVIES, payload: movies };
}

export function setSavedMovies(movies) {
  return { type: SET_SAVED_MOVIES, payload: movies };
}

export function setMoviesData(movies) {
  return { type: SET_MOVIES_DATA, payload: movies };
}
