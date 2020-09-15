import React from 'react';

const Game = ({title,releaseDate,cover,genres}) => {

    const addToPlayed = () => {
       const localData = localStorage.setItem("Title", JSON.stringify(title))
       console.log(JSON.parse(localData))
    };
    return(

        <div className='page-results'>
            <h3>{title}</h3>
            <p>Released on {releaseDate}</p>
            <p>{genres}</p>
            <img src={cover} />
            <button className="add-btn" onClick={addToPlayed}>Add to Played</button>
        </div>
    );
}

export default Game;