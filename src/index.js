import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import "./style/svgStyle.css";
import "./style/restaurant.css";
import "./style/listview.css";
import "./style/reviews.css";
import "./style/navbar.css";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import restaurantsReducer from "./reducers/restaurants";
import authReducer from "./reducers/auth";
import reduxThunk from "redux-thunk";
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom'

const rootReducer  = combineReducers({restaurants: restaurantsReducer, auth: authReducer})
const store = createStore(rootReducer, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
