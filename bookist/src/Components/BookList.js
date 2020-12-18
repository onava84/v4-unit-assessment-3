import React, { Component } from "react";
import "./BookList.css";

class BookList extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props.books[1].title);

    const booksMap = this.props.books.map((e, i, a) => {
      // return <div>{}</div>
      return (
        <div className="book-list" onClick={e => this.props.addToShelf(i)}>
          <img src={e.img} className="book-image" />
          <p className="book-text">
            {e.title} by {e.author}
          </p>
        </div>
      );
      console.log(e.title);
    });

    return <div className="books-map">{booksMap}</div>;
  }
}

export default BookList;
