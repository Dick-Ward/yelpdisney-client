import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Navbar from "./navbar/Navbar"
import RestaurantList from "./listview/RestaurantList";
import RestaurantPage from "./restaurants/RestaurantPage";
import {withRouter, Route, Switch} from 'react-router-dom'
import Footer from "./global/Footer"

class ViewContainer extends Component {

  state = {
    selectedPark: "",
    restaurantList: ""
  }
  render() {
    return (
        <div className="ViewContainer">
          <Navbar />
          <Switch>
            <Route path="/restaurants/:permalink" render={ (renderProps) => {
              return (
                <RestaurantPage
                  restaurant={this.props.selectedRestaurant}
                  selectRestaurant={this.props.selectRestaurant}
                  renderProps={renderProps}
                />)
            }}/>
            <Route path="/restaurants" component={RestaurantList}/>
          </Switch>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurantList: state.restaurants.restaurantList,
    selectedRestaurant: state.restaurants.selectedRestaurant,
  };
}

export default withRouter(connect(mapStateToProps, actions)(ViewContainer));
