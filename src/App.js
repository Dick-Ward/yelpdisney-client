import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import RestaurantList from "./containers/restaurant_list";
import Navbar from "./components/navbar"
import RestaurantPage from "./containers/restaurant_page";
import {withRouter, Route, Switch} from 'react-router-dom'

class App extends Component {

  state = {
    selectedPark: "",
    restaurantList: ""
  }
  render() {
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
        );
  }

}

function mapStateToProps(state) {
  return {
    restaurantList: state.restaurantList,
    selectedRestaurant: state.selectedRestaurant
  };
}

export default withRouter(connect(mapStateToProps, actions)(App));
