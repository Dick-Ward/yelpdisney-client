import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import indexReducer from "./reducers/index";
import reduxThunk from "redux-thunk";
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Route} from 'react-router-dom'


const store = createStore(indexReducer, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
