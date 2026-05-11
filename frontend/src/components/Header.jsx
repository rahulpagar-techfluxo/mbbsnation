import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Camera, MapPin } from 'lucide-react';
import './Header.css';

const Header = ({ content }) => {
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
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/universities">Universities</Link></li>
          <li><Link to="/fees">MBBS Fees</Link></li>
          <li><Link to="/admission-process">Admission Process</Link></li>
        </ul>
        <a href="/#contact-section" className="btn btn-secondary">Apply Now</a>
      </nav>
    </header>
  );
};

export default Header;
