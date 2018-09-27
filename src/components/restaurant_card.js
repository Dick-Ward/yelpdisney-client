import React from "react";
import {Link} from 'react-router-dom'
import Options from "../services/data"

const RestaurantCard = ({ restaurant, selectRestaurant, selectedRestaurant }) => {



  return (
    <div className="restaurant-card">
      <Link key={restaurant.id} to={`/restaurants/${restaurant.permalink}`}>


        <div className="cardTitle">{restaurant.name} </div>


        <div className="right">Cusine: {restaurant.cuisine} </div>
        <div className="right">Category: {Options.parseCategoryCode(restaurant.category_code)}</div>


        {restaurant.resort_name ? (<p>Resort: {restaurant.resort_name}</p>) : (<p>Park: {restaurant.park}</p>)}

      </Link>
      </div>
      );
      };

export default RestaurantCard;
