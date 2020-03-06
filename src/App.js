import React from 'react';
import logo from './logo.svg';
import './App.css';

import ItemList from './ItemList';
import DeleteItem from './DeleteItem';
import CreateItem from './CreateItem';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  addItem = value => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateItem addItem={this.addItem} />
        <DeleteItem
          deleteLastItem={this.deleteLastItem}
          noItemsFound={this.noItemsFound}
        />
        <ItemList items={items} />
      </div>
    );
  }
}

export default App;
