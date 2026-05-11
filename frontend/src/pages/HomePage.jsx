import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, GraduationCap, Plane, Award, Banknote } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import './HomePage.css';

const HomePage = ({ content }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge">100% Transparent • No Hidden Fees</div>
            <h1>{content?.hero_heading || "NO CONSULTANCY FEES CHARGED DIRECT MBBS ADMISSION ABROAD"}</h1>
            <p className="hero-subheading">{content?.hero_subheading || "Get direct admission assistance for MBBS abroad through official university tie-ups. No hidden charges. No middleman fees."}</p>
            
            <div className="hero-cta">
              <a href="#contact-section" className="btn btn-primary">Apply Now</a>
              <a href={`https://wa.me/${content?.whatsapp_number || "919876543210"}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
              <a href="#contact-section" className="btn btn-outline">Talk to Counselor</a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="warning-section">
        <div className="container">
          <div className="warning-box">
            <h3>{content?.warning_heading || "⚠️ Important Notice to Students & Parents"}</h3>
            <p>{content?.warning_text || "Do not pay extra money to agents or middlemen to secure your dream university admission."} MBBSNation helps Indian students secure direct admission in top MBBS universities abroad without charging consultancy fees. We work directly with universities through official partnerships and authorized admission channels.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">Why Trust MBBSNation?</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon"><ShieldCheck size={40} /></div>
              <h3>No Consultancy Fees</h3>
              <p>We do not charge any hidden fees or agent commissions. You pay fees directly to the university.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon"><Award size={40} /></div>
              <h3>Transparent Process</h3>
              <p>100% transparency at every step of your admission journey from counseling to graduation.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon"><GraduationCap size={40} /></div>
              <h3>Direct University Support</h3>
              <p>Official authorized admission channels and direct tie-ups with top medical universities.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon"><Plane size={40} /></div>
              <h3>Visa Assistance</h3>
              <p>Complete end-to-end support for your student visa application and documentation.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon"><Banknote size={40} /></div>
              <h3>Affordable MBBS Options</h3>
              <p>We help you find the best medical universities that fit your budget.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon"><UserCheck size={40} /></div>
              <h3>Indian Student Support</h3>
              <p>Dedicated support for Indian students including hostel, mess, and local guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="countries-section">
        <div className="container">
          <h2 className="section-title">Top Destinations for MBBS Abroad</h2>
          <div className="countries-grid">
            <Link to="/universities" className="country-card">
              <div className="country-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'}}></div>
              <div className="country-content">
                <h3>Russia</h3>
                <p>20+ Top Medical Universities</p>
              </div>
            </Link>
            <Link to="/universities" className="country-card">
              <div className="country-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1549557451-24874d6c41b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'}}></div>
              <div className="country-content">
                <h3>Kyrgyzstan</h3>
                <p>Affordable Medical Education</p>
              </div>
            </Link>
            <Link to="/universities" className="country-card">
              <div className="country-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1558588942-930faae5a389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'}}></div>
              <div className="country-content">
                <h3>Kazakhstan</h3>
                <p>High Quality Infrastructure</p>
              </div>
            </Link>
            <Link to="/universities" className="country-card">
              <div className="country-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'}}></div>
              <div className="country-content">
                <h3>Uzbekistan</h3>
                <p>Emerging Hub for MBBS</p>
              </div>
            </Link>
          </div>
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link to="/universities" className="btn btn-primary">View All Universities</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
