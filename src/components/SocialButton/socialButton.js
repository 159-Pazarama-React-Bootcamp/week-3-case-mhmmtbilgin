import React, { Component } from "react";
import "./index.css";
export default class socialButton extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonStyle } = this.props;
    return (
      <div className="form-social">
        <div className="social-button" style={buttonStyle}></div>
      </div>
    );
  }
}
