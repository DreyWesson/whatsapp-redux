// import { actionTypes } from "../reducers/rootReducer";
import { actionTypes } from "../reducers/userReducer";

export const setUser = (result) => {
  return { type: actionTypes.SET_USER, user: result.user };
};
