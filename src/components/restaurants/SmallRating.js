import React from 'react'

const SmallRating = props => {
  return (
    <React.Fragment>
    <svg style={{width: 0, height: 0}}>
      <clipPath id={`svgPath${props.ratingOf}`}>
      <ellipse cx="71" cy="20" rx="19.5" ry="19.5"/>
      <ellipse cx="71" cy="70" rx="19.5" ry="19.5"/>
      <ellipse cx="30" cy="45" rx="30" ry="30"/>
      </clipPath>
    </svg>
    <div>
      <div className={`vertical ${props.ratingOf}`}>
      <span class="ratingFill" style={{width: `${(props.rating/5*100)}%`, backgroundColor: props.color}} />
      </div>
      <div>{props.ratingOf}</div>
      <div>{props.rating}</div>
    </div>
    </React.Fragment>
  )
}

export default SmallRating
