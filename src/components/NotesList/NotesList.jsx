import React, { Component } from "react";
import CardNota from "../NoteCard";
import "./style.css";
class NotesList extends Component {
 
  constructor(){
    super();
    this.state = {notas:[]}
    this._newNotes = this._newNotes.bind(this);
  }
  componentDidMount(){
    this.props.notas.subscribe(this._newNotes);
  }
  componentWillUnmount(){
    this.props.notas.unsubscribe(this._newNotes);
  }
  _newNotes(notas){
    this.setState({...this.state,notas})
  }

  render() {

    return (
      <ul className="list-notes">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="list-notes_item" key={index}>
              
              <CardNota 
              index={index}
              deleteNote={this.props.deleteNote}
              title={nota.title} 
              text={nota.text}
              category={nota.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
