import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import axios from 'axios';
import './App.css';
import {VideoGameProvider} from './VideoGameContext'
import Game from './Game';
import VideoGameList from './VideoGameList';
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
    setSearch("")
  }

  return (
    <VideoGameProvider>
      <Router>
        <Switch>
          <div className="App">
            <Route path='/' exact>  
              <div className='home-page'>    
              <Nav />
              <form onSubmit={getSearch}>  
              <div className='search-bar'>
                <input className='input-box' type='text' onFocus={e => e.target.placeholder=""} placeholder='Game Title' value={search} onChange={updateSearch}/>
                <button className='submit-btn' type="submit">Search</button>
              </div>
                {games.map(game => (
                  
                  <Game
                  key={game.id}
                  title={game.name}
                  releaseDate={game.released}
                  cover={game.background_image}
                  />
                ))}
               </form>
               </div>
             </Route>
            <Route path='/list'>
              <Nav />
              <VideoGameList />
            </Route>
           </div>
          </Switch>
        </Router>
    </VideoGameProvider>
  );
}

export default App;
