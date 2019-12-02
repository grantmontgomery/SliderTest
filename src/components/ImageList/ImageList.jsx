import React, { Component } from "react";
import { Image } from ".././Image";
import "./ImageList.css";

class ImageList extends Component {
  constructor(props) {
    super(props);
  }

  imagesRender = () => {
    if (this.props.Results.length > 0) {
      return (
        <div className="image-slider active-slide">
          <div
            className="image-wrapper"
            style={{
              transform: `translateX(-${this.props.index *
                (100 / this.props.Results.length)}%)`
            }}
          >
            {this.props.Results.map(({ alt_description, urls, id }) => {
              return (
                <Image
                  url={urls.regular}
                  alt={alt_description}
                  key={id}
                  id={id}
                ></Image>
              );
            })}
          </div>
        </div>
      );
    }
  };

  render() {
    console.log(this.state);
    return <div className="image-list">{this.imagesRender()}</div>;
  }
}

export default ImageList;
