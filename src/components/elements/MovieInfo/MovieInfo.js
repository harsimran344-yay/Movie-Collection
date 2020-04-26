// import React, { Component } from 'react';
import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../config';
// import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import PropTypes from 'prop-types';
import './MovieInfo.css';


const MovieInfo = ({movie, directors}) => {
    return (
        <div className="rmdb-movieinfo"
            // style={{background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000'}}
            >
            <div className="rmdb-movieinfo-content">

                <div className="rmdb-movieinfo-thumb">
                    <MovieThumb
                     image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : './images/no_image.jpg'}
                     clickable={false} />
                </div>
                <div className="rmdb-movieinfo-text">
                    <h1>{movie.title}</h1>
                    <h3>ABOUT</h3>
                    <p>{movie.overview}</p>
                    <h3>IMDB RATING</h3>
                    <div className="rmdb-rating">
                        <meter min="0" max="100" optimum ="100" low="40" high="70" value={movie.vote_average * 10} ></meter>
                        <p className="rmdb-score">{movie.vote_average}</p>
                    </div>
                   
                    <h3>Director:</h3>
                    {directors.map ( (element, i ) => {
                        return <p key= {i} className="rmdb-director">{element.name}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object,
    directors: PropTypes.array
  }
export default MovieInfo;