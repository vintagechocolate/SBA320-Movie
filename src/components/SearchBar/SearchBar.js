import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../redux/moviesSlice';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(getMovies(query));
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
