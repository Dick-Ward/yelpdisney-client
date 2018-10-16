import React, { Component } from "react";
import {Button, Grid} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as moment from 'moment'
import Review from "../reviews/review"
import ReviewForm from "../reviews/review_form"
import RatingContainer from "./rating_container"
import RestaurantDetails from './restaurantDetails'

class RestaurantPage extends Component{

  state = {
    reviewFormOpen: false
  }

  back = () =>{
    this.props.history.goBack()
  }

  newReview = () =>{
    if(this.props.user){
      this.setState({reviewFormOpen: true})
    } else {
      alert("You must be logged in to leave a review")
    }
  }

  closeForm = () =>{
    this.setState({reviewFormOpen: false})
  }

  render(){

    const {restaurant} = this.props

    if (restaurant !== "none"){

        const sortedReviews = restaurant.reviews.sort(function(a, b){ return moment(b.created_at) - moment(a.created_at)})
        const reviews = sortedReviews.map(review =>{ return <Review key={review.id} review={review}/> })

      return (
        <Grid>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button onClick={this.back} className="backButton" basic size='mini'>Back</Button>
            <div className="restaurantDetails">
              <RestaurantDetails restaurant={restaurant} />
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div>
              <div className="restaurantTitle">{restaurant.name} </div>
              <div className="restaurantParkName"> {restaurant.resort_name ? (<div> at {restaurant.resort_name}</div>) : (<div>at {restaurant.park}</div>)}</div>
            </div>
            <RatingContainer
              rating={restaurant.average_rating}
              quality={restaurant.average_quality}
              cleanliness={restaurant.average_cleanliness}
              service={restaurant.average_service}
              value={restaurant.average_value}
            />
            <div className="reviewContainer">
              <button onClick={this.newReview}>New Review</button>
              {this.state.reviewFormOpen === true && <ReviewForm closeForm={this.closeForm} restaurant_id={restaurant.id}/>}
              {reviews.length > 0 ? <div >{reviews}</div>: "Be the first to review this restaurant!"}
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
        </Grid>
      )
    } else {
        return (
          <div> Loading...</div>
        )
      }
    }
      componentDidMount(){
        this.props.selectRestaurant(this.props.renderProps.match.params)
      }
  }

function mapStateToProps(state){
  return(
    {
      user: state.auth.user
    }
  )
}

export default withRouter(connect(mapStateToProps)(RestaurantPage))
