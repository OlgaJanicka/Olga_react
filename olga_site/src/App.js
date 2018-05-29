import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OlgaList from './OlgaList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [1, 2, 3, 4, 5]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-6 mx-auto">
            
            <OlgaList source={this.state.elements} sortDirection={true} />
            <br />
          </div>
        </div>
        
      </div >
    );
  }
}

export default App;
