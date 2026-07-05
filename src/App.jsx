import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectHighlights from './components/ProjectHighlights';
import AboutProject from './components/AboutProject';
import PricingFloorPlans from './components/PricingFloorPlans';
import MasterPlan from './components/MasterPlan';
import ProjectSpecifications from './components/ProjectSpecifications';
import LocationAdvantages from './components/LocationAdvantages';
import GallerySection from './components/GallerySection';
import ProjectShowcase from './components/ProjectShowcase';
import AboutBuilder from './components/AboutBuilder';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ReusablePopupModal from './components/ReusablePopupModal';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Get Brochure');

  // Trigger Intro Popup after 10 seconds automatically
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user hasn't already opened a modal manually
      setModalTitle('LINQ by Raghava Brochure & Site Visit');
      setModalOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (title = 'Get Brochure') => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="bg-light text-dark overflow-x-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-main)', minHeight: '100vh' }}>
      
      {/* Sticky Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Banner */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* 2. Project Highlights */}
        <ProjectHighlights onOpenModal={handleOpenModal} />

        {/* 3. About Project */}
        <AboutProject onOpenModal={handleOpenModal} />

        {/* 4. Price / Floor Plans */}
        <PricingFloorPlans onOpenModal={handleOpenModal} />

        {/* 5. Master Plan */}
        <MasterPlan onOpenModal={handleOpenModal} />

        {/* 6. Technical Specifications */}
        <ProjectSpecifications onOpenModal={handleOpenModal} />

        {/* 7. Location Advantages */}
        <LocationAdvantages onOpenModal={handleOpenModal} />

        {/* 8. Gallery */}
        <GallerySection onOpenModal={handleOpenModal} />

        {/* 9. Construction / Project Showcase */}
        <ProjectShowcase onOpenModal={handleOpenModal} />

        {/* 10. About Builder */}
        <AboutBuilder onOpenModal={handleOpenModal} />

        {/* 11. Contact Section */}
        <ContactSection onOpenModal={handleOpenModal} />
      </main>

      {/* 12. Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Reusable Popup Modal (used for all CTA buttons + 10s auto-intro popup) */}
      <ReusablePopupModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={modalTitle} 
      />

      {/* Floating Buttons: WhatsApp, Call, Back to Top & Mobile Sticky CTA */}
      <FloatingButtons onOpenModal={handleOpenModal} />

    </div>
  );
}

export default App;
