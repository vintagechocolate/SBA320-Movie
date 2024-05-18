import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../services/omdbApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../../redux/watchlistSlice';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const watchlist = useSelector(state => state.watchlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetchMovies(id);
      setMovie(response);
    };
    fetchMovie();
  }, [id]);

  const isInWatchlist = watchlist.some(m => m.imdbID === id);

  const handleWatchlist = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movie));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div className="movie-details">
      {movie ? (
        <>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
          <button onClick={handleWatchlist}>
            {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetails;
