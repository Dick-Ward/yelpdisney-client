import React from "react";
import {Link} from 'react-router-dom'
import Options from "../../services/data"
import {Grid} from 'semantic-ui-react'


const RestaurantCard = ({ restaurant, selectRestaurant, selectedRestaurant }) => {
  return (
    <div className="restaurant-card">
    <Link key={restaurant.id} to={`/restaurants/${restaurant.permalink}`}>
    <Grid>
    <Grid.Column width={13}>
      <div >
        <div className="cardTitle">{restaurant.name} </div>
        <br/>
        <div className="cardInfo">
          {restaurant.cuisine !== "" ? <div >{restaurant.cuisine}</div> : <div>Cuisine Not Listed</div> }
          <div>{Options.parseCategoryCode(restaurant.category_code)}</div>
          </div>
          <br/>
        <div className="cardParkName">{restaurant.resort_name ? (<div> {restaurant.resort_name}</div>) : (<div > {restaurant.park}</div>)}</div>
        </div>
        </Grid.Column>
        <Grid.Column  width={3}>
        {restaurant.average_rating !== 0 ?<div className="cardRating">{restaurant.average_rating}</div> : <div>Not Yet Rated</div>}
      </Grid.Column>
    </Grid>
    </Link>
    </div>
      )
    }

export default RestaurantCard;
