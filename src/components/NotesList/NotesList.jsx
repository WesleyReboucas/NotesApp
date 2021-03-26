import React, { Component } from "react";
import CardNota from "../NoteCard";
import "./style.css";
class NotesList extends Component {
 
  constructor(){
    super();
    this.state = {notes:[]}
    this._newNotes = this._newNotes.bind(this);
  }
  componentDidMount(){
    this.props.notes.subscribe(this._newNotes);
  }
  componentWillUnmount(){
    this.props.notes.unsubscribe(this._newNotes);
  }
  _newNotes(notes){
    this.setState({...this.state,notes})
  }

  render() {

    return (
      <ul className="list-notes">
        {this.state.notes.map((nota, index) => {
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
