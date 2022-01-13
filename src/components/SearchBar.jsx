import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    term: "",
  };

  onFormSubmit(event) {
    event.preventDefault();
  }

  // put logic above this line
  render() {
    return (
      <form className="flex justify-center py-10" onSubmit={this.onFormSubmit}>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-56 rounded-lg text-md focus:outline-none"
          type="text"
          placeholder="Search for images"
          value={this.state.term}
          onChange={(e) => this.setState({ term: e.target.value })}
        />
        <p>{this.state.term}</p>
      </form>
    );
  }
}

export default Searchbar;
