import React, { Component } from 'react';

export default class Movie extends Component {
  render() {
    const { movie, likedByUsers } = this.props;

    return (
      <div>
        <h2>{movie.name}</h2>
        {likedByUsers ? (
          <div>
            <i>Liked By:</i>
            <ul>
              {likedByUsers.map(user => (
                <li>{user.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>None of the current users liked this movie</p>
        )}
        <br></br>
      </div>
    );
  }
}
