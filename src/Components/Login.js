import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.emailinputRef = React.createRef();
    this.passwordinputRef = React.createRef();
  }
  handelformSubmity = (e) => {
    e.preventDefault();
    console.log(this.emailinputRef);
    console.log(this.passwordinputRef);
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
            ref={this.emailinputRef}
          />
        </div>
        <div className="field">
          <input
            type="password"
            required
            placeholder="enter password"
            ref={this.passwordinputRef}
          />
        </div>
        <div className="field">
          <button onClick={this.handelformSubmity}>Log In</button>
        </div>
      </form>
    );
  }
}
