import React from 'react'
import Login from '../global/Login'
import Signup from '../global/Signup'
import {Button, Modal} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const LoginSignup = (props) =>{
  return(
    <>
      <div>
        <Modal trigger={<span className="splashLoginText">Log In</span>} basic size="small">
          <Login />
        </Modal>
        <span>{` or `}</span>
        <Modal trigger={<span  className="splashLoginText">Sign Up</span>} basic size="small">
          <Signup />
        </Modal>
      </div>
    </>
  )
}

export default LoginSignup
