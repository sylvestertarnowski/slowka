import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = ({ menu, create, learn }) => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/menu">{menu}</Link>
        </li>
        <li>
          <Link to="/create">{create}</Link>
        </li>
        <li>
          <Link to="/learn">{learn}</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  menu: PropTypes.string,
  create: PropTypes.string,
  learn: PropTypes.string
};

Navbar.defaultProps = {
  menu: 'Menu',
  create: 'Create',
  learn: 'Learn'
};

export default Navbar;
