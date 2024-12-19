import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">GDSC Frontend</Link>
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>
      </div>
      <div className={`navbar-collapse ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">首頁</Link></li>
          <li className="nav-item"><Link to="/portfolio" className="nav-link">作品集</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
