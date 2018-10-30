import React from 'react'
import {connect} from 'react-redux'
import Options from '../../services/data'
import {Form, Input, Dropdown, Button, Icon, Label} from 'semantic-ui-react'
import VideoCover from 'react-video-cover'
import LoginSignup from '../global/LoginSignup'
import * as actions from "../../actions"
import "../../style/splash.css"


class Splash extends React.Component {
  state = {
    query: '',
    park: '',
    loginSelected: false
  }

  handleFilterChange = (e, {value}) =>{
    this.setState({ park: value });
  }

  handleLogout = () =>{
    this.props.logout()
  }

  handleSearchChange = e =>{
    this.setState({ query: e.target.value})
  }

  handleSubmit = e =>{
    e.preventDefault()
    let query = this.state.query === '' ? "all" : this.state.query
    let park = this.state.park
    this.props.resetRestaurants()
    this.props.applyParkFilter(park)
    this.props.searchRestaurants(query)
    this.props.clearAllFilters()
    this.props.history.push('/restaurants')
  }

  logInToggle = () =>{
    this.setState({loginSelected: !this.state.loginSelected})
  }

  render(){
    console.log(this.state)
    const videoOptions = {
      src: '/DisneyWalkup.webm',
      autoPlay: true,
      loop: true
    }

    return(
        <div className="splash" style={{backgroundColor: "#666"}}>

          {/* <VideoCover
            videoOptions={videoOptions}
            style={{zIndex: "-1"}}
          /> */}


          <div className="splashTitle">Yelp Disney</div>

          <div className="splashLogin">
            {this.props.user ?
              <div>Welcome {this.props.user.username}! <span className="splashLoginText" onClick={this.handleLogout}>Logout?</span></div>
            :
            <LoginSignup logInToggle={this.logInToggle} loginSelected={this.state.loginSelected}/>}
          </div>

          <div className="splashSearch">
            <form  onSubmit={this.handleSubmit}>
              <Input  size="large" style={{width: "100%"}} type='text' placeholder='Prime Time Cafe,   Tiffins,   Indian,   pizza...'
                onChange={this.handleSearchChange}
                value={this.state.query}
                labelPosition="left"

              action>
                <Label basic>Find</Label>
                <input />

                <Dropdown style={{width: "40%"}} search selection placeholder={'All Parks'}

                  options={Options.parkOptions}
                  selection
                  onChange={this.handleFilterChange}/>

                <Input type="submit" icon="search large" value="" attached="left" style={{backgroundColor: "white"}} />
              </Input>
            </form>


          </div>
          </div>

    )
  }
}

function mapStateToProps(state){
  return(
    {
      user: state.auth.user
    }
  )
}


export default connect(mapStateToProps, actions)(Splash)
