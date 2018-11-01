import React, { Component } from "react";
import { connect } from "react-redux";
import {Grid} from 'semantic-ui-react'
import * as actions from "../../actions"
import RestaurantCard from "./RestaurantCard";
import Filters from "../global/Filters"
import Options from "../../services/data"

class RestaurantList extends Component {

  conditionalRestaurants = () =>{
    if (this.props.restaurantList.length === 0 && this.props.fetchComplete === false){
      return <div style={{textAlign: "center"}}> Loading... </div>
    } else if (this.props.restaurantList.length === 0 && this.props.fetchComplete === true) {
        return <div style={{textAlign: "center"}}> No restaurants found </div>
    } else if (this.props.fetchComplete === null) {
        return <div style={{textAlign: "center"}}>Search for a restaurant</div>
    } else if (this.restaurants().filter(restaurant => restaurant).length === 0){
        return <div style={{textAlign: "center"}}>No results found</div>}
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
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={3}>
          <Filters />
        </Grid.Column>
        <Grid.Column width={9}>
          <div className="restaurantListContainer">
            {this.conditionalRestaurants()}
          </div>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurantList: state.restaurants.restaurantList,
    selectedRestaurant: state.restaurants.selectedRestaurant,
    parkFilter: state.restaurants.parkFilter,
    cuisineFilter: state.restaurants.cuisineFilter,
    categoryFilter: state.restaurants.categoryFilter,
    fetchComplete: state.restaurants.fetchComplete
  };
}

export default connect(mapStateToProps, actions)(RestaurantList);
