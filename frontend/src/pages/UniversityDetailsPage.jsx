import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Languages, Banknote, ShieldCheck, CheckCircle2, ArrowLeft, Calendar, Users, GraduationCap } from 'lucide-react';
import axios from 'axios';
import './UniversityDetailsPage.css';

const UniversityDetailsPage = () => {
  const { id } = useParams();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`/api/universities/${id}/`)
      .then(response => {
        setUniversity(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching university details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading university details...</div>;
  }

  if (!university) {
    return (
      <div style={{ height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>University Not Found</h2>
        <Link to="/universities" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Universities</Link>
      </div>
    );
  }

  const defaultImage = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="uni-details-page">
      {/* Hero Banner */}
      <section 
        className="uni-hero" 
        style={{ backgroundImage: `url(${university.image || defaultImage})` }}
      >
        <div className="uni-hero-overlay"></div>
        <div className="container uni-hero-content">
          <Link to="/universities" style={{ color: 'rgba(255,255,255,0.8)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', textDecoration: 'none', fontWeight: '500' }}>
            <ArrowLeft size={18} /> Back to Universities
          </Link>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            {university.name}
          </motion.h1>
          <motion.div 
            className="uni-hero-meta"
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="uni-meta-item"><MapPin size={20} color="#3b82f6" /> {university.country}</div>
            <div className="uni-meta-item"><Banknote size={20} color="#10b981" /> {university.total_fees}</div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="uni-content-wrapper container">
        <div className="uni-grid">
          
          <div className="uni-main-content">
            <motion.div 
              initial={{ y: 30, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true }}
            >
              <h2>Key Information</h2>
              <div className="uni-stats-grid">
                <div className="uni-stat-card">
                  <div className="uni-stat-icon"><Clock size={24} /></div>
                  <div className="uni-stat-info">
                    <h4>Duration</h4>
                    <p>{university.duration}</p>
                  </div>
                </div>
                <div className="uni-stat-card">
                  <div className="uni-stat-icon"><Languages size={24} /></div>
                  <div className="uni-stat-info">
                    <h4>Medium</h4>
                    <p>{university.medium}</p>
                  </div>
                </div>
                <div className="uni-stat-card">
                  <div className="uni-stat-icon"><Calendar size={24} /></div>
                  <div className="uni-stat-info">
                    <h4>Intake</h4>
                    <p>{university.intake || "Sept / Feb"}</p>
                  </div>
                </div>
                <div className="uni-stat-card">
                  <div className="uni-stat-icon"><GraduationCap size={24} /></div>
                  <div className="uni-stat-info">
                    <h4>Recognition</h4>
                    <p>{university.recognition || "WHO, NMC"}</p>
                  </div>
                </div>
              </div>

              <h2>Overview</h2>
              <div className="uni-description">
                {university.about ? (
                  <div dangerouslySetInnerHTML={{ __html: university.about.replace(/\n/g, '<br />') }} />
                ) : (
                  <>
                    <p>{university.name} is one of the leading medical universities in {university.country}, highly preferred by Indian students for pursuing their MBBS degree. It offers world-class infrastructure, experienced faculties, and a comprehensive curriculum designed to meet global medical standards.</p>
                    <p style={{ marginTop: '15px' }}>The medium of instruction is entirely in {university.medium}, ensuring that international students, especially from India, face no language barriers during their studies. The university is fully recognized by the National Medical Commission (NMC) and the World Health Organization (WHO), making graduates eligible to practice medicine in India and globally after clearing respective screening tests.</p>
                  </>
                )}
              </div>

              {university.student_facilities && (
                <>
                  <h2>Student Facilities</h2>
                  <div className="uni-description" dangerouslySetInnerHTML={{ __html: university.student_facilities.replace(/\n/g, '<br />') }} />
                </>
              )}

              {university.gallery_images && university.gallery_images.length > 0 && (
                <>
                  <h2>Photo Gallery</h2>
                  <div className="uni-gallery">
                    {university.gallery_images.map(img => (
                      <div key={img.id} className="uni-gallery-item">
                        <img src={img.image} alt={img.caption || `${university.name} Campus`} loading="lazy" />
                        {img.caption && <p className="uni-gallery-caption">{img.caption}</p>}
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h2>Why Choose {university.name}?</h2>
              <ul className="uni-highlight-list" style={{ fontSize: '1.1rem' }}>
                <li style={{ marginBottom: '20px' }}><ShieldCheck className="icon" size={24} /> Directly recognized by NMC (formerly MCI) and WHO.</li>
                <li style={{ marginBottom: '20px' }}><ShieldCheck className="icon" size={24} /> Highly affordable fee structure of {university.total_fees} for the entire course.</li>
                <li style={{ marginBottom: '20px' }}><ShieldCheck className="icon" size={24} /> High FMGE/NExT passing percentage among graduates.</li>
                <li style={{ marginBottom: '20px' }}><ShieldCheck className="icon" size={24} /> Safe and secure hostel facilities with Indian food available on campus.</li>
              </ul>
            </motion.div>
          </div>

          <div className="uni-sidebar">
            <motion.div 
              className="uni-apply-card"
              initial={{ scale: 0.95, opacity: 0 }} 
              whileInView={{ scale: 1, opacity: 1 }} 
              viewport={{ once: true }}
            >
              <h3>Secure Your Seat</h3>
              <p>Direct admission process with 0% consultancy fees. Get end-to-end guidance from our experts.</p>
              <a href="/#contact-section" className="btn">Apply Now</a>
            </motion.div>

            <motion.div 
              className="uni-highlights"
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true }}
            >
              <h3>Eligibility Criteria</h3>
              <ul className="uni-highlight-list">
                <li><CheckCircle2 className="icon" size={18} /> 50% Marks in 10+2 (PCB)</li>
                <li><CheckCircle2 className="icon" size={18} /> NEET Qualification Mandatory</li>
                <li><CheckCircle2 className="icon" size={18} /> Minimum 17 years of age</li>
                <li><CheckCircle2 className="icon" size={18} /> Valid Passport</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default UniversityDetailsPage;
