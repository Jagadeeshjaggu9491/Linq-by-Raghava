import React, { useState } from 'react';
import { PROJECT_DETAILS } from '../data/propertyData';

export default function BrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setDownloaded(true);
    // Simulate triggering brochure download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
      link.download = `${PROJECT_DETAILS.name}_Luxury_Brochure_2026.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', zIndex: 1060 }}
      tabIndex="-1"
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content bg-dark text-light border border-gold shadow-lg">
          <div className="modal-header border-secondary">
            <h5 className="modal-title font-heading text-warning d-flex align-items-center gap-2">
              <i className="bi bi-file-earmark-pdf-fill"></i>
              <span>Download Official E-Brochure</span>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body p-4">
            {downloaded ? (
              <div className="text-center py-4">
                <div className="gold-gradient-bg text-dark rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-download fs-3"></i>
                </div>
                <h4 className="font-heading text-light mb-2">Brochure Download Initiated</h4>
                <p className="text-muted small mb-4">
                  Thank you, <strong className="text-warning">{formData.name}</strong>. The 48-page high-resolution PDF e-brochure has also been dispatched to <strong className="text-light">{formData.email}</strong>.
                </p>
                <button className="btn btn-gold btn-sm" onClick={() => { setDownloaded(false); onClose(); }}>
                  Return to Website
                </button>
              </div>
            ) : (
              <form onSubmit={handleDownload}>
                <div className="text-center mb-4">
                  <span className="subtitle-badge mb-2">
                    <i className="bi bi-gem"></i> Confidential Digital Kit
                  </span>
                  <p className="text-muted small mt-2">
                    Complete the form below to receive the complete 48-page portfolio, masterplan blueprints, and payment schedule.
                  </p>
                </div>

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
                  <label className="form-label small fw-semibold" style={{ color: 'var(--text-main)' }}>Email Address *</label>
                  <input
                    type="email"
                    className="form-control form-control-dark"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

                <button type="submit" className="btn btn-gold w-100 py-3 font-heading">
                  Instant PDF Download
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
