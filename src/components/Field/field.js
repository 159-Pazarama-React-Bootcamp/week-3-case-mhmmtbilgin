import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { label, type, placeholder, labelBottom } = this.props;
    return (
      <div className="field">
        <div className="field__text">{label}</div>
        <input className="field__input" type={type} placeholder={placeholder} />
        <span className="field__text-bottom">
          {labelBottom ? labelBottom : ""}
        </span>
      </div>
    );
  }
}
