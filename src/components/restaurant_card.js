import React from "react";
import {Link} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'

const RestaurantCard = ({ restaurant, selectRestaurant, selectedRestaurant }) => {

  const parseCategoryCode = (code) =>{
    let rest_code
    switch (code) {
      case "counter_service":
        rest_code = "Counter Service"
        break
      case "table_service":
        rest_code = "Table Service"
        break
      case "bar_or_lounge":
        rest_code = "Bar / Lounge"
        break
      case "room_service":
        rest_code = "Room Service"
        break
      case "market":
        rest_code = "Market"
        break
      case "food_cart":
        rest_code = "Food Cart"
        break
      default:
        rest_code = "none"
    }
    return rest_code
  }

  return (
    <div className="restaurant-card">
      <Link key={restaurant.id} to={`/restaurants/${restaurant.permalink}`}>


        <div className="cardTitle">{restaurant.name} </div>


        <div className="right">Cusine: {restaurant.cuisine} </div>
        <div className="right">Category: {parseCategoryCode(restaurant.category_code)}</div>


        {restaurant.resort_name ? (<p>Resort: {restaurant.resort_name}</p>) : (<p>Park: {restaurant.park}</p>)}

      </Link>
      </div>
      );
      };

export default RestaurantCard;
