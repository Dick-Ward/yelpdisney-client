import React from "react";
import {Link} from 'react-router-dom'
import Options from "../../services/data"

const RestaurantCard = ({ restaurant, selectRestaurant, selectedRestaurant }) => {
  return (
    <Link key={restaurant.id} to={`/restaurants/${restaurant.permalink}`}>
      <div className="restaurant-card">
        <div className="cardTitle">{restaurant.name} </div>
        <br/>
        <div className="cardInfo">
          {restaurant.cuisine !== "" ? <div >{restaurant.cuisine}</div> : <div>Cuisine Not Listed</div> }
          <div>{Options.parseCategoryCode(restaurant.category_code)}</div>
          </div>
          <br/>
        <div className="cardParkName">{restaurant.resort_name ? (<div> {restaurant.resort_name}</div>) : (<div > {restaurant.park}</div>)}</div>
      </div>
    </Link>
      )
    }

export default RestaurantCard;
