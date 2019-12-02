import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, alt } = this.props;
    return (
      <div>
        <img src={url} alt={alt} />
      </div>
    );
  }
}

export default Image;
