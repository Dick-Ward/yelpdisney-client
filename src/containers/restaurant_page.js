import React, { Component } from "react";
import ReviewForm from "./review_form"
import Review from "../components/review"
import RatingContainer from "../components/rating_container"
import {Button, Grid} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {startCase} from 'lodash';
import {connect} from 'react-redux'
import * as moment from 'moment'


class RestaurantPage extends Component{

  state = {
    reviewFormOpen: false
  }

  back = () =>{
    this.props.history.goBack()
  }



  render(){
    const {restaurant} = this.props

    const unparsedDetails = ["opened_on", "entree_range", "breakfast_hours","lunch_hours", "dinner_hours", "parking", "wine_list"]
    const unwantedDetails = ["average_rating", "average_value", "average_quality", "average_service", "average_cleanliness", "reviews", "name", "id", "permalink", "short_name", "code", "operator_id", "operator_type", "sort_name", "park", "operator_url", "house_specialties", "resort_name"]

    const getRestaurantDetails = () =>{
      let details = []
      for (let detail in restaurant){
        if(restaurant[detail] && restaurant[detail] !== "Resort Dining"){
          if (detail == "category_code"){
            details.push({detail: "Category", information: startCase(restaurant[detail])})
          }
          else if (detail == "cost_code"){
            details.push({detail: "Cost", information: startCase(restaurant[detail])})
          }
          else if(unparsedDetails.includes(detail)){
            details.push({detail: startCase(detail), information: restaurant[detail]})
          }
          else if (restaurant[detail] === true){
            details.push({detail: startCase(detail), information: ""})
          }
          else if(!unwantedDetails.includes(detail)){
            details.push({detail: startCase(detail), information: startCase(restaurant[detail])})
          }
        }
      }
      return details.map(detail =>{
        if (detail.information !== ""){
        return <p key={detail.detail}>{detail.detail}: {detail.information}</p>
      } else {
        return <p key={detail.detail}>{detail.detail}</p>
      }
      })
    }

    const handleClick = () =>{
      if(this.props.user){
        this.setState({reviewFormOpen: true})
      } else {
        alert("You must be logged in to leave a review")
      }
    }

    const closeForm = () =>{
      this.setState({reviewFormOpen: false})
    }

if (this.props.restaurant !== "none"){
    const sortedReviews = restaurant.reviews.sort(function(a, b){ return moment(b.created_at) - moment(a.created_at)})
    const reviews = sortedReviews.map(review =>{
      return <Review key={review.id} review={review}/>
    })



      return (
        <Grid>

          <Grid.Column width={2}>
          </Grid.Column>

          <Grid.Column width={4}>


            <Button onClick={this.back} className="backButton" basic size='mini'>Back</Button>
            <div className="restaurantDetails">
              {getRestaurantDetails()}
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
              <button onClick={handleClick}>New Review</button>
              {this.state.reviewFormOpen === true && <ReviewForm closeForm={closeForm} restaurant_id={restaurant.id}/>}
              {reviews.length > 0 ? <div >{reviews}</div>: "Be the first to review this restaurant!"}
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
        </Grid>
      )}else {
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
      user: state.user
    }
  )
}

export default withRouter(connect(mapStateToProps)(RestaurantPage))
