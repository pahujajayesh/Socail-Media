import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">LOG IN</span>
        <div className="field">
          <input type="email" placeholder="email" required />
        </div>
        <div className="field">
          <input type="password" required placeholder="enter password" />
        </div>
        <div className="field">
          <button>Log In</button>
        </div>
      </form>
    );
  }
}
