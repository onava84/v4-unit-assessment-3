import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleClick() {
    this.props.filterBooks(this.state.input);
  }

  handleClear() {
    this.setState({
      input: "",
    });
    this.props.reset();
  }

  render() {
    return (
      <div className="search-bar-container">
        <input value={this.state.input} onChange={e => this.handleChange(e)} />
        <button
          className="search-button"
          // onClick={e => this.props.filterBooks(this.state.input)}
          onClick={e => this.handleClick()}
        >
          Search
        </button>
        <button className="clear-button" onClick={e => this.handleClear()}>
          Clear search
        </button>
      </div>
    );
  }
}
export default SearchBar;
