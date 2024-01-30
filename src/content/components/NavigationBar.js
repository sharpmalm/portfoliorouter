import React from 'react';
import { Link } from "react-router-dom";
import './Components.css';

const NavigationBar = () => {
  return (
    <nav className='navbar-links'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </nav>
  );
}

export default NavigationBar;