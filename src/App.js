import React, { Component } from 'react';
import './App.css';

import NumberContext from './context';

class App extends Component {
  state = {
    number: 0,
  }

  increment = () => {
    this.setState({
      number: this.state.number + 1,
    });
  }

  decrement = () => {
    this.setState({
      number: this.state.number - 1,
    });
  }

  render() {
    return (
      <div>
        <NumberContext.Provider value={ this.state.number }>
          <Counter />
        </NumberContext.Provider>
        <button onClick={ this.increment }>+</button>
        <button onClick={ this.decrement }>-</button>
      </div>
    );
  }
}

function Counter(props) {
  return (
    <NumberContext.Consumer>{ val => <span>{ val }</span> }</NumberContext.Consumer>
  );
}

export default App;
