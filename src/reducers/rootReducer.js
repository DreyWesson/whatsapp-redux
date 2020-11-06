import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ userReducer, messageReducer });

// export const initialState = {
//   user: null,
//   message: "refree",
// };

// export const actionTypes = {
//   SET_USER: "SET_USER",
// };

// const rootReducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case actionTypes.SET_USER:
//       console.log(action.user);
//       return {
//         ...state,
//         user: action.user,
//       };
//     default:
//       return state;
//   }
// };

export default rootReducer;
