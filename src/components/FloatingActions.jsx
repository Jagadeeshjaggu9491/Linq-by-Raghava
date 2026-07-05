import React from 'react';

export default function FloatingActions({ onOpenTourModal }) {
  return (
    <>
      {/* DESKTOP FLOATING SIDEBAR (RIGHT SIDE) */}
      <div 
        className="position-fixed end-0 top-50 translate-middle-y d-none d-md-flex flex-column gap-3 me-3 z-1040"
        style={{ zIndex: 1040 }}
      >
        {/* WhatsApp Float Button */}
        <a 
          href="https://wa.me/18005559988?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Aurelia%20Grand%20Residences."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success rounded-circle shadow-lg d-flex align-items-center justify-content-center border border-light"
          style={{ width: '52px', height: '52px', transition: 'all 0.3s ease' }}
          title="WhatsApp Concierge"
          aria-label="WhatsApp Concierge"
        >
          <i className="bi bi-whatsapp fs-4 text-white"></i>
        </a>

        {/* Call Now Float Button */}
        <a 
          href="tel:+18005559988"
          className="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center border border-light"
          style={{ width: '52px', height: '52px', transition: 'all 0.3s ease', backgroundColor: '#2563EB' }}
          title="Call Concierge Hotline"
          aria-label="Call Concierge Hotline"
        >
          <i className="bi bi-telephone-fill fs-4 text-white"></i>
        </a>

        {/* Book Site Visit Float Button */}
        <button 
          onClick={onOpenTourModal}
          className="btn btn-gold rounded-circle shadow-lg d-flex align-items-center justify-content-center border border-light"
          style={{ width: '52px', height: '52px', transition: 'all 0.3s ease' }}
          title="Book VIP Site Visit"
          aria-label="Book VIP Site Visit"
        >
          <i className="bi bi-calendar-check-fill fs-4 text-dark"></i>
        </button>
      </div>

      {/* MOBILE STICKY BOTTOM CTA BAR */}
      <div 
        className="position-fixed bottom-0 start-0 w-100 p-2 d-md-none glass-header border-top border-gold"
        style={{ 
          zIndex: 1045, 
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 -10px 25px rgba(0, 0, 0, 0.8)'
        }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-4">
              <a 
                href="tel:+18005559988" 
                className="btn btn-outline-gold w-100 py-2 d-flex flex-column align-items-center justify-content-center text-decoration-none"
                style={{ borderRadius: '10px', fontSize: '0.72rem' }}
              >
                <i className="bi bi-telephone-fill fs-5 mb-1"></i>
                <span>Call Now</span>
              </a>
            </div>

            <div className="col-4">
              <a 
                href="https://wa.me/18005559988?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Aurelia%20Grand%20Residences."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success w-100 py-2 d-flex flex-column align-items-center justify-content-center text-decoration-none"
                style={{ borderRadius: '10px', fontSize: '0.72rem', backgroundColor: '#16a34a' }}
              >
                <i className="bi bi-whatsapp fs-5 mb-1 text-white"></i>
                <span className="text-white">WhatsApp</span>
              </a>
            </div>

            <div className="col-4">
              <button 
                onClick={onOpenTourModal}
                className="btn btn-gold w-100 py-2 d-flex flex-column align-items-center justify-content-center"
                style={{ borderRadius: '10px', fontSize: '0.72rem' }}
              >
                <i className="bi bi-calendar-check-fill fs-5 mb-1 text-dark"></i>
                <span className="text-dark fw-bold">Book Visit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
