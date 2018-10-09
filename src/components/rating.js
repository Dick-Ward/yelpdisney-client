import React from 'react'
import { Progress, Container, Grid } from 'semantic-ui-react'

const Rating = props =>{
  return (
    <Container>
      <Grid >
        <Grid.Row >
          <Grid.Column width={6} className="rating-text">
          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
            <svg>
              <defs>
                <clipPath id="svgPath">
                 <ellipse cx="47" cy="14" rx="13" ry="13"/>
                 <ellipse cx="47" cy="46" rx="13" ry="13"/>
                 <ellipse cx="20" cy="30" rx="20" ry="20"/>

                </clipPath>
              </defs>
            </svg>
            <Progress className="vertical mickeyClipped" color="purple" value={props.rating} total='5' size='big'/>
            {props.rating}
            <br/>
            Overall
          </Grid.Column>
          <Grid.Column width={6} className="rating-text">
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column width={4} className="rating-text">
            <Progress className="vertical" color="blue" value={props.quality} total='5' size='big'/>
            {props.quality}
            <br/>
            Quality
          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
            <Progress className="vertical" color="red" value={props.cleanliness} total='5' size='big'/>
            {props.cleanliness}
            <br/>
            Cleanliness
          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
            <Progress className="vertical" color="green" value={props.service} total='5' size='big'/>
            {props.service}
            <br/>
            Service
          </Grid.Column>
          <Grid.Column width={4} className="rating-text">
            <Progress className="vertical" color="yellow" value={props.value} total='5' size='big'/>
            {props.value}
            <br/>
                  Value
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      )
      }

export default Rating
