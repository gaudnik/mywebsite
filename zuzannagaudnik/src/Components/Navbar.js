import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className='navbar__list'>
      <li className='navbar__element'>
        <Link to="/">Home</Link>
      </li>
      <li className='navbar__element'>
        <Link to="/about">About</Link>
      </li>
      <li className='navbar__element'>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navbar;
