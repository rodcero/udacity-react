import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    message: '',
  };

  onMessageChange = message => {
    this.setState({ message });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={message}
            onChange={event => this.onMessageChange(event.target.value)}
          />
          <p className="echo">Echo:</p>
          <p>{message}</p>
        </div>
      </div>
    );
  }
}

export default App;
