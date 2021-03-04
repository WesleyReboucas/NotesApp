import React, { Component } from "react";
import "./style.css";

class CardNote extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-note_header">
          <h3 className="card-nota_title">{this.props.title}</h3>
        </header>
        <p className="card-nota_text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNote;
