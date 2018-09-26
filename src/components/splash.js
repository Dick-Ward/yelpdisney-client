import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import Options from '../services/data'
import {Form, Input, Dropdown, Button, Container} from 'semantic-ui-react'
import "../style/splash.css"

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
    this.props.applyParkFilter(park)
    this.props.searchRestaurants(query)
    this.props.history.push('/restaurants')
  }
  render(){

    return(
      <div className="splash">
        <div className="splashTitle">Yelp Disney</div>
        <div className="splashBorder">
          <div className="splashSearch">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group >
                <label>{`Search `}
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
    )
  }
}

export default connect(null, actions)(Splash)
