import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scoreboard from './Scoreboard';
import Game from './Game';

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
    ...this.randomize(),
  };

  randomize() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    return {
      value1,
      value2,
      value3,
      proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3,
    };
  }

  submitAnswer = answer => {
    const { value3, value2, value1, proposedAnswer } = this.state;
    const correct = value1 + value2 + value3 === proposedAnswer;
    if (answer === correct) {
      this.setState(prevState => ({
        numQuestions: prevState.numQuestions + 1,
        numCorrect: prevState.numCorrect + 1,
        ...this.randomize(),
      }));
    } else {
      this.setState(prevState => ({
        numQuestions: prevState.numQuestions + 1,
        ...this.randomize(),
      }));
    }
  };

  render() {
    const {
      numCorrect,
      numQuestions,
      value1,
      value2,
      value3,
      proposedAnswer,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game
          equation={`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
          submitAnswer={this.submitAnswer}
        />
        <Scoreboard numCorrect={numCorrect} numQuestions={numQuestions} />
      </div>
    );
  }
}

export default App;
