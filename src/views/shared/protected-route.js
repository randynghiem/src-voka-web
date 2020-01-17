import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default connect(
  ({ Auth }) => ({
    isAuthenticated: Auth.isAuthenticated
  })
)(ProtectedRoute);