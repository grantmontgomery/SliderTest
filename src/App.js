import React, { Component } from "react";
import unsplash from "./api/unsplash";
import "./App.css";
import { SearchBar } from "./components";
import { ImageList } from "./components";

class App extends Component {
  state = {
    divided: [],
    Results: []
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
      }
    );
    const divided = [];
    for (let i = 0; i < response.data.results.length; i += 4) {
      i + 4 < response.data.results.length
        ? divided.push(response.data.results.slice(i, i + 4))
        : divided.push(response.data.results.slice(i));
    }
    this.setState({ divided: [...divided], Results: response.data.results });
  };

  render() {
    console.log(this.state.Results);
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />

        <ImageList Results={this.state.Results} divided={this.state.divided} />
      </div>
    );
  }
}

export default App;
