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
    </div>
  );
};

export default Restaurant;
