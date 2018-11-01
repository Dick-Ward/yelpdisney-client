import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Form, Input, Button, Grid, Icon} from 'semantic-ui-react'
import * as actions from "../../actions"
import LoginSignup from '../global/LoginSignup'

class Navbar extends React.Component{

  state = {
    query: '',
    park: '',
    loginSelected: false
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
    this.props.clearAllFilters()
    if(this.props.history.location.pathname !== "/restaurants"){
      this.props.history.push("/restaurants")
    }

  }

  handleLogout = () =>{
    this.props.logout()
    this.setState({loginSelected: false})
  }

  logInToggle = () =>{
    this.setState({loginSelected: !this.state.loginSelected})
  }

render(){
  return(
    <div className="navbar">
      <Grid>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={3}>
          <Link className="homeLink" to="/"><div className="logo">Yelp Disney</div></Link>
        </Grid.Column>
        <Grid.Column width={5}>
          <Form className="navSearch" onSubmit={this.handleSubmit}>
            <Form.Group >
              <Form.Field>
                <Input
                  style={{width: "300px"}}
                  type="text"
                  onChange={this.handleSearchChange}
                  value={this.state.query}
                  placeholder="Leave Blank to Search All Restaurants"
                />
              </Form.Field>

              <Button><Icon name="search"/></Button>
            </Form.Group>
          </Form>
        </Grid.Column>
        <Grid.Column  width={3}>
        <div className="navbarLogin">
          {this.props.user ?
            <div>Welcome {this.props.user.username}! <span className="navbarLoginText" onClick={this.handleLogout}>Logout?</span></div>
          :
          <LoginSignup logInToggle={this.logInToggle} loginSelected={this.state.loginSelected}/>}
        </div>
      </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid>
    </div>
  )
 }
}

function mapStateToProps(state){
  return {
    fetchComplete: state.restaurants.fetchComplete,
    user: state.auth.user
  }
}


export default withRouter(connect(mapStateToProps, actions)(Navbar))
