import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MessageInput extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };

  handleMessageChange = e => {
    this.setState({ input: e.target.value });
  };

  isDisabled = () => {
    return this.state.input === '';
  };

  submit = e => {
    e.preventDefault();
    this.props.addMessage(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;

    return (
      <div>
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={input}
            onChange={this.handleMessageChange}
          />
          <div className="input-group-append">
            <button
              className="btn submit-button"
              onClick={this.submit}
              disabled={this.isDisabled()}
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}
