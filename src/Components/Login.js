import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailinputRef = React.createRef();
    // this.passwordinputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
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
  handelformSubmity = (e) => {
    e.preventDefault();
    console.log('this.state', this.state);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">LOG IN</span>
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
          <button onClick={this.handelformSubmity}>Log In</button>
        </div>
      </form>
    );
  }
}
