

const cuisineTypes = ["American", "French-inspired", "American/Buffet", "Barbeque", "World Famous Jungle Cuisine", "French", "Italian", "Mexican", "Japanese", "Norwegian", "Chinese", "German", "Moroccan", "British", "Steak", "African-inspired takes on theme park standards", "Seafood", "English", "Latin", "Coffee", "Asian", "Asian, African, South American", "American / African / Buffet", "Pan-Asian", "Pizza", "African", "African / Fusion", "Indian/African", "Ice cream and beverages", "American / Sandwiches", "Mediterranean", "Steak and seafood", "American / Caribbean", "American Buffet", "New American", "Gourmet", "Polynesian / Pan-Asian", "Polynesian", "Hawaiian / American", "American Hawaiian", "Tropical Drinks", "American/Cajun", "Focuses on seafood", "Mediterranean / American"]

let cuisineOptions = cuisineTypes.sort().map(cuisine =>{
  return {key: cuisine, text: cuisine, value: cuisine}
})

cuisineOptions.unshift({key: "All Cuisine Types", text: "All Cuisine Types", value: ""})


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
  cuisineOptions,
  parkOptions,
  categoryOptions,
  parseCategoryCode
}

export default Options
