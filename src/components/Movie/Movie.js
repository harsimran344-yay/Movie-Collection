import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
// import FourColGrid from '../elements/FourColGrid/FourColGrid';
import './Movie.css';


class Movie extends Component {
    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false
        
    }
    componentDidMount() {

        const { movieId } = this.props.match.params;
        //local storage
        if ( localStorage.getItem(`${movieId}`) ) {
            const state = JSON.parse(localStorage.getItem(`${movieId}`));
            this.setState({ ...state });

        }
        this.setState({ loading: true })
        //fetch the movie
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint);
    }

    fetchItems = async endpoint => {
        
        const { movieId } = this.props.match.params;
        const result = await (await fetch(endpoint)).json();
        if (result.status_code) {
            this.setState({ loading: false });
        }else {
            this.setState({ movie: result })
            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

            const creditsResult = await (await fetch(creditsEndpoint)).json();

            const directors = creditsResult.crew.filter ( (member) => member.job === "Director" );

            this.setState({
                actors: result.cast,
                directors,
                loading:false
            }, () => {
                localStorage.setItem(`${movieId}`, JSON.stringify(this.state));
            })
        }
    }

    render() {

        const { movieName } = this.props.location;
        const { movie, directors } = this.state;
        // console.log(this.state.movie)
        // debugger;
        return (
            <div className="rmdb-movie">
                {movie ? 
                <div>
                    <MovieInfo movie={movie} directors={directors} />
                    <MovieInfoBar time={movie.runtime} />
                </div>
                : null }    
            </div>
        )
    }
}


export default Movie;