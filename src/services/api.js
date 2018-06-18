const API_URL = "http://localhost:3000";

const getRestaurants = fetch(`${API_URL}/restaurants`)
      .then(res => res.json());

const postReview = data => fetch(`${API_URL}/reviews`,
{
  body: JSON.stringify(data),
  headers: {
    'content-type': 'application/json'
  },
  method: "POST"
}).then(response => response.json())

const api = {
  getRestaurants,
  postReview

};

export default api;
