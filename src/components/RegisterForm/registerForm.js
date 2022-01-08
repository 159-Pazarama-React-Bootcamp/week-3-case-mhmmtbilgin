import React, { Component } from "react";
import Field from "../Field/field";
import Button from "../Button/button";
import "./index.css";
import axios from "axios";

export default class registerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  addRegister() {
    axios
      .post(`https://61c62e7dc003e70017b79a14.mockapi.io/api/users`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then(() => {
        alert("Kayıt başarılı");
      });
  }
  handleChange(changeObject) {
    this.setState(changeObject);
  }
  render() {
    return (
      <div className="register-content">
        <div className="register-form">
          <span className="register-form__title">Kayıt Ol</span>
          <Field
            label="Ad Soyad"
            type="text"
            placeholder="Ad Soyad"
            onChange={(e) => this.handleChange({ name: e.target.value })}
          />
          <Field
            label="Email"
            type="text"
            placeholder="username@gmail.com"
            onChange={(e) => this.handleChange({ email: e.target.value })}
          />
          <Field
            label="Şifre"
            type="password"
            placeholder="Şifre"
            onChange={(e) => this.handleChange({ password: e.target.value })}
          />
          <Field
            label="Şifre Tekrarı"
            type="password"
            placeholder="Şifre Tekrarı"
          />
          <Button onClick={() => this.addRegister()} buttonName="Kaydol" />
        </div>
        <div className="register__image">
          <div className="register__register-image"></div>
        </div>
      </div>
    );
  }
}
