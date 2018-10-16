const initialState = {
  restaurantList: [],
  selectedRestaurant: "none",
  parkFilter: "",
  cuisineFilter: "",
  categoryFilter: "",
  cuisineOptions: [{key: "All Cuisine Types", text: "All Cuisine Types", value: ""}],
  fetchComplete: null
  }

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      return { ...state, restaurantList: action.payload };
    case "SELECT_RESTAURANT":
      return {...state, selectedRestaurant: action.payload}
    case "SUBMIT_REVIEW":
      return { ...state, selectedRestaurant: action.payload}
    case "APPLY_PARK_FILTER":
      return {...state, parkFilter: action.payload}
    case "APPLY_CUISINE_FILTER":
      return {...state, cuisineFilter: action.payload}
    case "APPLY_CATEGORY_FILTER":
      return {...state, categoryFilter: action.payload}
    case "TOGGLE_FETCH_COMPLETE":
      return {...state, fetchComplete: action.payload}
    default:
      return state;
  }
};

export default restaurantsReducer;
