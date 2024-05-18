import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './redux/moviesSlice';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Watchlist from './components/Watchlist/Watchlist';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies('star wars'));
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Carousel} />
          <Route path="/movies" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/watchlist" component={Watchlist} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
