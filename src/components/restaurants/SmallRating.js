import React from 'react'

const SmallRating = props => {
  return (
    <React.Fragment>
      <div className="ratingBox">
        <svg style={{width: 0, height: 0}}>
          <clipPath id={`svgPath${props.ratingOf}`}>
            <ellipse cx="26.6" cy="29.3" rx="26" ry="26"/>
            <ellipse cx="93.3" cy="29.3" rx="26" ry="26"/>
            <ellipse cx="60" cy="80" rx="40" ry="40"/>
          </clipPath>
        </svg>
        <svg style={{width: 0, height: 0}}>
          <clipPath id={`ratingSVG${props.ratingOf}`}>
            <text className="smallSVGText" x="27" y="98">{props.rating.toFixed(1)}</text>
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
      </div>
    </React.Fragment>
  )
}

export default SmallRating
