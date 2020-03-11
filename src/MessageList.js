import React from 'react';
import PropTypes from 'prop-types';

export default function MessageList({ messages, user }) {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === user.username
              ? 'message sender'
              : 'message recipient'
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
}

MessageList.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};
