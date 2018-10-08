import React, { Component } from "react";
import ReviewForm from "./review_form"
import Review from "../components/review"
import Rating from "../components/rating"
import {Button} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import Options from "../services/data"


class RestaurantPage extends Component{

  state = {
    reviewFormOpen: false
  }

  back = () =>{
    this.props.history.goBack()
  }



  render(){

    const {restaurant} = this.props

    const getRestaurantDetails = () =>{
      let details = []
      for (let detail in restaurant){
        if (restaurant[detail] && detail !== "reviews"){
          details.push({detail, information: restaurant[detail]})
        }
      }
      return details.map(detail =>{
        return <p key={detail.detail}>{detail.detail}: {detail.information}</p>
      })
    }

    const handleClick = () =>{
      this.setState({reviewFormOpen: true})
    }

if (this.props.restaurant !== "none"){
    const reviews = restaurant.reviews.map(review =>{
      return <Review key={review.id} review={review}/>
    })



      return (
        <div className="restaurant-review-card">
          <Button onClick={this.back} basic size='mini'>Back</Button>
          <h3>{restaurant.name} </h3>
          <Rating style={{width: "100px"}} rating={restaurant.average_rating} quality={restaurant.average_quality} cleanliness={restaurant.average_cleanliness} service={restaurant.average_service} value={restaurant.average_value}/>




          {reviews.length > 0 ? <div>{reviews}</div>: "Be the first to review this restaurant!"}
          <button onClick={handleClick}>New Review</button>
          {getRestaurantDetails()}
          {this.state.reviewFormOpen === true && <div><ReviewForm restaurant_id={restaurant.id}/> </div>}


        </div>
      )}else {
        return (
          <div> Loading...</div>
        )
      }
    }
      componentDidMount(){
        this.props.selectRestaurant(this.props.renderProps.match.params)
      }
  };

export default withRouter(RestaurantPage);
