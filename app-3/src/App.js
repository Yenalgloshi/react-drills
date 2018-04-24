import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      filterStrings:"",
      foods: ['milk', 'eggs', 'bread', 'cheese', 'butter', 'potatoes', 'meat']
    }
  }

  handleChange(filter){
    this.setState ({filterStrings: filter})
  }

  render(){
    let foodsToDisplay = this.state.foods.filter((e,i) => {
      return e.includes(this.state.filterStrings)
    }).map((e,i) => {
      return <h2 key={i}>{e}</h2>
    })
    return(
      <div className="App">
        <input onChange={ (e) => this.handleChange(e.target.value)} type="text"/>
        {foodsToDisplay}
      </div>
    )
  }
}

export default App;
