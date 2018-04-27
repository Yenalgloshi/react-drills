import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      spells: "",
      baseUrl: 'http://dnd5eapi.co/api/'
    }
  }

  componentDidMount(){
    axios.get(`${this.state.baseUrl}spells/110`).then(res => {
      this.setState({spells: res.data})
    })
  }
  render() {
    // The below if statement only maps over the classes array if there is data on state
    // and puts the classes name element on the classesDisplay variable.
    let classesDisplay = [];
    if(this.state.spells){
      classesDisplay = this.state.spells.classes.map((e, i) => <p key={i}>{e.name}</p>)
    }  
    else{null}

    return (
      <div className="App">
        <h1>Name: {this.state.spells.name}</h1>
        <p>Duration: {this.state.spells.duration}</p>
        <p>Range: {this.state.spells.range}</p>
        <p>Level: {this.state.spells.level}</p>
        {/* {this.state.stuff ? <p>Class: {this.state.stuff.classes[0].name}</p> : null}  */}
        {/* Below is a ternary that checks to see is state has data on it */}
        {this.state.spells ? <h3>Classes:</h3> : null} 
        {classesDisplay}
      </div>
    );
  }
}

export default App;
