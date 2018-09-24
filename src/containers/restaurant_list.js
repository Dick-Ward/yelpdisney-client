import React, { Component } from "react";
import { connect } from "react-redux";
import Restaurant from "../components/restaurant";
import * as actions from "../actions";
import {Dropdown} from 'semantic-ui-react'

class RestaurantList extends Component {

  handleChange = (event, {value}) => {
    this.props.applyParkFilter(value)
  };

  render() {
    console.log(this.props)
    const restaurants = this.props.restaurantList.map(restaurant => {
      if (restaurant.park.includes(this.props.parkFilter)) {
        return <Restaurant key={restaurant.id} selectRestaurant={this.props.selectRestaurant}  restaurant={restaurant} selectedRestaurant={this.props.selectedRestaurant}/>;
      } else {
        return null;
      }
    })


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
          className="parkFilter"
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
    parkFilter: state.parkFilter
  };
}

export default connect(mapStateToProps, actions)(RestaurantList);
