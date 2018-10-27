import React from 'react'
import {connect} from 'react-redux'
import Options from '../../services/data'
import {Form, Input, Dropdown, Button, Icon} from 'semantic-ui-react'
import VideoCover from 'react-video-cover'
import SplashLogin from './SplashLoginButtons'
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
    const videoOptions = {
      src: '/DisneyWalkup.webm',
      autoPlay: true,
      loop: true
    }

    return(
      <div className="splash">
        <VideoCover
          videoOptions={videoOptions}
          style={{zIndex: "-1"}}
        />
        <div className="splashLogin">
          {this.props.user ?
            <div className="splashGreeting">Welcome {this.props.user.username}! <Button size="small" onClick={this.handleLogout}>Logout?</Button></div>
          :
          <SplashLogin logInToggle={this.logInToggle} loginSelected={this.state.loginSelected}/>}
        </div>
        <div className="splashTitle">Yelp Disney</div>
        <div className="splashBorder">
          <div className="splashSearch">
            <div className="splashInput">
              <Form className="splashSearchForm" onSubmit={this.handleSubmit}>
                <Form.Group >
                 <Form.Field>
                    <Input
                      type="text"
                      onChange={this.handleSearchChange}
                      value={this.state.query}
                      placeholder="New Search"
                    />
                    </Form.Field>

                  <div className="splashIn">in</div>
                  <Form.Field>

                  <Dropdown
                    className="splashDrop"
                    placeholder={'All Parks'}
                    options={Options.parkOptions}
                    selection
                    onChange={this.handleFilterChange}
                  />
                  </Form.Field>
                  <Form.Field>

                  <Button className="splashSubmit"><Icon name="search"/></Button>
                  </Form.Field>

                </Form.Group>
              </Form>
            </div>
          </div>
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
