import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'January 25, 2019',
      newDeadline : ''
    }
  }

  changeDeadline(){
    console.log('state' , this.state )
    this.setState( { deadline : this.state.newDeadline})

  }

  render() {
    return (
      <div className="App">
        <div>
          <div className="App-title">{this.state.deadline}</div>
          <Clock
            deadline = {this.state.deadline}
          />
        </div>
        <input 
          id= 'input'
          placeholder='new date'
          onChange = {event => this.setState({ newDeadline: event.target.value})}
          />
        <button onClick={ () => this.changeDeadline() }>Press it</button>
      </div>
    );
  }
}

export default App;
