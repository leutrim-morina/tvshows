import React, { useState } from 'react'
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  }

  return (
    <nav>
    <ul>
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-toggle" onClick={toggle}>
          <a id="navicon" href="#">☰</a>
        </a>
        <div className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <a href="/" className="navbar-item">Home</a>
          <a href="/tvshows" className="navbar-item">TV Shows</a>
          <a href="/about" className="navbar-item">About us</a>
          <a href="/privacypolicy" className="navbar-item">Privacy and Policy</a>
        </div>
      </div>
    </nav>
    </ul>
  </nav>
  )
};

export default Navbar