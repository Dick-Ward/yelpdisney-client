import React, { Component } from "react";
import Restaurant from "./components/restaurant";
import { connect } from "react-redux";
import * as actions from "./actions";
import RestaurantList from "./containers/restaurant_list";

class App extends Component {
  render() {
    return (
      <div>
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
    restaurantList: state.restaurantList
  };
}

export default connect(mapStateToProps, actions)(App);
