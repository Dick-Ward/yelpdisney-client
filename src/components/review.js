import React from 'react'

const Review = ({review}) =>{
  if (review.content){
  return(
    <div className="reviewCard">
       <p>Reviewer Name</p>
       <div>{review.content}</div>
    </div>
  )} else {
    return null
  }

}

export default Review
