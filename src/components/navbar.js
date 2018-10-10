import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from "../actions"
import Options from "../services/data"
import {Form, Input, Button, Dropdown} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

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
    this.props.resetRestaurants()
    this.props.applyParkFilter(park)
    this.props.searchRestaurants(query)
    this.props.history.push('/restaurants')
  }

render(){

  return(
    <div className="navbar">

      <div className="logo">Yelp Disney</div>
      <Form className="navSearch" onSubmit={this.handleSubmit}>
        <Form.Group >
          <label>{`Search `}
            <Input
              type="text"
              onChange={this.handleSearchChange}
              value={this.state.query}
              placeholder="New Search"
            />
          </label>
          <div className="in">in</div>
          <Dropdown
            placeholder={'All Parks'}
            options={Options.parkOptions}
            selection
            onChange={this.handleFilterChange}
          />
          <Button>Submit</Button>
        </Form.Group>
      </Form>
      <Link className="homeLink" to="/">Home</Link>

    </div>
  )
 }
}

function mapStateToProps(state){
  return {fetchComplete: state.fetchComplete}
}


export default withRouter(connect(mapStateToProps, actions)(Navbar))
