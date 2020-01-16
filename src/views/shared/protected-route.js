import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated ?
        <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    )} />
  );
}

export default connect(
  ({ Auth }) => ({
    isAuthenticated: Auth.isAuthenticated
  })
)(ProtectedRoute);