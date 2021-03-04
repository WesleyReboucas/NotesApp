import React, { Component } from "react";
import CardNote from "./../CardNote";
import "./style.css";

class NoteLists extends Component {
  render() {
    return (
      <ul className="notes-list">
        {this.props.notes.map((nota, index) => {
          return (
            <li className="notes-list_item" key={index}>
              <CardNote title={nota.title} text={nota.text} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteLists;
