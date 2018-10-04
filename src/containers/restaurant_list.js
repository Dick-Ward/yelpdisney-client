import React, { Component } from "react";
import { connect } from "react-redux";
import RestaurantCard from "../components/restaurant_card";
import * as actions from "../actions";
import {Grid} from 'semantic-ui-react'
import Filters from "./filters"
import Options from "../services/data"

class RestaurantList extends Component {

  conditionalRestaurants = () =>{
    if (this.props.restaurantList.length === 0 && this.props.fetchComplete === false){
      return <div> Loading... </div>
    } else if (this.props.restaurantList.length === 0 && this.props.fetchComplete === true) {
        return <div> No restaurants found </div>
    } else if (this.props.fetchComplete === null) {
        return <div>Search for a restaurant</div>
    } else if (this.restaurants().filter(restaurant => restaurant).length === 0){
        return <div>No results found</div>}
      else {
        return <div>{this.restaurants()}</div>
      }
  }

  restaurants = () => this.props.restaurantList.map(restaurant => {
    if (this.props.cuisineFilter !== ""){
      if (restaurant.park.includes(this.props.parkFilter) && restaurant.cuisine && restaurant.cuisine.includes(this.props.cuisineFilter) && Options.parseCategoryCode(restaurant.category_code).includes(this.props.categoryFilter)) {
        return <RestaurantCard key={restaurant.id} selectRestaurant={this.props.selectRestaurant}  restaurant={restaurant} selectedRestaurant={this.props.selectedRestaurant}/>;
      } else {
        return null;
      }
    } else {
      if (restaurant.park.includes(this.props.parkFilter)  && Options.parseCategoryCode(restaurant.category_code).includes(this.props.categoryFilter)) {
        return <RestaurantCard key={restaurant.id} selectRestaurant={this.props.selectRestaurant}  restaurant={restaurant} selectedRestaurant={this.props.selectedRestaurant}/>;
      } else {
        return null;
      }
    }
  })

  render() {

    return (
      <Grid >
        <Grid.Column width={4}>
          <Filters />
        </Grid.Column>
        <Grid.Column width={8}>
          <div className="restaurantListContainer">
            <br/>
            {this.conditionalRestaurants()}
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
    cuisineFilter: state.cuisineFilter,
    categoryFilter: state.categoryFilter,
    fetchComplete: state.fetchComplete
  };
}

export default connect(mapStateToProps, actions)(RestaurantList);
