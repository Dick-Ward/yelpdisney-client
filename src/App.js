import React, { Component } from 'react';
import RestaurantDetails from "./components/restaurant_details"


class App extends Component {

  state = {
    restaurantList: []
  }

  render() {

    const restaurants = this.state.restaurantList.map(restaurant =>{
      return <RestaurantDetails key={restaurant.id} restaurant={restaurant} />
    })
    return (
      <div>
        <RestaurantDetails restaurant={this.state.restaurantList[0]} />
      </div>
    );
  }
  componentDidMount(){
    fetch("http://localhost:3000/restaurants")
    .then(res => res.json())
    .then(restaurantList => this.setState({restaurantList}))
  }
}

export default App;
