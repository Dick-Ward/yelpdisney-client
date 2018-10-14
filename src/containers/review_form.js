import React, { Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import {Form} from 'semantic-ui-react'

class ReviewForm extends Component{

   state = {
     quality: 1,
     cleanliness: 1,
     service: 1,
     value: 1,
     content: ""
   }

  render(){

    const handleSubmit = event => {
      event.preventDefault()
      const data = {rating: this.state.rating,
        quality: this.state.quality,
        cleanliness: this.state.cleanliness,
        service: this.state.service,
        value: this.state.value,
        content: this.state.content,
        restaurant_id: this.props.restaurant_id,
        user_id: this.props.user.id}
      this.props.submitReview(data)
      this.setState({
        quality: 1,
        cleanliness: 1,
        service: 1,
        value: 1,
        content: ""
      })
      this.props.closeForm()
    }

    const handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    return(
      <div className="reviewForm">
        <Form onSubmit={handleSubmit}>
        <Form.Group>
         <Form.Field>
          <label> Quality: {this.state.quality}<br/><input onChange={handleChange} name="quality" type="range" min="1" max="5" value={this.state.quality}/></label>
        </Form.Field>
         <Form.Field>
          <label> Cleanliness: {this.state.cleanliness}<br/><input onChange={handleChange} name="cleanliness" type="range" min="1" max="5" value={this.state.cleanliness}/></label>
         </Form.Field>
         <Form.Field>
          <label> Service: {this.state.service}<br/><input onChange={handleChange} name="service" type="range" min="1" max="5" value={this.state.service}/></label>
         </Form.Field>
         <Form.Field>
          <label> Value: {this.state.value}<br/><input onChange={handleChange} name="value" type="range" min="1" max="5" value={this.state.value}/></label>
         </Form.Field>
        </Form.Group>

          <label > Content: <Form.TextArea maxLength="500" onChange={handleChange} name="content" rows="5" value={this.state.content}/></label>

          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return(
    {
      user: state.user
    }
  )
}

export default connect(mapStateToProps, actions)(ReviewForm)
