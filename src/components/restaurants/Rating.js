import React from 'react'
import {Grid} from 'semantic-ui-react'
import SmallRating from './SmallRating'

class Rating extends React.Component {
  render(){
    return(
      <Grid  >
        <Grid.Row>
          <Grid.Column width={6} className="rating-text">
          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
            <svg style={{width: 0, height: 0}}>
              <clipPath id="svgPathOverall">
                <ellipse cx="25" cy="30" rx="25" ry="25"/>
                <ellipse cx="95" cy="30" rx="25" ry="25"/>
                <ellipse cx="60" cy="80" rx="40" ry="40"/>
              </clipPath>
            </svg>

            <svg style={{width: 0, height: 0}}>
              <clipPath id={`ratingSVGOverall`}>
                <text class="largeSVGText" x="10" y="95">{this.props.rating.toFixed(1)}</text>
              </clipPath>
            </svg>

            <div>
              <div className="Overall">
                <span className="ratingFill" style={{height: `${(this.props.rating/5*100)}%`, backgroundColor:"blue"}} />
              </div>
              <div>
                <div className={`OverallNumber`}>
                  <span className="numberFill" style={{height: `${100 - (this.props.rating/5*100)}%`, backgroundColor: "blue"}} />
                </div>
              </div>
              <div> Overall </div>
            </div>
          </Grid.Column>
          <Grid.Column width={6} className="rating-text">
          </Grid.Column>
          </Grid.Row>
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
          <Grid.Row >
          <Grid.Column width={12} />
          <Grid.Column width={4}>
          <button onClick={this.props.newReview}>New Review</button>
          </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

export default Rating
