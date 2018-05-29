import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OlgaList from './OlgaList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [1, 2, 3, 4, 5],
      elements2:['a','b','c','d']
    };

    //bind pozwala przypiąć funkcje do .this
    this.updateInput = this.updateInput.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  //konwencja
  updateInput(event) {
    let validationError = this.getValidationError(event.target.value);

    if (validationError) {
      this.setState({
        ...this.state,
        validationError: validationError,
        elementValue: event.target.value
      })
    } else {
      this.setState({
        ...this.state,
        validationError: "",
        elementValue: event.target.value
      })
    }
  }

  addListItem(event) {
    let newElement = this.state.elementValue;
    let validationError = this.getValidationError(newElement);

    if (validationError) {
      this.setState({
        ...this.state,
        validationError: validationError
      })
    } else {
      let elements = this.state.elements;
      elements.push(newElement);

      this.setState({
        ...this.state,
        elements: elements,
        elementValue: "",
      })
    }
  }

  getValidationError(value) {
    if (!value) {
      return "empty Value not allowed";
    }else if(value.includes("dupa")){
      return "dupa jest klasyką js";
    }else if (value.length > 5 ){
      return " ho ho za duzo";
    }


  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-6 mx-auto">
            {//nasze twory
            }
            <OlgaList source={this.state.elements} sortDirection={true}/>
            <br />
            <OlgaList source={this.state.elements2} sortDirection={true}/>
            <br />
            <input className="form-control" value={this.state.elementValue} type="text" onChange={this.updateInput} />
            {this.state.validationError &&
              <div style={{ color: "red" }} className="float-left">
                *{this.state.validationError}
              </div>
            }

            {
              //predefinowane
            }
      
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
          <button className="btn btn-primary" type="button" onClick={this.addListItem}>dodaj</button>
          </div >
        </div >
      </div >
    );
  }
}

export default App;
