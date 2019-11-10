import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import MyContext from '../context/Store';

const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <MyContext.Consumer>
            {context => {
              const { menu, create, learn } = context.state.translations[
                context.state.language
              ].navbar;
              return (
                <React.Fragment>
                  <li></li>
                  <li>
                    <Link to="/">{menu}</Link>
                  </li>
                  <li>
                    <Link to="/create">{create}</Link>
                  </li>
                  <li>
                    <Link to="/learn">{learn}</Link>
                  </li>
                </React.Fragment>
              );
            }}
          </MyContext.Consumer>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
