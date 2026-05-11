import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import axios from 'axios';

const UniversitiesPage = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/universities/')
      .then(response => {
        setUniversities(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching universities:", error);
        setLoading(false);
      });
  }, []);

  const topUniversities = universities.filter(u => u.is_top_destination);
  const otherUniversities = universities.filter(u => !u.is_top_destination);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <motion.h1 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Top Medical Universities Abroad</motion.h1>
          <p>Direct Admission without any consultancy fees</p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 20px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>Loading universities...</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            
            <section>
              <h2 className="section-title" style={{ textAlign: 'left', marginLeft: '0', transform: 'none' }}>Top Recommended Universities</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
                {topUniversities.map((uni, index) => (
                  <motion.div 
                    key={uni.id} 
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 % 0.5 }}
                    style={{ overflow: 'hidden', padding: 0 }}
                  >
                    {uni.image ? (
                      <div style={{ width: '100%', height: '150px', backgroundImage: `url(${uni.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    ) : (
                      <div style={{ width: '100%', height: '150px', backgroundColor: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>No Image available</div>
                    )}
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>{uni.name}</h4>
                      <p style={{ color: '#666', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={14} /> {uni.country}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {otherUniversities.length > 0 && (
              <section style={{ marginTop: '40px' }}>
                <h2 className="section-title" style={{ textAlign: 'left', marginLeft: '0', transform: 'none' }}>Additional Universities</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
                  {otherUniversities.map((uni, index) => (
                    <motion.div 
                      key={uni.id} 
                      className="card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      style={{ overflow: 'hidden', padding: 0 }}
                    >
                      {uni.image ? (
                        <div style={{ width: '100%', height: '150px', backgroundImage: `url(${uni.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                      ) : (
                        <div style={{ width: '100%', height: '150px', backgroundColor: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>No Image available</div>
                      )}
                      <div style={{ padding: '20px' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>{uni.name}</h4>
                        <p style={{ color: '#666', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={14} /> {uni.country}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default UniversitiesPage;
