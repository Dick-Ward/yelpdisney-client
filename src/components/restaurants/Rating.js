import React from 'react'
import {Grid} from 'semantic-ui-react'
import SmallRating from './SmallRating'

class Rating extends React.Component {


    state = {
      rating: 0
    }


  render(){
    return(
      <Grid  >
        <Grid.Row>
          <Grid.Column width={6}>
          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
            <div className="ratingBox">
              <svg id="ratingsvg" style={{width: 0, height: 0}}>
                <clipPath id="svgPathOverall">
                  <ellipse cx="140" cy="50" rx="37" ry="37"/>
                  <ellipse cx="40" cy="50" rx="37" ry="37"/>
                  <ellipse cx="90" cy="120" rx="59.5" ry="59.5"/>
                </clipPath>
              </svg>
              <svg style={{width: 0, height: 0}}>
                <clipPath id={`ratingSVGOverall`}>
                  <text className="largeSVGText" x="40" y="150">{this.props.rating.toFixed(1)}</text>
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
                <div> Overall Rating </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={6} className="rating-text">
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{paddingLeft: "50px", paddingRight: "50px"}}>
          <Grid.Column style={{padding: 0}} width={4} className="rating-text">
            <SmallRating rating={this.props.quality} ratingOf={"Quality"} color={"red"} />
          </Grid.Column>
          <Grid.Column style={{padding: 0}} width={4} className="rating-text">
            <SmallRating rating={this.props.cleanliness} ratingOf={"Cleanliness"} color={"purple"}/>
          </Grid.Column>
          <Grid.Column style={{padding: 0}} width={4} className="rating-text">
            <SmallRating rating={this.props.service} ratingOf={"Service"} color={"green"}/>
          </Grid.Column>
          <Grid.Column style={{padding: 0}} width={4} className="rating-text">
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
