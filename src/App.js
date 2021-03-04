import React, { Component } from "react";
import NoteLists from "./components/NoteLists";
import RegistrationForm  from "./components/RegistrationForm";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  createNote(title, text) {
    const novaNota = { title, text };
    const newArrayNotes = [...this.state.notes, novaNota];
    const newState = {
      notes: newArrayNotes,
    };
    this.setState(newState);
  }
  render() {
    return (
      <section className="content">
        <RegistrationForm  createNote={this.createNote.bind(this)} />
        <NoteLists notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
