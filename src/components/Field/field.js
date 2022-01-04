import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default class field extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { label, type, placeholder, labelBottom, onChange } = this.props;
    return (
      <div className="field">
        <div className="field__text">{label}</div>
        <input
          className="field__input"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        <Link className="field__text-bottom" to={"/forgot-password"}>
          <span>{labelBottom ? labelBottom : ""}</span>
        </Link>
      </div>
    );
  }
}
