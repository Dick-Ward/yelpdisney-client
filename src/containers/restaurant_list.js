import React, { Component } from "react";
import { connect } from "react-redux";
import RestaurantCard from "../components/restaurant_card";
import * as actions from "../actions";
import {Grid} from 'semantic-ui-react'
import Filters from "./filters"

class RestaurantList extends Component {

  render() {

    const restaurants = this.props.restaurantList.map(restaurant => {
      if (this.props.cuisineFilter !== ""){
        if (restaurant.park.includes(this.props.parkFilter) && restaurant.cuisine && restaurant.cuisine.includes(this.props.cuisineFilter)) {
          return <RestaurantCard key={restaurant.id} selectRestaurant={this.props.selectRestaurant}  restaurant={restaurant} selectedRestaurant={this.props.selectedRestaurant}/>;
        } else {
          return null;
        }
      } else {
        if (restaurant.park.includes(this.props.parkFilter)) {
          return <RestaurantCard key={restaurant.id} selectRestaurant={this.props.selectRestaurant}  restaurant={restaurant} selectedRestaurant={this.props.selectedRestaurant}/>;
        } else {
          return null;
        }
      }
    })



    return (
      <Grid >

        <Grid.Column width={4}>
          <Filters />
        </Grid.Column>
        <Grid.Column width={8}>
          <div className="restaurantListContainer">
            <br/>

            {this.props.restaurantList.length === 0 ? <div> Loading... </div> : <div>{restaurants}</div>}
          </div>
        </Grid.Column>
        <Grid.Column width={4}>

        </Grid.Column>
      </Grid>

    );
  }
}

function mapStateToProps(state) {
  return {
    restaurantList: state.restaurantList,
    selectedRestaurant: state.selectedRestaurant,
    parkFilter: state.parkFilter,
    cuisineFilter: state.cuisineFilter
  };
}

export default connect(mapStateToProps, actions)(RestaurantList);
