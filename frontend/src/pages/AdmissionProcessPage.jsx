import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Building, CheckCircle, FileCheck, Plane, MessageSquare } from 'lucide-react';
import './AdmissionProcess.css';

const AdmissionProcessPage = () => {
  const steps = [
    { icon: <MessageSquare className="step-icon-svg" />, title: "1. Free Counseling", desc: "Get in touch with our experts. We provide free counseling to help you understand the requirements, budget, and best options available for you." },
    { icon: <Building className="step-icon-svg" />, title: "2. University Selection", desc: "Based on your NEET score, budget, and preferences, we help you select the best university for your medical career." },
    { icon: <FileText className="step-icon-svg" />, title: "3. Documentation", desc: "Submit your 10th & 12th marksheets, NEET scorecard, and Passport. We handle the direct application to the university." },
    { icon: <CheckCircle className="step-icon-svg" />, title: "4. Admission Letter", desc: "Receive your official admission letter directly from the university within 1-2 weeks." },
    { icon: <FileCheck className="step-icon-svg" />, title: "5. Visa Process", desc: "We assist you with the complete visa process, including document translation, apostille, and embassy appointments." },
    { icon: <Plane className="step-icon-svg" />, title: "6. Travel Assistance", desc: "We arrange group departures and provide complete travel assistance until you safely reach the university campus." }
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
        <div className="timeline-container">
          
          <div className="timeline-line"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="timeline-step"
            >
              <div className="timeline-icon">
                {step.icon}
              </div>
              <div className="card timeline-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcessPage;
