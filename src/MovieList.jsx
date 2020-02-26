import React, { Component } from 'react';
import Movie from './Movie';

export default class MovieList extends Component {
  render() {
    const { likedMovies, movies } = this.props;

    return (
      <div>
        {Object.entries(movies).map(([key, movie]) => {
          const likedByUsers = likedMovies[movie.id];
          return <Movie key={key} movie={movie} likedByUsers={likedByUsers} />;
        })}
      </div>
    );
  }
}
