import React, {useState, createContext} from 'react'

export const VideoGameContext = createContext()

export const VideoGameProvider = props => {
    const [videoGames, setVideoGames] = useState([]);
    
    return (
        <VideoGameContext.Provider value={[videoGames, setVideoGames]}>
            {props.children}
        </VideoGameContext.Provider>
    )
};

