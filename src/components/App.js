import { Component } from "react";
import axios from "axios";
import Searchbar from "./SearchBar";
import "./App.css";

class App extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      },
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="">
        <Searchbar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
