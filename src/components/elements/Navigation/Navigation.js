import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = ( {movie} ) => {
    return (
        <div className="rmdb-navigation">

            <div className="rmdb-navigation-content">
              <p><NavLink to={'/'} exact>Home</NavLink></p>
              <p><NavLink to={'/about'}>About</NavLink></p>
              <p><NavLink to={'/your-movies'}>Your Movies</NavLink></p>
              <p><NavLink to={'/favourites'}>Favourites</NavLink></p>
            </div>

        </div>

    )
}
Navigation.propTypes = {
    movie: PropTypes.string
  }
export default Navigation;
