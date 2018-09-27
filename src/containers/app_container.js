import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from '../App'
import Splash from '../components/splash'


class AppContainer extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route component={App} />
        </Switch>
        </div>
    )
  }
}

export default AppContainer
