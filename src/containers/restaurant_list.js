import React, { Component } from "react";
import { connect } from "react-redux";
import Restaurant from "../components/restaurant";
import * as actions from "../actions";

class RestaurantList extends Component {
  state = {
    selectedPark: ""
  };

  render() {
    const restaurants = this.props.restaurantList.map(restaurant => {
      if (restaurant.park.includes(this.state.selectedPark)) {
        return <Restaurant key={restaurant.id} deSelectRestaurant={this.props.deSelectRestaurant} selectRestaurant={this.props.selectRestaurant}  restaurant={restaurant} selectedRestaurant={this.props.selectedRestaurant}/>;
      } else {
        return null;
      }
    });
    const handleChange = event => {
      this.setState({ selectedPark: event.target.value });
    };



    return (
      <div style={{ margin: "10px" }}>
        <form>
          <select defaultValue="" onChange={handleChange}>
            <option value="">All Parks</option>
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
    restaurantList: state.restaurantList,
    selectedRestaurant: state.selectedRestaurant
  };
}

export default connect(mapStateToProps, actions)(RestaurantList);