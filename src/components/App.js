import { Component } from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./SearchBar";
import "./App.css";
import ImageList from "./ImageList";

class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="">
        <Searchbar onSubmit={this.onSearchSubmit} />
        <div className="flex justify-center -my-10 text-slate-500 text-sm">
          Found: {this.state.images.length} images
        </div>
        <br />
        <br />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
