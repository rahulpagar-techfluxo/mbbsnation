import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Camera, MapPin, Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="main-header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="contact-info">
            <a href={`tel:${content?.phone_number || "+919876543210"}`}><Phone size={16} /> {content?.phone_number || "+91 98765 43210"}</a>
            <span><MapPin size={16} /> Direct Admission Experts</span>
          </div>
          <div className="social-links">
            {content?.instagram_link && (
              <a href={content.instagram_link} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Camera size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      <nav className="navbar container">
        <Link to="/" className="logo">
          MBBS<span className="logo-accent">Nation</span>.com
        </Link>
        
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/universities" onClick={toggleMenu}>Universities</Link></li>
          <li><Link to="/fees" onClick={toggleMenu}>MBBS Fees</Link></li>
          <li><Link to="/admission-process" onClick={toggleMenu}>Admission Process</Link></li>
          <li className="mobile-only-btn">
            <a href="/#contact-section" className="btn btn-secondary" onClick={toggleMenu}>Apply Now</a>
          </li>
        </ul>
        <a href="/#contact-section" className="btn btn-secondary desktop-only-btn">Apply Now</a>
      </nav>
    </header>
  );
};

export default Header;
