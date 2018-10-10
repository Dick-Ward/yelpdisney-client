import React from 'react'

const Review = ({review}) =>{
  return(
    <div>
      {review.content !== "" ? <div>Review: {review.content}</div> : null}
      <br/>
    </div>
  )
}

export default Review
