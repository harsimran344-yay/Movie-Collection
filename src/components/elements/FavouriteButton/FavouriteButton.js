import React, {useState, useEffect} from 'react';
import { checkItemInStorage, deleteItemFromStorage, addItemToStorage} from '../../../services/storageService';

const FavouriteButton = ({movie}) => {

  useEffect(()=> {
      setMovieIdx( checkItemInStorage(movie, 'favourites'));
  },[movie]);

  const [movieIdx, setMovieIdx] = useState(-1);

  const addToFavourites = (movie) => {
      setMovieIdx(addItemToStorage(movie, 'favourites'));
  }

  const removeFromFavourites = (movie) => {
      deleteItemFromStorage( checkItemInStorage(movie, 'favourites'), 'favourites' );
      setMovieIdx(-1);
  }

  return (
      <div>
          { movieIdx >= 0 ?
          <button
              onClick={() => {removeFromFavourites(movie) }}>
              Remove from Favourites
          </button> :
          <button
              onClick={() => {addToFavourites(movie)}}>
              Add to Favourites
          </button> }
      </div>
  );
}

export default FavouriteButton;
