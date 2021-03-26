import React, { Component } from "react";
import "./style.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
class CardNota extends Component {
  delete() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_header">
          <h3 className="card-nota_title">{this.props.title}</h3>
          <h4>{this.props.category}</h4>
          <DeleteSVG onClick={this.delete.bind(this)} />
        </header>
        <p className="card-nota_text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota;
