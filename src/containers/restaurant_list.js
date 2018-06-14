import React, { Component } from "react";
import { connect } from "react-redux";
import Restaurant from "../components/restaurant";
import * as actions from "../actions";

class RestaurantList extends Component {
  state = {
    selectedPark: "Resort"
  };

  render() {
    const filteredRestaurants = this.props.restaurantList.filter(restaurant => {
      return this.state.selectedPark.includes(restaurant.park);
    });
    const restaurants = filteredRestaurants.map(restaurant => {
      return <Restaurant key={restaurant.id} restaurant={restaurant} />;
    });
    return (
      <div>
        <form>
          <select>
            <option value="Epcot">Epcot</option>
            <option value="Magic Kingdom">Magic Kingdom</option>
            <option value="Hollywood Studios">Hollywood Studios</option>
            <option value="Animal Kingdom">Animal Kingdom</option>
            <option value="Blizzard Beach">Blizzard Beach</option>
            <option value="Typhoon Lagoon">Typhoon Lagoon</option>
            <option value="Resort Dining">Resort Dining</option>
          </select>
        </form>
        {restaurants}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurantList: state.restaurantList
  };
}

export default connect(mapStateToProps, actions)(RestaurantList);
