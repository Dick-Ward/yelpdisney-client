import React from 'react'
import HorizontalLogIn from './horizontalLogin'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

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
          <Link to="/signup"><Button>Sign Up </Button></Link>
        </Button.Group>
      </div>
    </>
    )}
}

export default NavbarLogin
