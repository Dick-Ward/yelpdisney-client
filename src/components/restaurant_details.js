import React from "react";
import Review from "./review"

const RestaurantDetails = ({ restaurant }) => {

const reviews = restaurant.reviews.map(review =>{
  return <Review key={review.id} review={review}/>
})

    return (
      <div className="restaurant-review-card">
        <h3>{restaurant.name} </h3>

        <h5>Cuisine: {restaurant.cuisine}</h5>

        {restaurant.portion_size ? (<p>Portion Size: {restaurant.portion_size}</p>) : null}

        {restaurant.resort_name ? (<p>Resort: {restaurant.resort_name}</p>) : (<p>Park: {restaurant.park}</p>)}

        {restaurant.portion_size ? (<p>Portion Size: {restaurant.portion_size}</p>) : null}

        {reviews.length > 0 ? <div>{reviews}</div>: "Be the first to review this restaurant!"}
        <button>New Review</button>
      </div>
    );
};

export default RestaurantDetails;
