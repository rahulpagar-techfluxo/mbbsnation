import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile_number: '',
    email: '',
    neet_score: '',
    preferred_country: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      await axios.post('/api/leads/', formData);
      setStatus('Success');
      setFormData({
        name: '',
        mobile_number: '',
        email: '',
        neet_score: '',
        preferred_country: '',
        message: ''
      });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error(error);
      setStatus('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="contact-form-wrapper" id="contact-section">
      <h3 className="form-heading">Want MBBS Admission Without Consultancy Fees?</h3>
      <p className="form-subheading">Get Free Guidance from our experts</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Student Name *</label>
          <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="mobile_number">Mobile Number *</label>
          <input type="tel" id="mobile_number" name="mobile_number" className="form-control" value={formData.mobile_number} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="neet_score">NEET Score (if appeared)</label>
          <input type="number" id="neet_score" name="neet_score" className="form-control" value={formData.neet_score} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="preferred_country">Preferred Country</label>
          <select id="preferred_country" name="preferred_country" className="form-control" value={formData.preferred_country} onChange={handleChange}>
            <option value="">Select a country</option>
            <option value="Russia">Russia</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Georgia">Georgia</option>
            <option value="Not Sure">Not Sure yet</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="btn btn-primary submit-btn">Get Free Guidance</button>

        {status === 'Success' && <div className="toast">Your inquiry has been submitted! We will contact you soon.</div>}
        {status && status !== 'Success' && status !== 'Submitting...' && <div className="form-error">{status}</div>}
      </form>
    </div>
  );
};

export default ContactForm;
