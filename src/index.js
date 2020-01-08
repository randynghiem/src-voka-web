import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './utils/combine-reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './containers/todo';
import Dictation from './containers/dictation';

/**
 * create a global store - best with Redux
 */
const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/dictation/:vid' component={Dictation} />
      <Route path='/todo' component={Todo} />
    </Router>
  </Provider>
  , document.getElementById('root'));