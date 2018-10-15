const initialState = {
  user: null,
  token: null,
  error: null
  }

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {...state, user: action.payload.user, token: action.payload.token}
    case "HANDLE_ERROR":
      return {...state, error: action.payload}
    default:
      return state;
  }
};

export default authReducer;
