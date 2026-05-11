import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Camera, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = ({ content }) => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section brand-section">
          <h2>MBBS<span className="logo-accent">Nation</span>.com</h2>
          <p>{content?.footer_about_text || "We help Indian students secure direct admission in top MBBS universities abroad without charging consultancy fees. Your dream, our mission."}</p>
        </div>
        
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/universities">Universities</Link></li>
            <li><Link to="/fees">MBBS Fees</Link></li>
            <li><Link to="/admission-process">Admission Process</Link></li>
          </ul>
        </div>
        
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <ul>
            <li><Phone size={18} /> <a href={`tel:${content?.phone_number || "+919876543210"}`}>{content?.phone_number || "+91 98765 43210"}</a></li>
            <li><Mail size={18} /> <a href={`mailto:${content?.email || "info@mbbsnation.com"}`}>{content?.email || "info@mbbsnation.com"}</a></li>
            {content?.instagram_link && <li><Camera size={18} /> <a href={content.instagram_link} target="_blank" rel="noopener noreferrer">@mbbsnation</a></li>}
            <li><MapPin size={18} /> {content?.address || "New Delhi, India"}</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>{content?.footer_disclaimer || "Disclaimer: Admission process depends on university eligibility and NEET qualification requirements."}</p>
          <p>&copy; {new Date().getFullYear()} MBBSNation.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
