import React, { Component } from 'react';

import './App.css';
import TodoComponent from './components/todo.js'

 let mycheese={ name:'monzirella', quantity: 'extra cheese',price:350 }
  
class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoComponent cheese={mycheese}/>
        </div>
         
    );
  }
}
export default App;
