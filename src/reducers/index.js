const initialState = { restaurantList: [] };

const indexReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_RESTAURANTS":
      console.log("Got em!");
      return { ...state, restaurantList: action.payload };
    default:
      return state;
  }
};

export default indexReducer;
