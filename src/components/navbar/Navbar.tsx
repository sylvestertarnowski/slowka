import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';

interface P {
  menu?: string;
  create?: string;
  learn?: string;
}

export const Navbar: React.FC<P> = ({ menu, create, learn }) => {
  const history = useHistory();

  return (
    <nav className="Navbar">
      <ul>
        <li>
          <button onClick={() => history.goBack()}>
            <span role="img" aria-label="go back">
              ⬅️
            </span>
          </button>
        </li>
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
