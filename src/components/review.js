import React from 'react'
import {timeConvert} from '../services/parse'

const Review = ({review}) =>{
  if (review.content){
    return(
      <div className="reviewCard">
        <p>{review.username}</p>
        <div>{review.content}</div>
        <div className="date">
          {timeConvert(review.created_at)}
        </div>
      </div>
  )} else {
      return null
  }
}

export default Review
