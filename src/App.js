import React, { Component } from "react";
import RestaurantDetails from "./components/restaurant_details";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  render() {
    const restaurants = this.props.restaurantList.map(restaurant => {
      return <RestaurantDetails key={restaurant.id} restaurant={restaurant} />;
    });
    return (
      <div>
        {restaurants}
        <RestaurantDetails restaurant={this.props.restaurantList[0]} />
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
