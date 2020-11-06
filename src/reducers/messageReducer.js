export const initialState = {
  message: "refree",
};

export const actionTypes = {
  SET_MSG: "SET_MSG",
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
