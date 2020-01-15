import React from "react";
import AppNavBar from "../../components/app-navbar";
import { connect } from "react-redux";
import { signInOrOut } from "../../event-handlers/auth";

class AppHeader extends React.Component {
  signInOrOut = () => {
    console.log("sign in/out");
    this.props.dispatch(signInOrOut("google"));
  };

  render() {
    return <AppNavBar isAuthenticated={false} signInOrOut={this.signInOrOut} />;
  }
}

export default connect()(AppHeader);
