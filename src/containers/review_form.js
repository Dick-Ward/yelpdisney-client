import React, { Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"

class ReviewForm extends Component{

   state = {
     quality: 1,
     cleanliness: 1,
     service: 1,
     value: 1,
     content: ""
   }

  render(){
    console.log(this.props)


    const handleSubmit = event => {
      event.preventDefault()
      const data = {rating: this.state.rating,
        quality: this.state.quality,
        cleanliness: this.state.cleanliness,
        service: this.state.service,
        value: this.state.value,
        content: this.state.content,
        restaurant_id: this.props.restaurant_id}
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
      <div>
        <form onSubmit={handleSubmit}>
          <br/>
          <label> Quality: <input onChange={handleChange} name="quality" type="number" min="1" max="5" value={this.state.quality}/></label>
          <br/>
          <br/>
          <label> Cleanliness: <input onChange={handleChange} name="cleanliness" type="number" min="1" max="5" value={this.state.cleanliness}/></label>
          <br/>
          <br/>
          <label> Service: <input onChange={handleChange} name="service" type="number" min="1" max="5" value={this.state.service}/></label>
          <br/>
          <br/>
          <label> Value: <input onChange={handleChange} name="value" type="number" min="1" max="5" value={this.state.value}/></label>
          <br/>
      <label> Content: <textarea maxLength="500" onChange={handleChange} name="content" rows="5" value={this.state.content}/></label>
      <input type="submit" />
      </form>
      </div>
    )
  }
}

export default connect(null, actions)(ReviewForm)
