import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import DictationApp from "./views/dictation";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./event-handlers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Goal from "./views/goal";
import DictationView from "./views/dictation/dictation-view";
import AppHeader from "./views/shared/app-header";
import Dashboard from "./views/dashboard";
import Voice from "./views/voice";
import Login from "./views/login";

/**
 * Initial setup
 */
const middlewares = [thunk];
let basename = process.env.REACT_APP_BASE_NAME;

console.log("NODE_ENV: ", process.env.NODE_ENV);
console.log("REACT_APP_BASE_NAME: ", process.env.REACT_APP_BASE_NAME);

/**
 * Development setup
 */
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

if (process.env.NODE_ENV === "production") {
  //TODO: enable security features
}

/**
 * create a global store - best with Redux
 */
const store = createStore(reducers, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <Router basename={basename}>
      <AppHeader />
      <main className="app-body">
        <section className="app-view">
          <div className="container app-container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dictation" component={DictationApp} />
            <Route path="/dictation/:vid" component={DictationView} />
            <Route path="/goal" component={Goal} />
            <Route path="/voice" component={Voice} />
          </div>
        </section>
      </main>
    </Router>
  </Provider>,
  document.getElementById("root")
);
