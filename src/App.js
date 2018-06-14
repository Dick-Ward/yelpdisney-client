import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import RestaurantList from "./containers/restaurant_list";
import RestaurantDetails from "./components/restaurant_details"

class App extends Component {
  render() {

    return (
      <div>
      { this.props.selectedRestaurant !== "none" ? <RestaurantDetails deSelectRestaurant={this.props.deSelectRestaurant} restaurant={this.props.selectedRestaurant} /> : null}
        <RestaurantList />
      </div>
    );
  }
  componentDidMount() {
    this.props.getRestaurants();
  }
}

function mapStateToProps(state) {
  return {
    restaurantList: state.restaurantList,
    selectedRestaurant: state.selectedRestaurant
  };
}

export default connect(mapStateToProps, actions)(App);
