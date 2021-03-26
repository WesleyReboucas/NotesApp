import React, { Component } from "react";
import "./style.css";
class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Sem category";
    this.state = {categories:[]}

    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount(){
    this.props.categories.subscribe( this._newCategories);
    
  }

  componentWillUnmount(){
    this.props.categories.unsubscribe( this._newCategories);
  }
  _newCategories(categories){
    this.setState({...this.state, categories})
  }
  _handleCategoryChange(event){
    event.stopPropagation();
    this.category = event.target.value;
  }
  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className="form-registration" onSubmit={this._createNote.bind(this)}>
        <select
          onChange={this._handleCategoryChange.bind(this)}
          className="form-registration_input"
        >
          <option>Sem category</option>

          {this.state.categories.map((category, index) => {
            return <option key={index} >{category}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-registration_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-registration_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form-registration_input form-registration_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
