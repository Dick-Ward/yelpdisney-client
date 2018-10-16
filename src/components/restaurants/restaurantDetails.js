import React from 'react'
import {startCase} from 'lodash';
import * as moment from 'moment'
import {unparsedDetails, unwantedDetails} from '../../services/parse'

const RestaurantDetails = ({restaurant}) =>{
    let details = []
    for (let detail in restaurant){
      if(restaurant[detail] && restaurant[detail] !== "Resort Dining"){
        if (detail === "category_code"){
          details.push({detail: "Category", information: startCase(restaurant[detail])})
        }
        else if (detail === "cost_code"){
          details.push({detail: "Cost", information: startCase(restaurant[detail])})
        }
        else if(unparsedDetails.includes(detail)){
          details.push({detail: startCase(detail), information: restaurant[detail]})
        }
        else if (restaurant[detail] === true){
          details.push({detail: startCase(detail), information: ""})
        }
        else if(!unwantedDetails.includes(detail)){
          details.push({detail: startCase(detail), information: startCase(restaurant[detail])})
        }
      }
    }
    return details.map(detail =>{
      if (detail.information !== ""){
      return <p key={detail.detail}>{detail.detail}: {detail.information}</p>
    } else {
      return <p key={detail.detail}>{detail.detail}</p>
    }
  })
}

export default RestaurantDetails
