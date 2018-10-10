import React from "react";
import {Link} from 'react-router-dom'
import Options from "../services/data"

const RestaurantCard = ({ restaurant, selectRestaurant, selectedRestaurant }) => {



  return (
    <div className="restaurant-card">
      <Link key={restaurant.id} to={`/restaurants/${restaurant.permalink}`}>


        <div className="cardTitle">{restaurant.name} </div>

        <div className="cardInfo">
          {restaurant.cuisine !== "" ? <div >{restaurant.cuisine}</div> : <div>Cusine Not Listed</div> }
          <div >{Options.parseCategoryCode(restaurant.category_code)}</div>
        </div>


        {restaurant.resort_name ? (<div className="cardParkName"> {restaurant.resort_name}</div>) : (<div className="cardParkName"> {restaurant.park}</div>)}

      </Link>
      </div>
      );
      };

export default RestaurantCard;
