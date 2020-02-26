import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  
  constructor(props){
    super(props)
    
    const liked = profiles.reduce((acc, profile) => {
    const fav = profile.favoriteMovieID;
      console.log(fav);
    if(acc[fav]){
      console.log(acc, fav, acc[fav].users)
      acc[fav].users.push(users[profile.userID])
    }else{
      acc[fav] = {users: [users[profile.userID]]}
    }
    console.log(acc)
    return acc;
  }, {});
  console.log(liked)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		{Object.entries(movies).map(([key, movie]) => {
          console.log(movie)
          const likedByUsers = this.liked[movie.id];
          return <div>
            <h2>{movie.name}</h2>
          
          {
            likedByUsers ?
              <div><p>Liked By:</p>
              <ul>
                {likedByUsers.users.map(user => <li>{user.name}</li>)}                 
            </ul></div>
            :
              <p>None of the current users liked this movie</p>
            
          }
          
          </div>
        })}
      </div>
    );
  }
}

export default App;
