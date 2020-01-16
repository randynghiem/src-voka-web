import React from 'react';
import { connect } from 'react-redux';
import { signInOrOut } from "../../event-handlers/auth";
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'

class Login extends React.Component {

  signInOrOut = () => {
    this.props.dispatch(signInOrOut("google"));
  };

  render() {
    const { isAuthenticated } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    console.log(this.props);

    if (isAuthenticated) {
      return <Redirect to={from} />
    }

    return (
      <div className="row justify-content-center">
        <div className="col-6 text-center mt-5 pb-5 pt-5 bg-light shadow">
          <div className="mb-5">
            <i className="fas fa-user fa-5x text-info"></i>
          </div>
          <button type="button" className="btn btn-danger pl-3 pr-5" onClick={this.signInOrOut}>
            <i className="fab fa-google mr-5"></i>
            Sign In with Google
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  ({ Auth }) => ({
    isAuthenticated: Auth.isAuthenticated
  })
)(Login);