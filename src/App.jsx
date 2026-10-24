import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AcademicBar from './components/AcademicBar';
import AboutSection from './components/AboutSection';
import FeaturedProjects from './components/FeaturedProjects';
import CoreDomains from './components/CoreDomains';
import PatentSection from './components/PatentSection';
import Publications from './components/Publications';
import AcademicJourney from './components/AcademicJourney';
import FdpCertifications from './components/FdpCertifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PaperModal from './components/PaperModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [selectedPaper, setSelectedPaper] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Sticky Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main style={{ flex: '1 0 auto' }}>
        {/* 1. Hero Section (Matching Reference Image 1) */}
        <Hero />

        {/* 2. Verified Academic Credentials (ORCID, Scopus, ResearcherID, Vidwan) */}
        <AcademicBar />

        {/* 3. Dedicated About & Strengths Section */}
        <AboutSection />

        {/* 4. Research Highlights / Impact Projects (Matching Reference Image 2) */}
        <FeaturedProjects onSelectPaper={setSelectedPaper} />

        {/* 5. Core Domains Bento Grid (Matching Reference Image 3) */}
        <CoreDomains />

        {/* 6. Published Indian Patent Showcase */}
        <PatentSection />

        {/* 7. All 11 Indexed Research Publications with Filter & Search */}
        <Publications onSelectPaper={setSelectedPaper} />

        {/* 8. Academic Journey, Degrees & Institutional Responsibilities */}
        <AcademicJourney />

        {/* 9. FDPs at IIT/IIIT/NIT, Certifications & Sports Honors */}
        <FdpCertifications />

        {/* 10. Contact, Office Hours & CV Download */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Paper / Research Detail Modal */}
      {selectedPaper && (
        <PaperModal paper={selectedPaper} onClose={() => setSelectedPaper(null)} />
      )}
    </div>
  );
}
