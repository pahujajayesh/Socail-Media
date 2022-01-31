import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearAuthState, login } from '../actions/auth';
class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailinputRef = React.createRef();
    // this.passwordinputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  
  handelEmailChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };
  handelPasswordChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };
  handelformSubmit = (e) => {
    e.preventDefault();

    console.log('this.state', this.state);
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };
  render() {
    const { error, inProgress,isLoggedin } = this.props.auth;
    if (isLoggedin){
      return <Redirect to='/'/>
    }
      return (
        <form className="login-form">
          <span className="login-signup-header">LOG IN</span>
          {error && <div className="alert error-dailog">{error}</div>}
          <div className="field">
            <input
              type="email"
              placeholder="email"
              required
              // ref={this.emailinputRef}
              onChange={this.handelEmailChange}
              value={this.state.email}
            />
          </div>
          <div className="field">
            <input
              type="password"
              required
              placeholder="enter password"
              // ref={this.passwordinputRef}
              onChange={this.handelPasswordChange}
              value={this.state.password}
            />
          </div>
          <div className="field">
            {inProgress ? (
              <button onClick={this.handelformSubmit} disabled={inProgress}>
                Logging In..
              </button>
            ) : (
              <button onClick={this.handelformSubmit}>Log In</button>
            )}
          </div>
        </form>
      );
  }
}
function mapStateToPorps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToPorps)(Login);
