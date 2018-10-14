import React from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import {withRouter} from 'react-router'

class SignUp extends React.Component {

  state = {
    username: "",
    email: "",
    password: "",
    passwordMatch: ""
  }

  handleSubmit = e =>{
    e.preventDefault()
    if(this.state.username !== "" && this.state.password !== "" && this.state.email !== ""){
      if(this.state.password === this.state.passwordMatch) {
        this.props.signup(
          this.state.username,
          this.state.password,
          this.state.email,
          this.props.history
   )} else {
      this.props.setError("Passwords do not match.")
     }
   } else {
     this.props.setError("Please fill all fields.")
   }
  }

    handleChange = e =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render(){
    return(
      <Form  error onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input name="username" label="Username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
          <Form.Input name="email" label="Email" type="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
          <Form.Input name="password" label="Password" type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
          <Form.Input name="passwordMatch" label="Confirm Password" type="password" placeholder="Password" onChange={this.handleChange} value={this.state.passwordMatch}/>
        </Form.Group>
        <Button type="submit">Submit</Button>
        {this.props.error ? <Message error header='Signup Error' content={this.props.error}/> : null}
      </Form>
    )
  }
  componentWillUnmount(){
    this.props.clearError()
  }
}

function mapStateToProps(state){
  return (
    {
      error: state.error
    }
  )
}

export default withRouter(connect(mapStateToProps, actions)(SignUp))
