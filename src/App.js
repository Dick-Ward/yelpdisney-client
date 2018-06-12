import React, { Component } from 'react';
import Restaurant from "./components/restaurant"

class App extends Component {

  state = {
    restaurantList: []
  }

  render() {
    console.log(this.state.restaurantList)
    const restaurants = this.state.restaurantList.map(restaurant =>{
      return <Restaurant key={restaurant.id} restaurant={restaurant} />
    })
    return (
      <div>
        {restaurants}
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
