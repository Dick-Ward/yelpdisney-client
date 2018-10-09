import React from 'react'

const SmallRating = props => {
console.log(props)
  return (
    <React.Fragment>
    <svg style={{width: 0, height: 0}}>
      <clipPath id={`svgPath${props.ratingOf}`}>
         <ellipse cx="47" cy="14" rx="13" ry="13"/>
         <ellipse cx="47" cy="46" rx="13" ry="13"/>
         <ellipse cx="20" cy="30" rx="20" ry="20"/>
      </clipPath>
    </svg>
    <div>
      <div className={`vertical ${props.ratingOf}`}>
      <span style={{width: `${(props.rating/5*100)}%`, backgroundColor: props.color}} />
      </div>
      <div>{props.ratingOf}</div>
      <div>{props.rating}</div>
    </div>
    </React.Fragment>
  )
}

export default SmallRating
