import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
  
    this.state = {
      food:[
         'spaghetti'
        ,'ice cream'
        ,'sushi'
        ,'bologna'
        ,'cheese'
      ]
    }
  }
  
  
  render() {

    var displayFood = this.state.food.map ((e,i) => {
      return (
        <h2 key={ i }>{ e }</h2>
      )
    })

    return (
      <div className="App">
        { displayFood }        
      </div>
    );
  }
}

export default App;
