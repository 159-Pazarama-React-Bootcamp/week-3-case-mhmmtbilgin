import React, { Component } from "react";
import Field from "../Field/field";
import Button from "../Button/button";
import "./index.css";
import SocialButton from "../SocialButton/socialButton";
import Google from "../../assets/icons/google-icon.svg";
import Facebook from "../../assets/icons/facebook-icon.svg";
import Github from "../../assets/icons/github-icon.svg";

export default class loginForm extends Component {
  render() {
    const googleStyle = {
      backgroundImage: `url( ${Google}`,
    };
    const facebookStyle = {
      backgroundImage: `url( ${Facebook}`,
    };
    const githubStyle = {
      backgroundImage: `url( ${Github}`,
    };
    return (
      <div className="login-content">
        <div className="login-form">
          <span className="login-form__title">Login</span>
          <Field label="Email" type="text" placeholder="username@gmail.com" />

          <Field
            label="Password"
            type="password"
            placeholder="Password"
            labelBottom="Forgot Password?"
          />

          <Button buttonName="Sign In" />

          <p className="login__or">or continue with</p>
          <div className="login__social-btn">
            <SocialButton buttonStyle={googleStyle} />
            <SocialButton buttonStyle={githubStyle} />
            <SocialButton buttonStyle={facebookStyle} />
          </div>
          <div className="login__footer">
            <p className="login__dont">Don’t have an account yet?</p>
            <p className="login__register">Register for free </p>
          </div>
        </div>
        <div className="login__image">
          <div className="login__login-image"></div>
        </div>
      </div>
    );
  }
}
