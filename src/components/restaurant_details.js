import React from 'react'

const RestaurantDetails = ({restaurant, deSelectRestaurant}) => {
  if (restaurant){
  return(
    <div onClick={deSelectRestaurant} className="restaurant-card" >
    <h3>{restaurant.name} </h3>
    <h5>Cuisine: {restaurant.cuisine}</h5>
    {restaurant.portion_size ? <p>Portion Size: {restaurant.portion_size}</p> : null }
    {restaurant.resort_name ? <p>Resort: {restaurant.resort_name}</p> : <p>Park: {restaurant.park}</p>}
    {restaurant.portion_size ? <p>Portion Size: {restaurant.portion_size}</p> : null }
    {restaurant.operator_url ? <a href={`${restaurant.operator_url}`} target="blank">View at Disney.go</a> : null}
    </div>
    )
  } else {
    return null
  }
}

export default RestaurantDetails
