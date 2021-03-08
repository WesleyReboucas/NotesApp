import React, { Component } from "react";

import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
import "./style.css";

class CardNote extends Component {
  delete() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }

  render() {
    return (
      <section className="card-note">
        <header className="card-note_header">
          <h3 className="card-note_title">{this.props.title}</h3>
          <DeleteSVG onClick={this.delete.bind(this)} />
        </header>
        <p className="card-note_text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNote;
