import React from 'react'

const SmallRating = props => {
console.log(props)
  return (
    <React.Fragment>
    <svg style={{width: 0, height: 0}}>
      <clipPath id={`svgPath${props.ratingOf}`}>
         <ellipse cx="62" cy="14" rx="13" ry="13"/>
         <ellipse cx="62" cy="46" rx="13" ry="13"/>
         <ellipse cx="35" cy="30" rx="20" ry="20"/>
         <text x="20" y="0" style={{transform: "rotate(90deg)"}}>{props.rating}</text>
      </clipPath>
    </svg>
    <div>
      <div className={`vertical ${props.ratingOf}`}>
      <span style={{width: `${(props.rating/5*100) + ((5 - props.rating) * 3)}%`, backgroundColor:"red"}} />
      </div>
    </div>
    </React.Fragment>
  )
}

export default SmallRating
