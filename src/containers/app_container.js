import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from '../App'
import Splash from '../components/splash'
import LogIn from '../components/log_in'
import SignUp from '../components/sign_up'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {withRouter} from 'react-router'


class AppContainer extends React.Component{
  render(){

    return(
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route component={App} />
        </Switch>
        </div>
    )
  }

 componentDidMount(){
   this.props.getCurrentUser()
 }
}


export default withRouter(connect(null, actions)(AppContainer))
