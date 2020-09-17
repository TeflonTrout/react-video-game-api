import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import axios from 'axios';
import './App.css';
import Game from './Game';
import Nav from './Nav';

function App() {
  const apiUrl = `https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added`;

  const [search, setSearch] = useState('');
  const [games, setGames] = useState([]); 
  const [query, setQuery] = useState('');

  useEffect(() => {
    getGames();
  }, [query]);

  const getGames = async () => {
    fetch(`https://api.rawg.io/api/games?page_size=5&search=${query}`)
      .then (res => res.json())
      .then(
        (result) => {
          setGames(result.results);
          console.log(result.results);
        }
      )
    }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <Router>
    <div className="App">
      <Nav />
      <form onSubmit={getSearch}>  
        <h1 className='search-head'>VIDEO GAME SEARCH</h1>
        <input className='input-box' type='text' placeholder='Search' value={search} onChange={updateSearch}/>
        <button className='submit-button' type="submit">Search</button>
        {games.map(results => (
          <Game
          key={results.id}
          title={results.name}
          releaseDate={results.released}
          cover={results.background_image}
          />
        ))}
      </form>
    </div>
    <div>
      
    </div>
    </Router>
  );
}

export default App;
