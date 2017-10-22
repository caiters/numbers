/* eslint "import/imports-first": 0 */
/* eslint no-undef: 0 */
/* eslint import/extensions: 0 */
/* eslint react/jsx-filename-extension:0 */
import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { Router, browserHistory } from "react-router";
import reducers from "./rootReducer";
import routes from "./routes";
import { endGameCheck } from "./modules/gameboard/gameBoard";
// for bundling your styles
// import './bundle.scss'

const devtools = window.devToolsExtension || (() => noop => noop);
const enhancers = [devtools(), applyMiddleware(endGameCheck)];
const store = createStore(reducers, compose(...enhancers));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector(".react-root")
);
