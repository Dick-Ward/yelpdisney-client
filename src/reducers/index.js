const initialState = { restaurantList: [], selectedRestaurant: {} };

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      return { ...state, restaurantList: action.payload };
    case "SELECT_RESTAURANT":
    console.log("HI!")
      return {...state, selectedRestaurant: action.payload}
    default:
      return state;
  }
};

export default indexReducer;
