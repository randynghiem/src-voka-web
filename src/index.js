import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/dictation';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './event-handlers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './views/goal';
import Dictation from './views/dictation/dictation-view';
import AppNavBar from './components/app-navbar';
import AppFooter from './components/app-footer';
import Dashboard from './views/dashboard';

/**
 * create a global store - best with Redux
 */
const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <AppNavBar />
    <main className="app-body">
      <section className="app-view">
        <div className="container app-container">
          <Router>
            <Route exact path="/" component={Dashboard} />
            <Route path='/dictation' component={App} />
            <Route path='/dictation/:vid' component={Dictation} />
            <Route path='/goal' component={Todo} />
          </Router>
        </div>
      </section>
    </main>
    <AppFooter />
  </Provider>
  , document.getElementById('root'));