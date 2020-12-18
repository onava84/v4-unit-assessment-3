import React, { Component } from "react";
import Header from "./Components/Header";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookList from "./Components/BookList";
import Shelf from "./Components/Shelf";
import data from "./Components/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [...data],
      shelf: [],
    };
    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  addToShelf(index) {
    this.setState({
      shelf: [...this.state.shelf, this.state.books[index].title],
    });
  }

  clearShelf() {
    this.setState({
      shelf: [],
    });
  }

  filterBooks(input) {
    const filteredBooks = this.state.books.filter(element => {
      if (element.title.includes(input) || element.author.includes(input)) {
        return element;
      }
    });
    this.setState({
      books: filteredBooks,
    });
  }

  reset() {
    this.setState({
      books: [...data],
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-container">
          <div className="search">
            <SearchBar filterBooks={this.filterBooks} reset={this.reset} />
          </div>
          <div className="two-columns">
            <div className="book-list-app">
              <BookList books={this.state.books} addToShelf={this.addToShelf} />
            </div>
            <div className="shelf">
              <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
