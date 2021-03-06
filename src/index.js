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
import reducers, { initializeStore } from "./event-handlers";
import { HashRouter as Router, Route } from "react-router-dom";
import Goal from "./views/goal";
import DictationView from "./views/dictation/dictation-view";
import AppHeader from "./views/shared/app-header";
import Dashboard from "./views/dashboard";
import Voice from "./views/voice";
import VoicePlay from "./views/voice/voice-play";
import Login from "./views/login";
import ProtectedRoute from "./views/shared/protected-route";

/**
 * Initial setup
 */
const middlewares = [thunk];
let basename = process.env.REACT_APP_BASE_NAME;

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
 * Initialize the store with pre-loaded information
 */

initializeStore.then(preloadedState => {
  const store = createStore(reducers, preloadedState, applyMiddleware(...middlewares));

  ReactDOM.render(
    <Provider store={store}>
      <Router basename={basename}>
        <AppHeader />
        <main className="app-body">
          <section className="app-view">
            <div className="container app-container">
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/dictation" component={DictationApp} />
              <ProtectedRoute path="/dictation/:vid" component={DictationView} />
              <ProtectedRoute exact path="/goal" component={Goal} />
              <ProtectedRoute exact path="/voice" component={Voice} />
              <ProtectedRoute path="/voice/:id" component={VoicePlay} />
            </div>
          </section>
        </main>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
});
