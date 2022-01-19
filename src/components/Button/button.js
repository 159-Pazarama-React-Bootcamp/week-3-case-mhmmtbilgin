/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./index.css";

export default class button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonName, onClick } = this.props;
    return (
      <div className="form-btn">
        <button onClick={onClick} className="form-btn__button">
          {buttonName}
        </button>
      </div>
    );
  }
}
