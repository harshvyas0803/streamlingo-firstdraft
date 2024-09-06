import React from 'react';
import heroimg from '../images/hero-img.png';
import './Navbar.css';
import DateTimeDisplay from './DateTimeDisplay';


const Navbar = () => {
  return (
    <div className="main-container">
      <img src={heroimg} alt="Hero Image" className="hero-image" />
<DateTimeDisplay/>

    </div>
  );
};

export default Navbar;
 