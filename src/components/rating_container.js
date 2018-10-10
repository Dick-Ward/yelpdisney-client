import React from 'react'
import {Grid } from 'semantic-ui-react'
import SmallRating from './small_rating'

const RatingContainer = props =>{
  return (
        <div className="ratingContainer">
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
                  <span style={{width: `${(props.rating/5*100)}%`, backgroundColor:"blue"}} />
                  </div>
                  <div> Overall </div>
                  <div>{props.rating}</div>
                </div>
              </Grid.Column>
              <Grid.Column width={6} className="rating-text">
              </Grid.Column>

              <Grid.Row >

                <Grid.Column width={4} className="rating-text">
                  <SmallRating rating={props.quality} ratingOf={"Quality"} color={"red"} />
                </Grid.Column>
                <Grid.Column width={4} className="rating-text">
                  <SmallRating rating={props.cleanliness} ratingOf={"Cleanliness"} color={"purple"}/>
                </Grid.Column>
                <Grid.Column width={4} className="rating-text">
                  <SmallRating rating={props.service} ratingOf={"Service"} color={"green"}/>
                </Grid.Column>
                <Grid.Column width={4} className="rating-text">
                  <SmallRating rating={props.value} ratingOf={"Value"} color={"orange"}/>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </div>

        )
      }

export default RatingContainer
