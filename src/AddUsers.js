import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddUsers extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  state = {
    user: {
      firstname: '',
      lastname: '',
      username: '',
      played: '0',
    },
    duplicate: false,
  };

  handleInputChange = (field, value) => {
    this.setState(prev => ({ user: { ...prev.user, [field]: value } }));
  };

  addUser = () => {
    if (this.props.addUser(this.state.user)) {
      this.setState({
        user: {
          firstname: '',
          lastname: '',
          username: '',
          played: '0',
        },
        duplicate: false,
      });
    } else {
      this.setState({ duplicate: true });
    }
  };

  validate = () => {
    const { firstname, lastname, username } = this.state.user;
    return firstname === '' || lastname === '' || username === '';
  };

  render() {
    const { user, duplicate } = this.state;

    return (
      <div>
        <div>
          First Name:
          <input
            onChange={ev =>
              this.handleInputChange('firstname', ev.target.value)
            }
            value={user.firstname}
          ></input>
        </div>
        <div>
          Last Name:
          <input
            onChange={ev => this.handleInputChange('lastname', ev.target.value)}
            value={user.lastname}
          ></input>
        </div>
        <div>
          User Name:
          <input
            onChange={ev => this.handleInputChange('username', ev.target.value)}
            value={user.username}
          ></input>
        </div>
        <button disabled={this.validate()} onClick={() => this.addUser()}>
          AddUser
        </button>
        {duplicate && (
          <div style={{ color: 'red' }}>
            Error: duplicate username, username already exist please try a
            different one.
          </div>
        )}
      </div>
    );
  }
}
