import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(){
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

handleChanges( filter ){
  this.setState({ filterStr: filter })
}

  render() {

    var findFood = this.state.food.filter ((e,i) => {
      return e.includes( this.state.filterStr ); // includes() method determines if array has a certain element
      }).map((e, i) => {
        return <h2 key={ i }>{ e }</h2>
      })
    
    return (
      <div className="App">
        <input onChange={ (e) => this.handleChanges( e.target.value) } type="text" />
        { findFood }
      </div>
    );
  }
}

export default App;
