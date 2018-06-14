import React from 'react'

const Restaurant = ({restaurant, selectRestaurant, deSelectRestaurant, selectedRestaurant}) => {
  function toggleRestaurant(){
    if (restaurant !== selectedRestaurant){

    selectRestaurant(restaurant)
  } else {
    deSelectRestaurant()
  }
  }

  return (
    <div onClick={toggleRestaurant} className="restaurant-card" >
    <h3>{restaurant.name} </h3>
    <h5>Cuisine: {restaurant.cuisine}</h5>
    </div>
  )
}

export default Restaurant
