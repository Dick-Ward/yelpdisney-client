import React from 'react'
import {Grid } from 'semantic-ui-react'
import SmallRating from './small_rating'

const RatingContainer = props =>{
  console.log(props)
  return (

      <Grid >
          <Grid.Column width={6} className="rating-text">

          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
            <svg style={{width: 0, height: 0}}>
              <clipPath id="svgPathOverall">
                 <ellipse cx="62" cy="14" rx="13" ry="13"/>
                 <ellipse cx="62" cy="46" rx="13" ry="13"/>
                 <ellipse cx="35" cy="30" rx="20" ry="20"/>
                 <text x="20" y="0" style={{transform: "rotate(90deg)"}}>{props.rating}</text>
              </clipPath>
            </svg>
            <div>
              <div className="vertical Overall">
              <span style={{width: `${(props.rating/5*100) + ((5 - props.rating) * 3)}%`, backgroundColor:"blue"}} />
              </div>
              <div>
                <br/>
                Overall
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={6} className="rating-text">
          </Grid.Column>

        <Grid.Row >
          <Grid.Column width={4} className="rating-text">
          <SmallRating rating={props.quality} ratingOf={"Quality"} />
          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
          <div className="vertical">
          <span style={{width: `${(props.cleanliness/5*100) + ((5 - props.cleanliness) * 3)}%`, backgroundColor: "orange"}} />
          </div>

            <br/>
            Cleanliness
          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
          <div className="vertical">
          <span style={{width: `${(props.service/5*100) + ((5 - props.service) * 3)}%`, backgroundColor:"purple"}} />
          </div>

            <br/>
            Service
          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
          <div className="vertical">
          <span style={{width: `${(props.value/5*100) + ((5 - props.value) * 3)}%`, backgroundColor:"green"}} />
          </div>
            <br/>
            Value
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
      }

export default RatingContainer
