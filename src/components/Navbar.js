import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar" data-aos="fade-down">
    <div className="container nav-container">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
