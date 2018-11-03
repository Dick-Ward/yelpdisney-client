import React from 'react'

const SmallRating = props => {
  return (
    <React.Fragment>
      <svg style={{width: 0, height: 0}}>
        <clipPath id={`svgPath${props.ratingOf}`}>
          <ellipse cx="20" cy="22" rx="19.5" ry="19.5"/>
          <ellipse cx="70" cy="22" rx="19.5" ry="19.5"/>
          <ellipse cx="45" cy="60" rx="30" ry="30"/>
        </clipPath>
      </svg>
      <div>
        <div className={`vertical ${props.ratingOf}`}>
          <span className="ratingFill" style={{height: `${(props.rating/5*100)}%`, backgroundColor: props.color}} />
      </div>
      <div>{props.ratingOf}</div>
      <div>{props.rating}</div>
    </div>
    </React.Fragment>
  )
}

export default SmallRating
