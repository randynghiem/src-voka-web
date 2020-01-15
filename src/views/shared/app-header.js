import React from "react";
import AppNavBar from "../../components/app-navbar";
import { connect } from "react-redux";
import { signInOrOut } from "../../event-handlers/auth";

class AppHeader extends React.Component {
  signInOrOut = () => {
    this.props.dispatch(signInOrOut("google"));
  };

  render() {
    const { isAuthenticated } = this.props;
    return <AppNavBar isAuthenticated={isAuthenticated} signInOrOut={this.signInOrOut} />;
  }
}

export default connect(
  ({ Auth }) => ({
    isAuthenticated: Auth.isAuthenticated
  })
)(AppHeader);
