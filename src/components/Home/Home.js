import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import './Home.css';

class Home extends Component {

    state = {
        movies: [],
        searchTerm: ''
    }

//life cycle method
componentDidMount() {
    if (localStorage.getItem('HomeState') ) {
        const state = JSON.parse(localStorage.getItem('HomeState'));
        this.setState({ ...state })
    } else{
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

    this.fetchItems(endpoint);
    }
}

searchItems = (searchTerm) => {
    // console.log(searchTerm);
    let endpoint = '';
    this.setState({
        movies: [],
        searchTerm
    })

    if (searchTerm === '') {
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
    } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`; 
    }

    //grab the movies 
    this.fetchItems(endpoint);

}

fetchItems = async endpoint => {

    const { movies, heroImage, searchTerm } = this.state;
    const result = await (await fetch (endpoint) ).json();

    this.setState( {
        //aapend the old movies with new one with spread es6 syntax
        movies: [...movies, ...result.results],
        // heroImage: heroImage || result.results[0],
    }), ()=> {
        if (searchTerm === "" ) {
        localStorage.setItem('HomeState', JSON.stringify(this.state));
        }
    }
}

    render() {
        // destructuring the state
        const { movies, heroImage, searchTerm } = this.state
        return (
            <div className="rmdb-home">
                {/* {heroImage ? 
                <div>
                <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title = {heroImage.original_tile}
                text = {heroImage.overview} />
                <SearchBar callback= {this.searchItems} />
                </div> : null } */}
                <SearchBar callback= {this.searchItems} />
                <div className="rmdb-home-grid">
                    <FourColGrid
                    header={searchTerm ? 'Search Result' : 'Popular Movies'}
                    >
                    {movies.map ( (element, i) => {
                        return <MovieThumb
                        key={i}
                        clickable={true}
                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                        movieId={element.id}
                        movieName={element.original_title}
                        />
                    } )} 
                    </FourColGrid>
                </div>
            </div>
        )
    }
}


export default Home;