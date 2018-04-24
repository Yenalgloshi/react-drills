import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      foods: ['milk', 'eggs', 'bread', 'cheese', 'butter', 'potatoes', 'meat']
    }
  }
  render(){
    let foodsDisplay = this.state.foods.map((e,i)=> {
      return <h2 key={i}>{e}</h2>
    })
    return(
      <div className="App">
        {foodsDisplay}
      </div>
    )
  }
}


export default App;