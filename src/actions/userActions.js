import { actionTypes } from "./actionTypes";
// import { actionTypes } from "../reducers/userReducer";

// export const setUser = (result) => {
//   return { type: actionTypes.SET_USER, user: result.user };
// };

export const setUser = (result) => {
  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_USER, user: result.user });
};
