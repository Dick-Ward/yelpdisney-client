const API_URL = "https://yelp-disney-api.herokuapp.com";

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Acccepts: "application/json",
  Authorization: token
};

const login = (username, password) => {
  return fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({user: { username, password }})
  }).then(res => res.json());
};

const signup = (username, password, email) => {
  return fetch(`${API_URL}/users/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({user: {
      username,
      password,
      email
    }})
  }).then(res => res.json());
}

const getCurrentUser = () => {
  return fetch(`${API_URL}/profile/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
}

const getRestaurant = permalink =>
  fetch(`${API_URL}/restaurants/${permalink}`)
      .then(res => res.json())

const submitReview = data => fetch(`${API_URL}/reviews`,
{
  body: JSON.stringify(data),
  headers: {
    'content-type': 'application/json'
  },
  method: "POST"
}).then(response => response.json())

const searchRestaurants = (query) =>
  fetch(`${API_URL}/restaurants/search/${query}`)
      .then(res => res.json())


const api = {
  login,
  signup,
  getCurrentUser,
  getRestaurant,
  submitReview,
  searchRestaurants

};

export default api;
