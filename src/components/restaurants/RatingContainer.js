import React from 'react'
import {connect} from 'react-redux'
import {Grid } from 'semantic-ui-react'
import SmallRating from './SmallRating'
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
          {this.state.reviewFormOpen === true ? <ReviewForm closeForm={this.closeForm} restaurant_id={this.props.id}/>:
          <Grid >
              <Grid.Column width={6} className="rating-text">
              </Grid.Column>
              <Grid.Column width={4} className="rating-text">
                <svg style={{width: 0, height: 0}}>
                  <clipPath id="svgPathOverall">
                     <ellipse cx="93" cy="26" rx="25" ry="25"/>
                     <ellipse cx="93" cy="94" rx="25" ry="25"/>
                     <ellipse cx="40" cy="60" rx="40" ry="40"/>
                  </clipPath>
                </svg>
                <div>
                  <div className="vertical Overall">
                  <span className="ratingFill" style={{width: `${(this.props.rating/5*100)}%`, backgroundColor:"blue"}} />
                  </div>
                  <div> Overall </div>
                  <div>{this.props.rating}</div>
                </div>
              </Grid.Column>
              <Grid.Column width={6} className="rating-text">
              </Grid.Column>
              <Grid.Row >
                <Grid.Column width={4} className="rating-text">
                  <SmallRating rating={this.props.quality} ratingOf={"Quality"} color={"red"} />
                </Grid.Column>
                <Grid.Column width={4} className="rating-text">
                  <SmallRating rating={this.props.cleanliness} ratingOf={"Cleanliness"} color={"purple"}/>
                </Grid.Column>
                <Grid.Column width={4} className="rating-text">
                  <SmallRating rating={this.props.service} ratingOf={"Service"} color={"green"}/>
                </Grid.Column>
                <Grid.Column width={4} className="rating-text">
                  <SmallRating rating={this.props.value} ratingOf={"Value"} color={"orange"}/>
                </Grid.Column>
              </Grid.Row>
              <button onClick={this.newReview}>New Review</button>
            </Grid>
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
