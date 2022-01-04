import React, { Component } from "react";
import Field from "../Field/field";
import Button from "../Button/button";
import "./index.css";

export default class registerForm extends Component {
  render() {
    return (
      <div className="register-content">
        <div className="register-form">
          <span className="register-form__title">Kayıt Ol</span>
          <Field label="Ad Soyad" type="text" placeholder="Ad Soyad" />
          <Field label="Email" type="text" placeholder="username@gmail.com" />
          <Field label="Şifre" type="password" placeholder="Şifre" />
          <Field
            label="Şifre Tekrarı"
            type="password"
            placeholder="Şifre Tekrarı"
          />
          <Button buttonName="Kaydol" />
        </div>
        <div className="register__image">
          <div className="register__register-image"></div>
        </div>
      </div>
    );
  }
}
