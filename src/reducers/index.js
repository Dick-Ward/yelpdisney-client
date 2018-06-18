const initialState = { restaurantList: [], selectedRestaurant: "none" };

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      return { ...state, restaurantList: action.payload };
    case "SELECT_RESTAURANT":
      return {...state, selectedRestaurant: action.payload}
    case "SUBMIT_REVIEW":
      console.log("review working")
      return { ...state, restaurantList: action.payload };
    default:
      return state;
  }
};

export default indexReducer;