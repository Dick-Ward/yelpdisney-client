const API_URL = "http://localhost:3000";

const getRestaurants = fetch(`${API_URL}/restaurants`)
      .then(res => res.json());

const getRestaurant = id => fetch(`${API_URL}/restaurants/${id}`)
      .then(res => res.json());

const submitReview = data => fetch(`${API_URL}/reviews`,
{
  body: JSON.stringify(data),
  headers: {
    'content-type': 'application/json'
  },
  method: "POST"
}).then(response => response.json())

const api = {
  getRestaurants,
  getRestaurant,
  submitReview

};

export default api;
