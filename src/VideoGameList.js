import React, {useState, useContext} from 'react'
import {VideoGameContext} from './VideoGameContext'

function VideoGameList() {
    const [videoGames, setVideoGames] = useContext(VideoGameContext);

    const handleRemove = (e, id) => {
        e.preventDefault();
       const newVideoGames = videoGames.filter((game) => game.id !== id);
        return setVideoGames([...newVideoGames])
        console.log(videoGames)
    }

    return (
        <div className='gameList-page'>
            <h1>Games I've Played</h1>
            {videoGames.map(game => (
                <div className="playedGame" key={game.id}>
                    <h1>{game.title}</h1>
                    <button className='remove-btn' onClick={e => handleRemove(e, (game.id))}>X</button>
                </div>
            ))}
        </div>
    )
}

export default VideoGameList
