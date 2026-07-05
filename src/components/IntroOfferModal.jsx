import React, { useState, useEffect } from 'react';
import { PROJECT_DETAILS } from '../data/propertyData';

export default function IntroOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user already dismissed intro popup in this session
    const isClosed = sessionStorage.getItem('intro_popup_closed');
    if (!isClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000); // Triggers exactly 10 seconds after page load
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('intro_popup_closed', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal fade show d-block" 
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)', zIndex: 1090 }} 
      tabIndex="-1"
      onClick={handleClose}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
        <div 
          className="modal-content text-light border border-gold shadow-lg position-relative overflow-hidden"
          style={{ 
            backgroundColor: 'var(--bg-glass-card)', 
            backdropFilter: 'blur(24px)',
            borderRadius: '16px',
            boxShadow: '0 25px 60px rgba(74, 60, 49, 0.15), 0 0 35px var(--gold-glow-strong)'
          }}
        >
          <div className="row g-0 align-items-center">
            {/* Left Image Showcase */}
            <div className="col-md-5 d-none d-md-block position-relative" style={{ height: '420px' }}>
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" 
                alt="Limited Time Offer Sky Villa" 
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-between"
                style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(10,10,10,0.85) 100%)' }}
              >
                <span className="badge gold-gradient-bg text-dark font-heading px-3 py-2 w-fit-content" style={{ borderRadius: '50px' }}>
                  Exclusive Launch
                </span>
                <div>
                  <h5 className="font-heading text-light m-0">{PROJECT_DETAILS.name}</h5>
                  <span className="text-warning small">{PROJECT_DETAILS.location}</span>
                </div>
              </div>
            </div>

            {/* Right Form & Offer Details */}
            <div className="col-md-7 p-4 p-lg-5 position-relative">
              <button 
                type="button" 
                className="btn-close btn-close-white position-absolute top-0 end-0 m-3" 
                onClick={handleClose}
                aria-label="Close"
              ></button>

              <span className="subtitle-badge mb-2" style={{ fontSize: '0.72rem' }}>
                <i className="bi bi-clock-history"></i> Limited Time Offer
              </span>

              <h3 className="font-heading text-light mb-1">
                Get <span className="gold-gradient-text">Exclusive Pre-Launch Price</span>
              </h3>

              <p className="text-muted small mb-4" style={{ color: 'var(--text-muted)' }}>
                Unlock private inaugural pricing benefits & custom payment plans before official public release.
              </p>

              {submitted ? (
                <div className="text-center py-4">
                  <div className="gold-gradient-bg text-dark rounded-circle p-2 d-inline-flex align-items-center justify-content-center mb-2" style={{ width: '52px', height: '52px' }}>
                    <i className="bi bi-check-lg fs-4"></i>
                  </div>
                  <h5 className="font-heading text-light mb-1">VIP Offer Unlocked</h5>
                  <p className="text-muted small m-0">Thank you, {formData.name}. Downloading private pricelist now...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold" style={{ color: 'var(--text-main)' }}>Full Name *</label>
                    <input 
                      type="text" 
                      className="form-control form-control-dark" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label small fw-semibold" style={{ color: 'var(--text-main)' }}>Phone Number *</label>
                    <input 
                      type="tel" 
                      className="form-control form-control-dark" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-gold w-100 py-3 font-heading fw-bold d-flex align-items-center justify-content-center gap-2 shadow-lg"
                    style={{ borderRadius: '12px' }}
                  >
                    <span>Claim Exclusive Offer</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>

                  <p className="text-muted text-center small mt-3 mb-0" style={{ fontSize: '0.7rem' }}>
                    Valid for the next 48 hours for early registrants.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
