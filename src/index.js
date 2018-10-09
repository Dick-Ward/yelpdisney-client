import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import "./style/svgStyle.css";
import AppContainer from "./containers/app_container";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import indexReducer from "./reducers/index";
import reduxThunk from "redux-thunk";
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom'


const store = createStore(indexReducer, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
