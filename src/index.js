import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import indexReducer from "./reducers/index";
import reduxThunk from "redux-thunk";
import 'semantic-ui-css/semantic.min.css';

const store = createStore(indexReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
