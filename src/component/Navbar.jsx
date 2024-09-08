import React from 'react';
import heroimg from '../images/hero-img.png';
import './Navbar.css';
import DateTimeDisplay from './DateTimeDisplay';

const Navbar = () => {
  return (
    <div className="navbar-container">
    <div className="img-container">  <img src={heroimg} alt="Hero Image" className="hero-image" /></div>
    <div className="date-time">  <DateTimeDisplay /></div>
    </div>
  );
};

export default Navbar;
