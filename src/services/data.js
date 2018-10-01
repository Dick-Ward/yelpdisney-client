
const parseCuisineOptions = (cuisineTypes) =>{
  let cuisineOptions = cuisineTypes.sort().map(cuisine =>{
    if(cuisine){
      return {key: `cuisine${cuisine}`, text: cuisine, value: cuisine}
    } else {
      return undefined
    }
  }
)
  cuisineOptions = cuisineOptions.filter(opt => opt)
  cuisineOptions.unshift({key: "All Cuisine Types", text: "All Cuisine Types", value: ""})
  return cuisineOptions
}
const categoryTypes = ["counter_service", "table_service", "bar_or_lounge", "room_service", "market", "food_cart"]

const parseCategoryCode = (code) =>{
  let rest_code
  switch (code) {
    case "counter_service":
      rest_code = "Counter Service"
      break
    case "table_service":
      rest_code = "Table Service"
      break
    case "bar_or_lounge":
      rest_code = "Bar / Lounge"
      break
    case "room_service":
      rest_code = "Room Service"
      break
    case "market":
      rest_code = "Market"
      break
    case "food_cart":
      rest_code = "Food Cart"
      break
    default:
      rest_code = "none"
  }
  return rest_code
}

let categoryOptions = categoryTypes.sort().map(category =>{
  let parsedCategory = parseCategoryCode(category)
  return {key: parsedCategory, text: parsedCategory, value: parsedCategory}
})

categoryOptions.unshift({key: "All Categories", text: "All Categories", value: ""})


const parkOptions = [
  {key: 'All Parks', text: 'All Parks', value: ''},
  {key: 'Magic Kingdom', text: 'Magic Kingdom', value: 'Magic Kingdom'},
  {key: 'Epcot', text: 'Epcot', value: 'Epcot'},
  {key: 'Hollywood Studios', text: 'Hollywood Studios', value: 'Hollywood Studios'},
  {key: 'Animal Kingdom', text: 'Animal Kingdom', value: 'Animal Kingdom'},
  {key: 'Blizzard Beach', text: 'Blizzard Beach', value: 'Blizzard Beach'},
  {key: 'Typhoon Lagoon', text: 'Typhoon Lagoon', value: 'Typhoon Lagoon'},
  {key: 'Resort Dining', text: 'Resort Dining', value: 'Resort Dining'}
]

const Options = {
  parkOptions,
  categoryOptions,
  parseCategoryCode,
  parseCuisineOptions
}

export default Options
