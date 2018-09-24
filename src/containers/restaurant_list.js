import React, { Component } from "react";
import { connect } from "react-redux";
import Restaurant from "../components/restaurant";
import cuisineOptions from '../services/data'
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
    const restaurants = this.props.restaurantList.map(restaurant => {
      if (this.props.cuisineFilter != ""){
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
    console.log(restaurants)

    const options = [
      {key: 'All Parks', text: 'All Parks', value: ''},
      {key: 'Magic Kingdom', text: 'Magic Kingdom', value: 'Magic Kingdom'},
      {key: 'Epcot', text: 'Epcot', value: 'Epcot'},
      {key: 'Hollywood Studios', text: 'Hollywood Studios', value: 'Hollywood Studios'},
      {key: 'Animal Kingdom', text: 'Animal Kingdom', value: 'Animal Kingdom'},
      {key: 'Blizzard Beach', text: 'Blizzard Beach', value: 'Blizzard Beach'},
      {key: 'Typhoon Lagoon', text: 'Typhoon Lagoon', value: 'Typhoon Lagoon'},
      {key: 'Resort Dining', text: 'Resort Dining', value: 'Resort Dining'}
    ]

    return (
      <div style={{ margin: "10px" }}>

        <Dropdown
          placeholder={'Filter Results by Park'}
          options={options}
          selection
          onChange={this.handleChange}
          value={this.props.parkFilter}
          name="parkFilter"
          className="filter"
        />
        <Dropdown
          placeholder={'Filter Results by Cuisine'}
          options={cuisineOptions}
          selection
          onChange={this.handleChange}
          value={this.props.cuisineFilter}
          name="cuisineFilter"
          className="filter"
        />

        {restaurants}
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
