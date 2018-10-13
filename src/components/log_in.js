import React from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import {withRouter} from 'react-router'

class LogIn extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = e =>{
    e.preventDefault()
    this.props.login(
      this.state.username,
      this.state.password,
      this.props.history
    )
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
            <Form.Input name="password" label="Password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
          </Form.Group>
          <Button type="submit">Submit</Button>
          {this.props.error ? <Message error header='Login Error' content={this.props.error}/> : null}
        </Form>
    )
  }
}

function mapStateToProps(state){
  return (
    {
      error: state.error
    }
  )
}

export default withRouter(connect(mapStateToProps, actions)(LogIn))
