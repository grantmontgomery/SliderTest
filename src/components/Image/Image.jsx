import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: ""
    };
  }

  handleFlip = event => {
    event.preventDefault();
    const { animate } = this.state;
    animate === ""
      ? this.setState({ animate: "flip" })
      : this.setState({ animate: "" });
  };

  render() {
    const { url, alt } = this.props;
    return (
      <div
        className={`card-wrapper ${this.state.animate}`}
        onClick={this.handleFlip}
      >
        <div className="card-inner">
          <div className="flip-front">
            <img src={url} alt={alt} />
          </div>
          <div className="flip-back">
            <h1>Cool Card</h1>
            <p>Bruh</p>
            <p>uhhh</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
