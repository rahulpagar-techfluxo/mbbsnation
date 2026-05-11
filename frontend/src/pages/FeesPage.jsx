import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const FeesPage = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/universities/')
      .then(response => {
        setUniversities(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching universities:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>MBBS Fees Structure</motion.h1>
          <p>Transparent Pricing • No Hidden Costs</p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 20px' }}>
        <h2 className="section-title">Estimated Fee Structure</h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666', maxWidth: '800px', margin: '0 auto 40px' }}>
          Below is an estimated fee structure for top universities. The total fees include tuition and hostel charges. Note that there are ZERO consultancy fees charged by MBBSNation.
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>Loading fees data...</div>
        ) : (
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Country</th>
                  <th>Medium</th>
                  <th>Duration</th>
                  <th>Estimated Total Fees</th>
                </tr>
              </thead>
              <tbody>
                {universities.map((uni) => (
                  <tr key={uni.id}>
                    <td style={{ fontWeight: '600', color: 'var(--primary-color)' }}>{uni.name}</td>
                    <td>{uni.country}</td>
                    <td>{uni.medium}</td>
                    <td>{uni.duration}</td>
                    <td style={{ fontWeight: '700', color: 'var(--success)' }}>{uni.total_fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e9ecef', borderRadius: '8px', borderLeft: '4px solid var(--secondary-color)' }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Note:</h4>
          <p style={{ fontSize: '0.9rem', color: '#555' }}>Fees are subject to change based on currency exchange rates and university policies. Please contact us for the exact, updated fee structure for the current academic year.</p>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;
