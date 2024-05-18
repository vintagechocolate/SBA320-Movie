import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/moviesSlice';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.list);

  useEffect(() => {
    dispatch(fetchMovies('star wars'));
  }, [dispatch]);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <div className="movie-list-container">
        {movies && movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.imdbID} className="movie-item">
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
