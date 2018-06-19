import React, { Component} from 'react'

class ReviewForm extends Component{

   state = {
     rating: 1,
     content: ""
   }

  render(){

    console.log(this.state)
    const handleSubmit = event => {
      event.preventDefault()
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

export default ReviewForm
