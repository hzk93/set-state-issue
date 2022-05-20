import React, { Component } from 'react';
import './App.css';
import ScoreKeeper from './ScoreKeeper';


class App extends Component{
  render(){
    return(
      <div className="App">
      <h1>Hello I am in App!!!!</h1>
      <ScoreKeeper/>
      </div>
    )
  }
}

export default App;