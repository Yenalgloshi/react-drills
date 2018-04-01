import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "https://geekandsundry.com/wp-content/uploads/2017/02/New-to-DD.jpg" } />
      </div>
    );
  }
}

export default App;
