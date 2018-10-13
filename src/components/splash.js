import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import Options from '../services/data'
import {Form, Input, Dropdown, Button} from 'semantic-ui-react'
import "../style/splash.css"
import VideoCover from 'react-video-cover'


class Splash extends React.Component {
  state = {
    query: '',
    park: ''
  }

  handleFilterChange = (e, {value}) =>{
    this.setState({ park: value });
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
    this.props.history.push('/restaurants')
  }
  render(){

console.log(this.props.state)
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
          <Button.Group >
            <Button color="teal">Log In </Button>
            <Button.Or />
            <Button color="teal">Sign Up </Button>
          </Button.Group>
        </div>
        <div className="splashTitle">Yelp Disney</div>
        <div className="splashBorder">
          <div className="splashSearch">
            <div className="splashInput">
              <Form className="splashSearchForm" onSubmit={this.handleSubmit}>
                <Form.Group >
                  <label >{`Search `}
                    <Input
                      type="text"
                      onChange={this.handleSearchChange}
                      value={this.state.query}
                      placeholder="New Search"
                    />
                  </label>
                  <div className="splashIn">in</div>
                  <Dropdown
                    className="splashDrop"
                    placeholder={'All Parks'}
                    options={Options.parkOptions}
                    selection
                    onChange={this.handleFilterChange}
                  />
                  <Button className="splashSubmit">Submit</Button>
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
    {state: state}
  )
}

export default connect(mapStateToProps, actions)(Splash)
