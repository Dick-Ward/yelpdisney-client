import React, { Component } from "react";
import {Button, Grid} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import * as moment from 'moment'
import Review from "../reviews/Review"
import RatingContainer from "./RatingContainer"
import RestaurantDetails from './RestaurantDetails'

class RestaurantPage extends Component{



  back = () =>{
    this.props.history.goBack()
  }



  render(){
    const {restaurant} = this.props
    const park = restaurant.resort_name ? restaurant.resort_name : restaurant.park

    if (restaurant !== "none"){

        const sortedReviews = restaurant.reviews.sort(function(a, b){ return moment(b.created_at) - moment(a.created_at)})
        const reviews = sortedReviews.map(review =>{ return <Review key={review.id} review={review}/> })

      return (
        <div>
        <Grid>
          <Grid.Row style={{height: "522px"}}>
            <Grid.Column  width={2}>
            </Grid.Column>
            <Grid.Column width={4} >
              <span onClick={this.back} className="linkText" >Back</span>
              <div className="restaurantDetails">
                <RestaurantDetails restaurant={restaurant} />
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <RatingContainer
                id={restaurant.id}
                name={restaurant.name}
                park={park}
                rating={restaurant.average_rating}
                quality={restaurant.average_quality}
                cleanliness={restaurant.average_cleanliness}
                service={restaurant.average_service}
                value={restaurant.average_value}
              />
            </Grid.Column>
            <Grid.Column width={2} >
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column  width={2}>
          </Grid.Column>
            <Grid.Column width={12}>
            <div className="reviewContainer">
            {reviews.length > 0 ? <div >{reviews}</div>: "Be the first to review this restaurant!"}
            </div>
            </Grid.Column>
            <Grid.Column  width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
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

export default withRouter(RestaurantPage)
