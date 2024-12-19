import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">GDSC Frontend</a>
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>
      </div>
      <div className={`navbar-collapse ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/#/FHH" className="nav-link">To-Do List</a></li>
          <li className="nav-item"><a href="/#/iris" className="nav-link">攝影作品集</a></li>
          <li className="nav-item"><a href="/#/Cy407" className="nav-link">Album Gallery</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
