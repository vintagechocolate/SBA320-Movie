import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWatchlist } from '../../redux/watchlistSlice';
import './Watchlist.css';

function Watchlist() {
  const watchlist = useSelector(state => state.watchlist);
  const dispatch = useDispatch();

  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in watchlist</p>
      ) : (
        watchlist.map(movie => (
          <div key={movie.imdbID} className="watchlist-item">
            <Link to={`/movie/${movie.imdbID}`}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} />
            </Link>
            <button onClick={() => dispatch(removeFromWatchlist(movie))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlist;
