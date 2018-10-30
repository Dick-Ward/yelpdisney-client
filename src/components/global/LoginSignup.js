import React from 'react'
import Login from '../global/Login'
import Signup from '../global/Signup'
import {Modal} from 'semantic-ui-react'


class LoginSignup extends React.Component{
  state = {
    modalOpen: false,
    render: ""
  }

  handleClick = (e) =>{
    this.setState(
      {
        modalOpen: true,
       render: e.target.id
     }
    )
  }

  closeModal = () =>{
    this.setState({modalOpen: false})
  }

  toggleRender = () =>{
    if (this.state.render === "signup"){
      this.setState({render: "login"})
    }
    else {
      this.setState({render: "signup"})
    }
  }

  render(){
    return(
    <>
      <div>
        <span id="login" onClick={this.handleClick} className="splashLoginText">Log In</span>
        <span>{` or `}</span>
        <span id="signup" onClick={this.handleClick} className="splashLoginText">Sign Up</span>
        <Modal onClose={this.closeModal} open={this.state.modalOpen} basic size="small">
          {this.state.render === "signup" ? <Signup toggle={this.toggleRender} /> : <Login toggle={this.toggleRender} />}
        </Modal>

      </div>
    </>
  )}
}

export default LoginSignup
