import React from 'react';
import { getStorage } from '../../../services/storageService';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../config';
import SearchBar from '../SearchBar/SearchBar';
import FourColGrid from '../FourColGrid/FourColGrid';
import MovieThumb from '../MovieThumb/MovieThumb';

const Favourites = () => {
  let movies = getStorage('favourites');

  return (
		<div className="rmdb-home-grid">
			<SearchBar callback= {this.searchItems} />
			<FourColGrid
			header={'Favourite Movies'} >
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
  )
}

export default Favourites;
