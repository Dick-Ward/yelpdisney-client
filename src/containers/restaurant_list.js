import React, { Component } from "react";
import { connect } from "react-redux";
import Restaurant from "../components/restaurant";
import Options from '../services/data'
import * as actions from "../actions";
import {Dropdown} from 'semantic-ui-react'

class RestaurantList extends Component {

  handleChange = (event, value) => {
    if(value.name === "parkFilter"){
    this.props.applyParkFilter(value.value)
  } else if (value.name === "cuisineFilter") {
    this.props.applyCuisineFilter(value.value)
  }
  };

  render() {
    console.log(this.props.restaurantList)
    const restaurants = this.props.restaurantList.map(restaurant => {
      if (this.props.cuisineFilter !== ""){
        if (restaurant.park.includes(this.props.parkFilter) && restaurant.cuisine && restaurant.cuisine.includes(this.props.cuisineFilter)) {
          return <Restaurant key={restaurant.id} selectRestaurant={this.props.selectRestaurant}  restaurant={restaurant} selectedRestaurant={this.props.selectedRestaurant}/>;
        } else {
          return null;
        }
      } else {
        if (restaurant.park.includes(this.props.parkFilter)) {
          return <Restaurant key={restaurant.id} selectRestaurant={this.props.selectRestaurant}  restaurant={restaurant} selectedRestaurant={this.props.selectedRestaurant}/>;
        } else {
          return null;
        }
      }
    })



    return (
      <div style={{ margin: "10px" }}>
        <br/>
        <Dropdown
          placeholder={'Filter Results by Park'}
          options={Options.parkOptions}
          selection
          onChange={this.handleChange}
          value={this.props.parkFilter}
          name="parkFilter"
          className="filter"
        />
        <Dropdown
          placeholder={'Filter Results by Cuisine'}
          options={Options.cuisineOptions}
          selection
          onChange={this.handleChange}
          value={this.props.cuisineFilter}
          name="cuisineFilter"
          className="filter"
        />

        {this.props.restaurantList.length === 0 ? <div> Loading... </div> : <div>{restaurants}</div>}
      </div>
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
