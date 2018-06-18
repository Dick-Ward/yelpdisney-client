import React from 'react'

const Review = ({review}) =>{
  return(
    <div>
      {review.rating} stars: {review.content}
    </div>
  )
}

export default Review
