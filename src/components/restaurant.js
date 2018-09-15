import React from "react";
import {Link} from 'react-router-dom'

const Restaurant = ({ restaurant, selectRestaurant, selectedRestaurant }) => {


  return (
    <div className="restaurant-card">
      <Link key={restaurant.id} to={`/restaurants/${restaurant.permalink}`}>
        <h3>{restaurant.name} </h3>
        {restaurant.resort_name ? (<p>Resort: {restaurant.resort_name}</p>) : (<p>Park: {restaurant.park}</p>)}
      </Link>
      </div>
      );
      };

export default Restaurant;
