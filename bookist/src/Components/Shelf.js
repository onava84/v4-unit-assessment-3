import React, { Component } from "react";
import "./Shelf.css";

class Shelf extends Component {
  constructor() {
    super();
  }

  render() {
    const shelfMap = this.props.shelf.map((e, i, a) => {
      return <p className="shelf-text">{e}</p>;
    });
    return (
      <div className="shelf-div">
        <h3 className="shelf-title">Your Shelf</h3>
        <button onClick={e => this.props.clearShelf()}>clear shelf</button>
        {shelfMap}
      </div>
    );
  }
}

export default Shelf;
