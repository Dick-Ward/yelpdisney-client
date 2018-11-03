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
      <svg style={{width: 0, height: 0}}>
        <clipPath id={`ratingSVG${props.ratingOf}`}>
          <text class="smallSVGText" x="19" y="72">{props.rating.toFixed(1)}</text>
        </clipPath>
      </svg>
      <div>
        <div className={`${props.ratingOf}`}>
          <span className="ratingFill" style={{height: `${(props.rating/5*100)}%`, backgroundColor: props.color}} />
        </div>
        <div>
          <div className={`${props.ratingOf}Number`}>
            <span className="numberFill" style={{height: `${100 - (props.rating/5*100)}%`, backgroundColor: props.color}} />
          </div>
        </div>
        <div>{props.ratingOf}</div>

    </div>
    </React.Fragment>
  )
}

export default SmallRating
