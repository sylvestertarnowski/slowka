import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li><Link to="/learn">Learn</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;