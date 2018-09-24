

const cuisineTypes = ["American", "French-inspired", "American/Buffet", "Barbeque", "World Famous Jungle Cuisine", "French", "Italian", "Mexican", "Japanese", "Norwegian", "Chinese", "German", "Moroccan", "British", "Steak", "African-inspired takes on theme park standards", "Seafood", "English", "Latin", "Coffee", "Asian", "Asian, African, South American", "American / African / Buffet", "Pan-Asian", "Pizza", "African", "African / Fusion", "Indian/African", "Ice cream and beverages", "American / Sandwiches", "Mediterranean", "Steak and seafood", "American / Caribbean", "American Buffet", "New American", "Gourmet", "Polynesian / Pan-Asian", "Polynesian", "Hawaiian / American", "American Hawaiian", "Tropical Drinks", "American/Cajun", "Focuses on seafood", "Mediterranean / American"]

let cuisineOptions = cuisineTypes.sort().map(cuisine =>{
  return {key: cuisine, text: cuisine, value: cuisine}
})

cuisineOptions.unshift({key: "All Cuisine Types", text: "All Cuisine Types", value: ""})

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
  parkOptions
}

export default Options
