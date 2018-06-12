import React from 'react'

const RestaurantDetails = ({restaurant}) => {
  if (restaurant){
  return(
    <div className="restaurant-card" >
    <h3>{restaurant.name} </h3>
    <h5>Cuisine: {restaurant.cuisine}</h5>
    {restaurant.portion_size ? <p>Portion Size: {restaurant.portion_size}</p> : null }
    <p>Park: {restaurant.park}</p>
    </div>
    )
  } else {
    return null
  }
}

export default RestaurantDetails
