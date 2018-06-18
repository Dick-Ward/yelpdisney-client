import {GET_RESTAURANTS, SELECT_RESTAURANT, SUBMIT_REVIEW} from "./types";
import api from "../services/api";

export const getRestaurants = () => dispatch => {
  api.getRestaurants.then(restaurantList =>
    dispatch({ type: GET_RESTAURANTS, payload: restaurantList })
  );
};

export const selectRestaurant = (restaurant) => dispatch => {
  api.getRestaurant(restaurant.id).then(restaurant =>
  dispatch({type: SELECT_RESTAURANT, payload: restaurant})
)
}

export const deSelectRestaurant = (restaurant) => dispatch => {
  dispatch({type: SELECT_RESTAURANT, payload: "none"})
}

export const submitReview = (review) => dispatch => {
  api.submitReview(review).then(restaurantList =>
  dispatch({type: SUBMIT_REVIEW, payload: restaurantList})
)
}
