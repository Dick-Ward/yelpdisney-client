import React from 'react'
import LogIn from './log_in'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const SplashLogin = (props) =>{
  return(
    <>
      <div className="splashLoginButtons">
        <Button.Group>
          <Button onClick={props.logInToggle} color="teal">Log In </Button>
          <Button.Or />
          <Link to="/signup"><Button color="teal">Sign Up </Button></Link>
          </Button.Group>
      </div>
      {props.loginSelected && <LogIn />}
    </>
    )
}

export default SplashLogin
