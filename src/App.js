import React, { Component } from "react";
import NotesList from "./components/NotesList";
import RegistrationForm from "./components/RegistrationForm";
import CategoryList from "./components/CategoriesList";
import "./assets/App.css";
import "./assets/index.css";
import Categories from "./dados/Categories";
import ArrayNotes from "./dados/Notes";
class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new ArrayNotes();
    
  }

  render() {
    return (
      <section className="content">
        <RegistrationForm
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className="content-main">
          <CategoryList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <NotesList
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            notas={this.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
