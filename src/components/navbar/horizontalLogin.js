import React from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import * as actions from "../../actions"

class HorizontalLogIn extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = e =>{
    e.preventDefault()
    if (this.state.username !== "" && this.state.password !== ""){
    this.props.login(
      this.state.username,
      this.state.password
    )} else {
      this.props.setError("Please fill all fields")
    }
  }

    handleChange = e =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render(){
    return(
      <div>
        <Form error onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field>
              <Form.Input name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
            </Form.Field>
            <Form.Field>
              <Form.Input name="password" type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
            </Form.Field>
          </Form.Group>
          <Button type="submit">Submit</Button>
          {this.props.error ? <Message error header='Login Error' content={this.props.error}/> : null}
        </Form>
      </div>
    )
  }
  componentWillUnmount(){
    this.props.clearError()
  }
}

function mapStateToProps(state){
  return (
    {
      error: state.auth.error
    }
  )
}

export default withRouter(connect(mapStateToProps, actions)(HorizontalLogIn))
