import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {

  render() {

    console.log(this.props);

    return (
      <div className="row justify-content-center">
        <div className="col-6 text-center mt-5 pb-5 pt-5 bg-light shadow">
          <div className="mb-5">
            <i className="fas fa-user fa-5x text-info"></i>
          </div>
          <button type="button" className="btn btn-danger pl-3 pr-5">
            <i className="fab fa-google mr-5"></i>
            Sign In with Google
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Login);