import { actionTypes } from "../reducers/rootReducers";

export const setUser = (result) => {
  return { type: actionTypes.SET_USER, user: result.user };
};
