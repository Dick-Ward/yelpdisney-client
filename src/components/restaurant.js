import React from 'react'

const Restaurant = ({restaurant, selectRestaurant}) => {
  return (
    <div onClick={() => selectRestaurant(restaurant)} className="restaurant-card" >
    <h3>{restaurant.name} </h3>
    <h5>Cuisine: {restaurant.cuisine}</h5>
    </div>
  )
}

export default Restaurant
