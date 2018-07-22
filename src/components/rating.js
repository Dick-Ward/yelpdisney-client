import React from 'react'
import { Progress } from 'semantic-ui-react'

const Rating = props =>{
  return (
    <div>
      <Progress className="vertical" color="blue" value='4' total='5' progress='ratio' size='big'/>
    </div>
  )
}

export default Rating
