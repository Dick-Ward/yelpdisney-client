import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ViewContainer from './components/ViewContainer'
import Splash from './components/splash/Splash'
import LogIn from './components/splash/SplashLogin'
import SignUp from './components/global/Signup'
import {connect} from 'react-redux'
import * as actions from './actions'
import {withRouter} from 'react-router'

class App extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route component={ViewContainer} />
        </Switch>
        </div>
    )
  }
 componentDidMount(){
   this.props.getCurrentUser()
 }
}


export default withRouter(connect(null, actions)(App))
