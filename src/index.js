import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './utils/combine-reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './containers/todo';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/todo' component={Todo} />
    </Router>
  </Provider>
  , document.getElementById('root'));