import React from 'react'
import {Grid } from 'semantic-ui-react'
import SmallRating from './small_rating'

const RatingContainer = props =>{
  return (
      <Grid >
          <Grid.Column width={6} className="rating-text">

          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
            <svg style={{width: 0, height: 0}}>
              <clipPath id="svgPathOverall">
                 <ellipse cx="47" cy="14" rx="13" ry="13"/>
                 <ellipse cx="47" cy="46" rx="13" ry="13"/>
                 <ellipse cx="20" cy="30" rx="20" ry="20"/>
              </clipPath>
            </svg>
            <div>
              <div className="vertical Overall">
              <span style={{width: `${(props.rating/5*100) + ((5 - props.rating) * 3)}%`, backgroundColor:"blue"}} />
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
      )
      }

export default RatingContainer
