import React, { Component } from "react";
import Review from "./review"
import ReviewForm from "../containers/review_form"

class RestaurantDetails extends Component{

  state = {
    reviewFormOpen: false
  }

  render(){


    const {restaurant} = this.props

    const handleClick = () =>{
      this.setState({reviewFormOpen: true})
    }

    const reviews = restaurant.reviews.map(review =>{
    return <Review key={review.id} review={review}/>
  })

      return (
        <div className="restaurant-review-card">
          <h3>{restaurant.name} </h3>

          {restaurant.cuisine ? <h5>Cuisine: {restaurant.cuisine}</h5> : null}

          {restaurant.average_rating > 0 ?    <h5>Average Rating: {restaurant.average_rating}</h5> : "Be the first to review this restaurant!"}

          {restaurant.portion_size ? (<p>Portion Size: {restaurant.portion_size}</p>) : null}

          {restaurant.resort_name ? (<p>Resort: {restaurant.resort_name}</p>) : (<p>Park: {restaurant.park}</p>)}

          {restaurant.portion_size ? (<p>Portion Size: {restaurant.portion_size}</p>) : null}

          {reviews.length > 0 ? <div>{reviews}</div>: "Be the first to review this restaurant!"}
          <button onClick={handleClick}>New Review</button>
          {this.state.reviewFormOpen === true ? <div><ReviewForm restaurant_id={restaurant.id}/> </div>: null}
        </div>
      )}
  };

export default RestaurantDetails;
