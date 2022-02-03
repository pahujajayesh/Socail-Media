import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { startSingup, signup,clearAuthState } from '../actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      confirm_password: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirm_password, name } = this.state;

    if (email && password && confirm_password && name) {
      this.props.dispatch(startSingup());
      this.props.dispatch(signup(email, password, confirm_password, name));
    }
  };

  render() {
    const { inProgress, error,isLoggedin } = this.props.auth;
     if (isLoggedin) {
       return <Redirect to="/" />;
     }
    return (
      <form className="login-form">
        <span className="login-signup-header"> Signup</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Confirm password"
            type="password"
            required
            onChange={(e) =>
              this.handleInputChange('confirm_password', e.target.value)
            }
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.onFormSubmit} disabled={inProgress}>
              Signing Up
            </button>
          ) : (
            <button onClick={this.onFormSubmit}>Signup</button>
          )}
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);
