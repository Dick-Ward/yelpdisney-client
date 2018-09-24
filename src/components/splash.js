import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class Splash extends React.Component {
  render(){
    return(
      <div>Hi from Splash</div>
    )
  }
}

export default connect(null, actions)(Splash)
