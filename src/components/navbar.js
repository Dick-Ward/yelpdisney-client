import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from "../actions"
import {Form, Input, Button, Grid} from 'semantic-ui-react'
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

  handleLogout = () =>{
    this.props.logout()
  }

render(){

  return(
    <div className="navbar">
      <Grid>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={4}>
          <Link className="homeLink" to="/"><div className="logo">Yelp Disney</div></Link>
        </Grid.Column>
        <Grid.Column width={4}>
          <Form className="navSearch" onSubmit={this.handleSubmit}>
            <Form.Group >

              <Input
                type="text"
                onChange={this.handleSearchChange}
                value={this.state.query}
                placeholder="New Search"
              />

              <Button>Go</Button>
            </Form.Group>
          </Form>
        </Grid.Column>
        <Grid.Column width={4}>
          {this.props.user ?
            <div>Welcome {this.props.user.username} <a onClick={this.handleLogout}>Logout?</a></div>
          :
          <Button.Group className="navbarLogin">
            <Button basic>Log In </Button>
            <Button basic>Sign Up </Button>
          </Button.Group>
          }
      </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    </div>
  )
 }
}

function mapStateToProps(state){
  return {
    fetchComplete: state.fetchComplete,
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps, actions)(Navbar))
