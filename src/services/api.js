const API_URL = "http://localhost:3000";

const getRestaurants = fetch(`${API_URL}/restaurants`).then(res => res.json());

const api = {
  getRestaurants
};

export default api;
