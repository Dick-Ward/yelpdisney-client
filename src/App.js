import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import RestaurantList from "./containers/restaurant_list";
import Navbar from "./components/navbar"
import RestaurantPage from "./containers/restaurant_page";
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <div>
          <div className="bottom-bordered">
            <Navbar />

          </div>
          <Switch>
            <Route path="/restaurants/:id" render={ (renderProps) => {

              return <RestaurantPage
                deSelectRestaurant={this.props.deSelectRestaurant}
                restaurant={this.props.selectedRestaurant}
                renderProps={renderProps}
                selectRestaurant={this.props.selectRestaurant}
                     />
            }}/>
            <Route path="/" component={RestaurantList}/>
          </Switch>


            </div>
            </React.Fragment>
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
