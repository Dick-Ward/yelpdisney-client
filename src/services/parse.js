import * as moment from 'moment'
var mom = require('moment-timezone')


export const unparsedDetails = ["opened_on", "entree_range", "breakfast_hours","lunch_hours", "dinner_hours", "parking", "wine_list"]
export const unwantedDetails = ["average_rating", "average_value", "average_quality", "average_service", "average_cleanliness", "reviews", "name", "id", "permalink", "park", "operator_url", "house_specialties", "resort_name"]

export const getTimeZone = () =>{
  if (!sessionStorage.getItem('timezone')) {
    let tz = mom.tz.guess() || 'UTC';
    sessionStorage.setItem('timezone', tz);
  }
  return sessionStorage.getItem('timezone')
}

export const timeConvert = time =>{
  const timeZone = getTimeZone()
  const newTime = moment(time).tz(timeZone).format("MM/DD/YY - h:mm a")
  return newTime
}
