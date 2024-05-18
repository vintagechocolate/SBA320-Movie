import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Movie Mania</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </nav>
  );
}

export default Navbar;
