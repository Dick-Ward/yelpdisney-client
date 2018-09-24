import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from "../actions"
import {Form, Input, Button, Dropdown} from 'semantic-ui-react'

class Navbar extends React.Component{

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
  }

render(){
  const options = [
    {key: 'All Parks', text: 'All Parks', value: ''},
    {key: 'Magic Kingdom', text: 'Magic Kingdom', value: 'Magic Kingdom'},
    {key: 'Epcot', text: 'Epcot', value: 'Epcot'},
    {key: 'Hollywood Studios', text: 'Hollywood Studios', value: 'Hollywood Studios'},
    {key: 'Animal Kingdom', text: 'Animal Kingdom', value: 'Animal Kingdom'},
    {key: 'Blizzard Beach', text: 'Blizzard Beach', value: 'Blizzard Beach'},
    {key: 'Typhoon Lagoon', text: 'Typhoon Lagoon', value: 'Typhoon Lagoon'},
    {key: 'Resort Dining', text: 'Resort Dining', value: 'Resort Dining'}
  ]

  return(
    <React.Fragment>
      <div className="navbar">Yelp Disney</div>
      <Link className="homeLink" to="/">Home</Link>
      <Form className="navSearch" onSubmit={this.handleSubmit}>
        <Form.Group >
          <label>{`Search `}
            <Input
              type="text"
              onChange={this.handleSearchChange}
              value={this.state.query}
              placeholder="Leave blank to see all"
            />
          </label>
          <div className="in">in</div>
          <Dropdown
            placeholder={'All Parks'}
            options={options}
            selection
            onChange={this.handleFilterChange}
          />
        <Button>Submit</Button>
        </Form.Group>
      </Form>
    </React.Fragment>
  )
 }
}

function mapStateToProps(state) {
  return {
    restaurantList: state.restaurantList
  }
}

export default connect(mapStateToProps, actions)(Navbar)
