import React from 'react'

const Restaurant = ({restaurant}) => {

  return (
    <div className="restaurant-card" >
    <h3>{restaurant.name} </h3>
    <h5>Cuisine: {restaurant.cuisine}</h5>
    {restaurant.portion_size ? <p>{restaurant.portion_size}</p> : null }
    <p>{restaurant.park}</p>
    </div>
  )
}

export default Restaurant
