import React, { Component} from 'react'
import {connect} from 'react-redux'
import {Form, Grid} from 'semantic-ui-react'
import * as actions from "../../actions"
import Slider from './Slider'

class ReviewForm extends Component{

   state = {
     quality: 1,
     cleanliness: 1,
     service: 1,
     value: 1,
     content: ""
   }

   handleSubmit = event => {
     event.preventDefault()
     const data = {rating: this.state.rating,
       quality: Math.round(this.state.quality),
       cleanliness: Math.round(this.state.cleanliness),
       service: Math.round(this.state.service),
       value: Math.round(this.state.value),
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

     handleChange = event => {
       this.setState({
         [event.target.name]: event.target.value
       })
     }

  render(){
    return(
      <div className="reviewForm">
        <Form onSubmit={this.handleSubmit}>
          <Grid >
            <Grid.Row style={{height: "50px"}}>
            </Grid.Row>
            <Grid.Row style={{height: "205px"}}>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={14}>
                <label> {`Add your review of ${this.props.name}`}
                  <Form.TextArea
                    className="textArea"
                    maxLength="500"
                    onChange={this.handleChange}
                    name="content" rows="5"
                    value={this.state.content}
            placeholder="You don’t have to write anything here, but we sure appreciate your thoughts!"
            />
          </label>

          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{paddingLeft: "20px"}} >
            <Grid.Column width={4}>
            <Form.Field>
             <Slider handleChange={this.handleChange} rating={this.state.quality} ratingOf={"Quality"} color={"red"}/>
           </Form.Field>
            </Grid.Column>
            <Grid.Column width={4}>
            <Form.Field>
            <Slider handleChange={this.handleChange} rating={this.state.cleanliness} ratingOf={"Cleanliness"} color={"purple"}/>
            </Form.Field>
            </Grid.Column>
            <Grid.Column width={4}>
            <Form.Field>
            <Slider handleChange={this.handleChange} rating={this.state.service} ratingOf={"Service"} color={"green"}/>
            </Form.Field>
            </Grid.Column>
            <Grid.Column width={4}>
            <Form.Field>
            <Slider handleChange={this.handleChange} rating={this.state.value} ratingOf={"Value"} color={"orange"}/>
            </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
          <Grid.Column width={12} />
          <Grid.Column width={4}>
          <Form.Button>Submit</Form.Button>
          </Grid.Column>
          </Grid.Row>
          </Grid>



        </Form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return(
    {
      user: state.auth.user
    }
  )
}

export default connect(mapStateToProps, actions)(ReviewForm)
