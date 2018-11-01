import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Form, Input, Grid} from 'semantic-ui-react'
import * as actions from "../../actions"
import LoginSignup from '../global/LoginSignup'

class Navbar extends React.Component{

  state = {
    query: '',
    park: '',
    loginSelected: false
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
        <div className="navElementWrapper">
          <Form className="navSearch" onSubmit={this.handleSubmit}>
              <Input onChange={this.handleSearchChange} className="navSearchBar" action={{ icon: 'search' }} placeholder='Leave blank to search all restaurants' />
          </Form>
        </div>
        </Grid.Column>
        <Grid.Column  width={4}>
        <div className="navElementWrapper">
        <div className="navbarLogin">
          {this.props.user ?
            <div>Welcome {this.props.user.username}! <span className="navbarLoginText" onClick={this.handleLogout}>Logout?</span></div>
          :
          <LoginSignup logInToggle={this.logInToggle} loginSelected={this.state.loginSelected}/>}
        </div>
        </div>
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
    fetchComplete: state.restaurants.fetchComplete,
    user: state.auth.user
  }
}


export default withRouter(connect(mapStateToProps, actions)(Navbar))
