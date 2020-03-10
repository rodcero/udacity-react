import React, { Component } from 'react';

export default class UserList extends Component {
  state = {
    hide: false,
  };

  handleToggle = () => {
    this.setState(prev => {
      return { hide: !prev.hide };
    });
  };

  render() {
    const { users } = this.props;
    const { hide } = this.state;
    return (
      <div>
        <h1>User List:</h1>
        <button disabled={users.length < 1} onClick={this.handleToggle}>
          Toggle played
        </button>
        {users.map((u, i) => (
          <li key={i}>
            {u.username} played {hide ? '\\*' : u.played} games.
          </li>
        ))}
      </div>
    );
  }
}
