import React from 'react'
import LogIn from './SplashLogin'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SplashLogin = (props) =>{
  return(
    <>
      <div className="splashLoginButtons">
        <Button.Group>
          <Button inverted onClick={props.logInToggle}>Log In </Button>
          <Button.Or />
          <Link to="/signup"><Button inverted>Sign Up </Button></Link>
          </Button.Group>
      </div>
      {props.loginSelected && <LogIn />}
    </>
  )
}

export default SplashLogin
