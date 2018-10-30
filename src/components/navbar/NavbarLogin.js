import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import HorizontalLogIn from './HorizontalLogin'

const NavbarLogin = (props) =>{
  if (props.loginSelected){
    return(<HorizontalLogIn />)
  } else {
  return(
    <>
      <div className="splashLoginButtons">
        <Button.Group>
          <Button onClick={props.logInToggle}>Log In </Button>
          <Button.Or />
          <Link to="/signup"><Button>Sign Up</Button></Link>
        </Button.Group>
      </div>
    </>
    )}
}

export default NavbarLogin
