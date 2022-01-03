import React, { Component } from "react";
import "./index.css";
import LoginForm from "../components/LoginForm/loginForm";
export default class index extends Component {
  render() {
    return (
      <div className="login">
        <div className="login__page">
          <div className="login__back">
            <div className="login__login-form">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
