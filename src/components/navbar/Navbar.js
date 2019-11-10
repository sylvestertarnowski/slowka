import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
