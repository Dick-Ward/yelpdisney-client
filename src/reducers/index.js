const initialState = { restaurantList: [] };

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      return { ...state, restaurantList: action.payload };
    default:
      return state;
  }
};

export default indexReducer;
