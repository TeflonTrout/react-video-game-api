import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    
    return(
        <div className="navbar">
            <h1>Video Game Search</h1>
            <div className="links">
                <Link to='/' style={{ textDecoration: 'none' }}><h3>Home</h3></Link>
                <Link to='/list' style={{ textDecoration: 'none' }}><h3>My Games</h3></Link>
            </div>
        </div>
    );
}

export default Nav;