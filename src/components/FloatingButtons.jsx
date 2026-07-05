import React, { useState, useEffect } from 'react';
import { brochureData } from '../data/brochureData';

const FloatingButtons = ({ onOpenModal }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons on Right Desktop / Mobile */}
      <div 
        className="position-fixed d-flex flex-column gap-2 z-1030" 
        style={{ right: '20px', bottom: '90px' }}
      >
        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${brochureData.contact.whatsapp}?text=Hi,%20I%20am%20interested%20in%20LINQ%20by%20Raghava`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow-lg hover-scale"
          style={{ width: '52px', height: '52px', border: '2px solid #ffffff' }}
          title="Chat on WhatsApp"
        >
          <i className="bi bi-whatsapp fs-4"></i>
        </a>

        {/* Direct Call Button */}
        <a 
          href={`tel:${brochureData.contact.phones[0]}`}
          className="btn rounded-circle d-flex align-items-center justify-content-center shadow-lg hover-scale"
          style={{ width: '52px', height: '52px', border: '2px solid #ffffff', backgroundColor: '#7B614E', color: '#ffffff' }}
          title="Call Now"
        >
          <i className="bi bi-telephone-fill fs-5" style={{ color: '#ffffff' }}></i>
        </a>

        {/* Back to Top Button */}
        {showTopBtn && (
          <button 
            onClick={scrollToTop}
            className="btn btn-dark border border-warning text-warning rounded-circle d-flex align-items-center justify-content-center shadow-lg"
            style={{ width: '48px', height: '48px' }}
            title="Back to Top"
          >
            <i className="bi bi-arrow-up fs-5 fw-bold" style={{ fontWeight: 'bold', WebkitTextStroke: '0.8px #B89B82' }}></i>
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingButtons;
