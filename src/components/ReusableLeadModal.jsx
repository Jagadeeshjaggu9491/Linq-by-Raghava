import React, { useState } from 'react';

export default function ReusableLeadModal({ isOpen, onClose, title = "Book Private VIP Site Visit", subtitle = "Access floor plans, payment schedules & private limo transfers" }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div 
      className="modal fade show d-block" 
      style={{ backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(16px)', zIndex: 1080 }} 
      tabIndex="-1"
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div 
          className="modal-content text-light border border-gold shadow-lg position-relative overflow-hidden" 
          style={{ 
            backgroundColor: 'var(--bg-glass-card)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(74, 60, 49, 0.15), 0 0 30px var(--gold-glow-strong)'
          }}
        >
          <div className="modal-header border-secondary p-4 pb-3">
            <div>
              <span className="badge bg-warning bg-opacity-20 text-warning border border-gold font-heading px-3 py-1 mb-2" style={{ borderRadius: '50px', fontSize: '0.72rem' }}>
                VIP Priority Access
              </span>
              <h4 className="modal-title font-heading text-light m-0">{title}</h4>
              <p className="text-muted small m-0 mt-1" style={{ color: 'var(--text-muted)' }}>{subtitle}</p>
            </div>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            {submitted ? (
              <div className="text-center py-4">
                <div className="gold-gradient-bg text-dark rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
                  <i className="bi bi-check-lg display-6"></i>
                </div>
                <h4 className="font-heading text-light mb-2">Request Confirmed</h4>
                <p className="text-muted small mb-4">
                  Thank you <strong className="text-warning">{formData.name}</strong>. Our Private Portfolio Manager will contact you at <strong className="text-light">{formData.phone}</strong> shortly.
                </p>
                <button className="btn btn-gold btn-sm px-4" onClick={() => { setSubmitted(false); onClose(); }}>
                  Close Window
                </button>
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

                <div className="mb-3">
                  <label className="form-label small fw-semibold" style={{ color: 'var(--text-main)' }}>Phone Number (with Country Code) *</label>
                  <input 
                    type="tel" 
                    className="form-control form-control-dark" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-semibold" style={{ color: 'var(--text-main)' }}>Email Address *</label>
                  <input 
                    type="email" 
                    className="form-control form-control-dark" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-gold w-100 py-3 font-heading fw-bold d-flex align-items-center justify-content-center gap-2 shadow-lg"
                  style={{ borderRadius: '12px' }}
                >
                  <span>Submit Request</span>
                  <i className="bi bi-arrow-right"></i>
                </button>

                <p className="text-muted text-center small mt-3 mb-0" style={{ fontSize: '0.72rem' }}>
                  <i className="bi bi-shield-lock-fill me-1" style={{ color: '#F4D03F' }}></i>
                  100% Confidential. Strict NDA protection guaranteed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
