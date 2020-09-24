import React, {useState, useContext} from 'react';
import { VideoGameContext } from './VideoGameContext';

const Game = ({title,releaseDate,cover,genres}) => {
    const [videoGames, setVideoGames] = useContext(VideoGameContext)
    
    function addGame() {
        setVideoGames(videoGames => [...videoGames, {id: (Date.now()), title: title}])
        console.log(videoGames)
    }

    return(
        <div className='page-results'>
            <h3>{title}</h3>
            <p>Released on {releaseDate}</p>
            <p>{genres}</p>
            <img src={cover} />
            <button className='add-btn' onClick={addGame}>Add {title}</button>
        </div>
    );
}

export default Game;