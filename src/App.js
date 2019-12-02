import React, { Component } from "react";
import unsplash from "./api/unsplash";
import "./App.css";
import { SearchBar } from "./components";
import { ImageList } from "./components";

class App extends Component {
  state = {
    Results: [],
    index: 0
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
      }
    );

    this.setState({ Results: response.data.results });
  };
  nextImages = event => {
    event.preventDefault();
    let { index } = this.state;
    const { Results } = this.state;
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

  render() {
    console.log(this.state.index);
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />

        <ImageList index={this.state.index} Results={this.state.Results} />
        <button onClick={e => this.previousImage(e)}>{"<"}</button>
        <button onClick={e => this.nextImages(e)}>{">"}</button>
      </div>
    );
  }
}

export default App;
