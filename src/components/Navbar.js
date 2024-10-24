// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Small Shop</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
};

export default Navbar;
