import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                
                <Link to="/">
                {/* <img className="rmdb-logo" src="./images/movie-logo-1.png" alt="rmdb-logo" /> */}
                <h1 className="rmdb-logo"> Moviezilla</h1>
                </Link>
                <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt="rmdb-logo" />

            </div>
        </div>
    )
}

export default Header;