import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UniversitiesPage from './pages/UniversitiesPage';
import FeesPage from './pages/FeesPage';
import AdmissionProcessPage from './pages/AdmissionProcessPage';
import UniversityDetailsPage from './pages/UniversityDetailsPage';
import { MessageCircle } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [siteContent, setSiteContent] = useState(null);

  useEffect(() => {
    axios.get('/api/site-content/')
      .then(response => setSiteContent(response.data))
      .catch(error => console.error("Error fetching site content:", error));
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header content={siteContent} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage content={siteContent} />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/universities/:id" element={<UniversityDetailsPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/admission-process" element={<AdmissionProcessPage />} />
          </Routes>
        </main>

        <Footer content={siteContent} />

        {siteContent && (
          <a
            href={`https://wa.me/${siteContent.whatsapp_number}`}
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle size={30} />
          </a>
        )}
      </div>
    </Router>
  );
}

export default App;
