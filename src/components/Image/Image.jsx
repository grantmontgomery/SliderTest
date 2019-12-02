import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, alt } = this.props;
    return (
      <div className="image">
        <img src={url} alt={alt} />
      </div>
    );
  }
}

export default Image;
