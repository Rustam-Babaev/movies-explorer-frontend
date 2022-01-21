import { SET_LOADER, SET_LOADER_DELETE } from "./types";
const initialData = {
  isLoading: false,
  deleteLoadingId: "",
};

export const loaderReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    case SET_LOADER_DELETE:
      return { ...state, deleteLoadingId: action.payload };
    default:
      return state;
  }
};
