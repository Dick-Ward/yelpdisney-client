import React from "react";
import Review from "./review"

const RestaurantDetails = ({ restaurant, deSelectRestaurant }) => {

const reviews = restaurant.reviews.map(review =>{
  return <Review key={review.id} review={review}/>
})
    return (
      <div onClick={deSelectRestaurant} className="restaurant-card">
        <h3>{restaurant.name} </h3>

        <h5>Cuisine: {restaurant.cuisine}</h5>

        {restaurant.portion_size ? (<p>Portion Size: {restaurant.portion_size}</p>) : null}

        {restaurant.resort_name ? (<p>Resort: {restaurant.resort_name}</p>) : (<p>Park: {restaurant.park}</p>)}

        {restaurant.portion_size ? (<p>Portion Size: {restaurant.portion_size}</p>) : null}

        {reviews.length > 0 ? {reviews} : "Be the first to review this restaurant!"}
      </div>
    );
};

export default RestaurantDetails;
