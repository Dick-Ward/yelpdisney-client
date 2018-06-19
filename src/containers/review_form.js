import React, { Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"

class ReviewForm extends Component{

   state = {
     rating: 1,
     content: ""
   }

  render(){


    const handleSubmit = event => {
      event.preventDefault()
      const data = {rating: this.state.rating,
              content: this.state.content,
              restaurant_id: this.props.restaurant_id}
      this.props.submitReview(data)
      this.setState({
        rating: 1,
        content: ""
      })
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
      <label> Rating: <input onChange={handleChange} name="rating" type="number" min="1" max="5" value={this.state.rating}/></label>
      <br/>
      <label> Content: <textarea onChange={handleChange} name="content" rows="5" value={this.state.content}/></label>
      <input type="submit" />
      </form>
      </div>
    )
  }
}

export default connect(null, actions)(ReviewForm)
