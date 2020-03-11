import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import PropTypes from 'prop-types';

export default class ChatWindow extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired,
  };

  render() {
    const { user, messages, addMessage } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessageList messages={messages} user={user} />
        <MessageInput addMessage={addMessage(user.username)} />
      </div>
    );
  }
}
