import React from 'react';
import './Navbar.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav className="Navbar">
        <ul>
          <li>
            <Link to="/">menu</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
          <li>
            <Link to="/learn">learn</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
