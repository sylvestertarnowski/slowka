import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li></li>
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
