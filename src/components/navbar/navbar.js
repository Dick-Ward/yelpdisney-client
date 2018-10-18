import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Form, Input, Button, Grid, Icon} from 'semantic-ui-react'
import * as actions from "../../actions"
import NavbarLogin from './NavbarLogin'

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
        <Grid.Column width={6}>
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
        <Grid.Column width={3}>
          {this.props.user ?
            <div className="logout">Welcome {this.props.user.username}! <Button basic size="small" onClick={this.handleLogout}>Logout?</Button></div>
          :
          <NavbarLogin logInToggle={this.logInToggle} loginSelected={this.state.loginSelected}/>
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
    fetchComplete: state.restaurants.fetchComplete,
    user: state.auth.user
  }
}


export default withRouter(connect(mapStateToProps, actions)(Navbar))
