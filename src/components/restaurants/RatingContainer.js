import React from 'react'
import {connect} from 'react-redux'
import Rating from './Rating'
import ReviewForm from "../reviews/ReviewForm"


class RatingContainer extends React.Component{
  state = {
    reviewFormOpen: false
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

  return (
        <div className="ratingContainer">

          <div className="restaurantTitle">{this.props.name} </div>
          <div className="restaurantParkName"> {this.props.park} </div>
          {this.state.reviewFormOpen ?
            <ReviewForm
            closeForm={this.closeForm}
            restaurant_id={this.props.id}
            name={this.props.name}
            />
            :
          <Rating
            rating={this.props.rating}
            quality={this.props.quality}
            cleanliness={this.props.cleanliness}
            service={this.props.service}
            value={this.props.value}
            newReview={this.newReview}
            />
          }

          </div>
        )}
      }

      function mapStateToProps(state){
        return(
          {
            user: state.auth.user
          }
        )
      }

export default connect(mapStateToProps)(RatingContainer)
