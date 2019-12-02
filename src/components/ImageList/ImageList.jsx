import React, { Component } from "react";
import { Image } from ".././Image";
import "./ImageList.css";

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  nextImages = event => {
    event.preventDefault();
    let { index } = this.state;
    const { Results } = this.props;
    if (index < Results.length - 1) {
      this.setState(() => ({ index: index + 1 }));
    }
  };

  previousImage = event => {
    event.preventDefault();
    let { index } = this.state;
    if (index > 0) {
      this.setState(() => ({ index: index - 1 }));
    }
  };

  imagesRender = () => {
    if (this.props.Results.length > 0) {
      const { alt_description, urls, id } = this.props.Results[
        this.state.index
      ];
      return (
        <Image
          url={urls.regular}
          alt={alt_description}
          key={id}
          id={id}
        ></Image>
      );
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="image-list">
        <button onClick={e => this.previousImage(e)}>{"<"}</button>
        {this.imagesRender()}

        <button onClick={e => this.nextImages(e)}>{">"}</button>
      </div>
    );
  }
}

export default ImageList;
