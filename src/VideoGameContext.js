import React, {useState, createContext} from 'react'

export const VideoGameContext = createContext()

export const VideoGameProvider = props => {
    const [videoGames, setVideoGames] = useState([{id: 0, title: "Test"}]);
    
    return (
        <VideoGameContext.Provider value={[videoGames, setVideoGames]}>
            {props.children}
        </VideoGameContext.Provider>
    )
};

