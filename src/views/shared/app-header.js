import React from "react";
import AppNavBar from "../../components/app-navbar";
import { connect } from "react-redux";
import { signInOrOut } from "../../event-handlers/auth";
import PropTypes from 'prop-types';

class AppHeader extends React.Component {
  signInOrOut = () => {
    this.props.dispatch(signInOrOut("google"));
  };

  render() {
    const { isAuthenticated } = this.props;
    return <AppNavBar isAuthenticated={isAuthenticated} signInOrOut={this.signInOrOut} />;
  }
}

AppHeader.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  ({ Auth }) => ({
    isAuthenticated: Auth.isAuthenticated
  })
)(AppHeader);
