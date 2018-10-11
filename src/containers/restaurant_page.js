import React, { Component } from "react";
import ReviewForm from "./review_form"
import Review from "../components/review"
import RatingContainer from "../components/rating_container"
import {Button, Grid} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {startCase} from 'lodash';


class RestaurantPage extends Component{

  state = {
    reviewFormOpen: false
  }

  back = () =>{
    this.props.history.goBack()
  }



  render(){
    const {restaurant} = this.props
    console.log(restaurant)

    const unparsedDetails = ["entree_range", "breakfast_hours","lunch_hours", "dinner_hours", "parking", "wine_list"]
    const unwantedDetails = ["average_rating", "average_value", "average_quality", "average_service", "average_cleanliness", "reviews", "name", "id", "permalink", "short_name", "code", "operator_id", "operator_type", "sort_name", "park", "operator_url", "house_specialties"]

    const getRestaurantDetails = () =>{
      let details = []
      for (let detail in restaurant){
        if(restaurant[detail] && restaurant[detail] !== "Resort Dining"){

          if(unparsedDetails.includes(detail)){
            details.push({detail: startCase(detail), information: restaurant[detail]})
          }
          else if(!unwantedDetails.includes(detail)){
            details.push({detail: startCase(detail), information: startCase(restaurant[detail])})
          }
        }
      }
      return details.map(detail =>{
        return <p key={detail.detail}>{detail.detail}: {detail.information}</p>
      })
    }

    const handleClick = () =>{
      this.setState({reviewFormOpen: true})
    }

    const closeForm = () =>{
      this.setState({reviewFormOpen: false})
    }

if (this.props.restaurant !== "none"){
    const reviews = restaurant.reviews.map(review =>{
      return <Review key={review.id} review={review}/>
    })



      return (
        <Grid>

        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={1}>
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
  };

export default withRouter(RestaurantPage);
