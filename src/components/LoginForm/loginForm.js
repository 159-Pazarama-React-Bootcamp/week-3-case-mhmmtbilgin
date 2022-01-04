import React, { Component } from "react";
import Field from "../Field/field";
import Button from "../Button/button";
import "./index.css";
import SocialButton from "../SocialButton/socialButton";
import Google from "../../assets/icons/google-icon.svg";
import Facebook from "../../assets/icons/facebook-icon.svg";
import Github from "../../assets/icons/github-icon.svg";
import { Link } from "react-router-dom";

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
          <span className="login-form__title">Giriş</span>
          <Field label="Email" type="text" placeholder="username@gmail.com" />

          <Field
            label="Şifre"
            type="password"
            placeholder="Şifre"
            labelBottom="Şifremi Unuttum?"
          />

          <Button buttonName="Giriş Yap" />

          <p className="login__or">ya da </p>
          <div className="login__social-btn">
            <SocialButton buttonStyle={googleStyle} />
            <SocialButton buttonStyle={githubStyle} />
            <SocialButton buttonStyle={facebookStyle} />
          </div>
          <div className="login__footer">
            <p className="login__dont">Hesabınız yok mu?</p>
            <Link className="login__register" to={"/register"}>
              <p>Ücretsiz Kaydolun.</p>
            </Link>
          </div>
        </div>
        <div className="login__image">
          <div className="login__login-image"></div>
        </div>
      </div>
    );
  }
}
