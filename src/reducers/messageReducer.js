import { actionTypes } from "../actions/actionTypes";

export const initialState = {
  message: "refree",
};

const messageReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_MSG:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default messageReducer;
