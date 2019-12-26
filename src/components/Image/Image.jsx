import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, alt } = this.props;
    return (
      <div className="card-wrapper">
        <div className="card-inner">
          <div className="flip-front">
            <img src={url} alt={alt} />
          </div>
        </div>
        <div className="flip-back">
          <h1>Cool Card</h1>
          <p>Bruh</p>
          <p>uhhh</p>
        </div>
      </div>
    );
  }
}

export default Image;
