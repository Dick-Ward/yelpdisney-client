import React from 'react'
import * as moment from 'moment'

const Review = ({review}) =>{
  if (review.content){
  return(
    <div className="reviewCard">
      <p>Reviewer Name</p>
      <div>{review.content}</div>
      <div className="date">
        {moment(review.created_at, "YYYY-MM-DDTHH:mm").format("MM/DD/YY - h:mm a")}
      </div>
    </div>
  )} else {
    return null
  }

}

export default Review
