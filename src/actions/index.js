import {
   GET_RESTAURANTS,
   SELECT_RESTAURANT,
   APPLY_PARK_FILTER,
   APPLY_CUISINE_FILTER,
   APPLY_CATEGORY_FILTER,
   TOGGLE_FETCH_COMPLETE
  }
  from "./types";
import api from "../services/api";

export const getRestaurants = () => dispatch => {
  api.getRestaurants.then(restaurantList =>
    dispatch({ type: GET_RESTAURANTS, payload: restaurantList })
  )}

export const resetRestaurants= () => dispatch => {
  dispatch({ type: GET_RESTAURANTS, payload: []})
}

export const searchRestaurants = (query) => dispatch => {
  dispatch({type: TOGGLE_FETCH_COMPLETE, payload: false})
  api.searchRestaurants(query).then(restaurantList =>
    dispatch({ type: GET_RESTAURANTS, payload: restaurantList })
  ).then(success => dispatch({type: TOGGLE_FETCH_COMPLETE, payload: true}))

}

export const selectRestaurant = (restaurant) => dispatch => {
  api.getRestaurant(`${restaurant.permalink}`).then(restaurant =>
  dispatch({type: SELECT_RESTAURANT, payload: restaurant})
)}

export const submitReview = (review) => dispatch => {
  api.submitReview(review).then(restaurant =>
  dispatch({type: SELECT_RESTAURANT, payload: restaurant})
)}

export const applyParkFilter = (park) => dispatch => {
  dispatch({ type: APPLY_PARK_FILTER, payload: park })
}

export const applyCuisineFilter = (cuisine) => dispatch => {
  dispatch({ type: APPLY_CUISINE_FILTER, payload: cuisine })
}

export const applyCategoryFilter = (category) => dispatch => {
  dispatch({ type: APPLY_CATEGORY_FILTER, payload: category })
}
export const toggleFetchComplete = (fetchComplete) => dispatch => {
  dispatch({ type: TOGGLE_FETCH_COMPLETE, payload: !fetchComplete})
}
