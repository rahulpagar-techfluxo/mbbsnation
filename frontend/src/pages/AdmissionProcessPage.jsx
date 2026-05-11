import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Building, CheckCircle, FileCheck, Plane, MessageSquare } from 'lucide-react';

const AdmissionProcessPage = () => {
  const steps = [
    { icon: <MessageSquare size={32} />, title: "1. Free Counseling", desc: "Get in touch with our experts. We provide free counseling to help you understand the requirements, budget, and best options available for you." },
    { icon: <Building size={32} />, title: "2. University Selection", desc: "Based on your NEET score, budget, and preferences, we help you select the best university for your medical career." },
    { icon: <FileText size={32} />, title: "3. Documentation", desc: "Submit your 10th & 12th marksheets, NEET scorecard, and Passport. We handle the direct application to the university." },
    { icon: <CheckCircle size={32} />, title: "4. Admission Letter", desc: "Receive your official admission letter directly from the university within 1-2 weeks." },
    { icon: <FileCheck size={32} />, title: "5. Visa Process", desc: "We assist you with the complete visa process, including document translation, apostille, and embassy appointments." },
    { icon: <Plane size={32} />, title: "6. Travel Assistance", desc: "We arrange group departures and provide complete travel assistance until you safely reach the university campus." }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <motion.h1 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Admission Process</motion.h1>
          <p>Simple, Transparent, and Direct</p>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 20px' }}>
        <h2 className="section-title">Your Journey to MBBS Abroad</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          
          <div style={{ position: 'absolute', top: '0', bottom: '0', left: '50px', width: '4px', backgroundColor: 'var(--accent-color)', zIndex: '-1' }}></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ display: 'flex', gap: '30px', marginBottom: '40px', alignItems: 'flex-start' }}
            >
              <div style={{ 
                width: '100px', height: '100px', backgroundColor: 'var(--primary-color)', color: 'var(--white)', 
                borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
                flexShrink: 0, border: '5px solid var(--white)', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' 
              }}>
                {step.icon}
              </div>
              <div className="card" style={{ flex: 1, marginTop: '10px' }}>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.4rem' }}>{step.title}</h3>
                <p style={{ color: '#555', fontSize: '1.05rem' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcessPage;
