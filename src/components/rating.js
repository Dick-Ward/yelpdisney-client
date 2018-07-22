import React from 'react'
import { Progress } from 'semantic-ui-react'

const Rating = props =>{
  return (
    <div>
      <Progress color="blue" value='4' total='5' progress='ratio' />
    </div>
  )
}

export default Rating
