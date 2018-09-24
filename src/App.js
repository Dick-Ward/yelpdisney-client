import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import RestaurantList from "./containers/restaurant_list";
import Navbar from "./components/navbar"
import RestaurantPage from "./containers/restaurant_page";
import {withRouter, Route, Switch} from 'react-router-dom'
import Splash from './components/splash'

class App extends Component {

  state = {
    selectedPark: "",
    restaurantList: ""
  }


  render() {


    return (
      <React.Fragment>
        <div>
          <div className="bottom-bordered">
            <Navbar />

          </div>
          <Switch>
            <Route path="/restaurants/:permalink" render={ (renderProps) => {

              return <RestaurantPage
                restaurant={this.props.selectedRestaurant}
                selectRestaurant={this.props.selectRestaurant}
                renderProps={renderProps}
                     />
            }}/>
            <Route path="/restaurants" component={RestaurantList}/>
            <Route path="/" component={Splash}/>
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

export default withRouter(connect(mapStateToProps, actions)(App));
