import React from 'react'

const Slider = props =>{
  return(
    <label>
      {props.ratingOf}: {Math.round(props.rating)}
      <br/>
      <input
        style={{backgroundColor: props.color}}
        className="slider"
        step=".01"
        onChange={props.handleChange}
        name={props.ratingOf.toLowerCase()}
        type="range"
        min="1"
        max="5"
        value={props.rating}
        />
    </label>
  )
}
export default Slider
