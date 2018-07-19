import React from "react";

const Restaurant = ({ restaurant, selectRestaurant, deSelectRestaurant, selectedRestaurant }) => {

  function toggleRestaurant() {
      if (restaurant.name !== selectedRestaurant.name) {
      selectRestaurant(restaurant);
    } else {
      deSelectRestaurant();
    }
  }

  return (
    <div onClick={toggleRestaurant} className="restaurant-card">
      <h3>{restaurant.name} </h3>
      {restaurant.resort_name ? (<p>Resort: {restaurant.resort_name}</p>) : (<p>Park: {restaurant.park}</p>)}
    </div>
  );
};

export default Restaurant;
