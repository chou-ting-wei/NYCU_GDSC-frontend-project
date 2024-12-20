import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img 
          src="icon.webp" 
          alt="Logo" 
          style={{ height: "24px", width: "24px", marginRight: "10px" }} 
        />
        <Link to="/">NYCU GDSC Frontend Training Program</Link>
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
