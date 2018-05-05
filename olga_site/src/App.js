import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OlgaList from './OlgaList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <OlgaList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
