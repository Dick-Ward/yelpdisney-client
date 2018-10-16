import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import Navbar from "./components/navbar/navbar"
import RestaurantList from "./components/listview/restaurant_list";
import RestaurantPage from "./components/restaurants/restaurant_page";
import {withRouter, Route, Switch} from 'react-router-dom'

class App extends Component {

  state = {
    selectedPark: "",
    restaurantList: ""
  }
  render() {
    console.log(this.props.state)
    return (
      <React.Fragment>
        <div>
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
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurantList: state.restaurants.restaurantList,
    selectedRestaurant: state.restaurants.selectedRestaurant,
  };
}

export default withRouter(connect(mapStateToProps, actions)(App));
