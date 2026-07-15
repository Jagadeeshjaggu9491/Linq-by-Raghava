import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const ReusablePopupModal = ({ isOpen, onClose, title = "GET BROCHURE", defaultMessage = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitSize: '3 BHK - 1789 Sq. Ft.',
    message: defaultMessage
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://tattvarealty.co.in/backend-files/linq/contact-form-linq-by-raghava.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          unitSize: formData.unitSize,
          message: formData.message
        })
      });

      const data = await response.json();
      if (data && data.status === 'success') {
        window.location.href = '/thank-you.html';
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('Could not connect to the server. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <div 
        className="modal-backdrop fade show" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.88)', backdropFilter: 'blur(10px)', zIndex: 1055 }}
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div 
        className="modal fade show d-block" 
        tabIndex="-1" 
        style={{ zIndex: 1060 }} 
        onClick={onClose}
      >
        <div 
          className="modal-dialog modal-dialog-centered modal-xl px-2 px-md-3" 
          onClick={(e) => e.stopPropagation()}
          style={{ maxWidth: '1020px' }}
        >
          <motion.div 
            className="modal-content overflow-hidden text-light position-relative"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-gold-light)', 
              borderRadius: '20px',
              boxShadow: '0 25px 60px rgba(74, 60, 49, 0.15), 0 0 35px var(--gold-glow-strong)'
            }}
          >
            <div className="row g-0">
              
              {/* LEFT COLUMN - Brand Showcase with BG Image, hidden on mobile */}
              <div
                className="col-lg-5 d-none d-lg-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  backgroundImage: 'url("/assets/brochure/img-p13-34-2000x2000.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRight: '1px solid var(--border-gold)',
                  minHeight: '520px',
                }}
              >
                {/* Dark overlay for readability */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: 'linear-gradient(160deg, rgba(30,22,18,0.78) 0%, rgba(30,22,18,0.55) 60%, rgba(30,22,18,0.75) 100%)',
                    zIndex: 0,
                  }}
                />

                {/* Gold shimmer top-left glow */}
                <div
                  className="position-absolute top-0 start-0 pointer-events-none"
                  style={{
                    width: '260px',
                    height: '260px',
                    background: 'radial-gradient(ellipse, rgba(184,155,130,0.18) 0%, transparent 70%)',
                    zIndex: 1,
                  }}
                />

                <div className="position-relative d-flex flex-column justify-content-between h-100 p-4 p-md-5" style={{ zIndex: 2 }}>
                  {/* Brand Header */}
                  <div>
                    <div className="mb-4">
                      <img
                        src={logo}
                        alt="LINQ by Raghava Official Logo"
                        style={{ height: '54px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                      />
                      <span
                        className="d-block mt-1"
                        style={{ fontSize: '0.72rem', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.6)' }}
                      >
                        Official Marketing Partner
                      </span>
                    </div>

                    {/* Headline Tagline */}
                    <div className="mb-4">
                      <h2
                        className="font-heading fw-normal mb-1"
                        style={{ fontSize: '1.85rem', letterSpacing: '0.02em', color: '#fff' }}
                      >
                        Live Rare.
                      </h2>
                      <h2
                        className="font-heading fw-bold mb-0"
                        style={{
                          fontSize: '1.85rem',
                          letterSpacing: '0.02em',
                          background: 'linear-gradient(135deg, #D4C3B3 0%, #B89B82 50%, #7B614E 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Live Raghava.
                      </h2>
                    </div>

                    {/* 4 Quick Stat Icons Row */}
                    <div className="row g-2 text-center my-4 py-2" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                      {[
                        { icon: 'bi-geo-alt', value: '9.2', label: 'Acres' },
                        { icon: 'bi-building', value: '4', label: 'Towers' },
                        { icon: 'bi-house-door', value: '3 BHK', label: 'Premium' },
                        { icon: 'bi-arrows-angle-expand', value: '1789–2388', label: 'Sq. Ft.' },
                      ].map((stat, i) => (
                        <div key={i} className={`col-3 ${i > 0 ? 'border-start' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.15) !important' }}>
                          <div className="p-1">
                            <i className={`bi ${stat.icon} fs-5`} style={{ color: '#D4A96A' }}></i>
                            <h6 className="fw-bold font-heading mb-0 mt-1" style={{ fontSize: i === 3 ? '0.7rem' : '0.9rem', color: '#fff' }}>{stat.value}</h6>
                            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.55)' }}>{stat.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Raghava Brand Image Card */}
                  <div
                    className="rounded-3 overflow-hidden mt-4 shadow-lg"
                    style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <img
                      src="/assets/brochure/extracted-1.jpg"
                      alt="LINQ by Raghava luxury residential towers elevation rendering"
                      className="w-100 object-fit-cover"
                      style={{ height: '160px', display: 'block' }}
                    />
                  </div>

                  {/* Location tag at bottom */}
                  <div className="d-flex align-items-center gap-2 mt-3" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                    <i className="bi bi-geo-alt-fill" style={{ color: '#D4A96A' }}></i>
                    <span>Neopolis, Kokapet, Hyderabad</span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Lead Form */}
              <div className="col-lg-7 p-4 p-md-5 position-relative d-flex flex-column justify-content-between" style={{ backgroundColor: 'var(--bg-glass-card)' }}>
                
                {/* Top Close Button (X) */}
                <button 
                  type="button" 
                  className="position-absolute top-0 end-0 m-4 btn rounded-circle d-flex align-items-center justify-content-center"
                  onClick={onClose}
                  style={{ 
                    width: '38px', 
                    height: '38px', 
                    border: '1px solid var(--border-gold)', 
                    color: 'var(--gold-primary)',
                    backgroundColor: 'var(--bg-primary)',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label="Close"
                >
                  <i className="bi bi-x-lg fs-6"></i>
                </button>

                <div>
                  {/* Pill Badge */}
                  <div className="mb-3">
                    <span 
                      className="px-3 py-1 rounded-pill d-inline-flex align-items-center gap-2"
                      style={{ 
                        border: '1px solid rgba(184, 155, 130, 0.4)', 
                        backgroundColor: 'rgba(184, 155, 130, 0.06)',
                        color: '#B89B82',
                        fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
                        letterSpacing: '0.1em',
                        fontWeight: 600,
                        textTransform: 'uppercase'
                      }}
                    >
                      <i className="bi bi-shield-check" style={{ fontSize: '0.8rem' }}></i> RAGHAVA OFFICIAL ENQUIRY
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 
                    className="font-heading text-light text-uppercase mb-2" 
                    style={{ fontSize: 'clamp(1.1rem, 4vw, 1.75rem)', letterSpacing: '0.03em', lineHeight: 1.2 }}
                  >
                    {title}
                  </h3>
                  <p className="text-muted small mb-4" style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    Fill in your details to connect with the LINQ by Raghava sales team.
                  </p>

                  {submitted ? (
                    <motion.div 
                      className="text-center py-5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div 
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                        style={{ 
                          width: '76px', 
                          height: '76px', 
                          border: '2px solid #B89B82',
                          backgroundColor: 'rgba(184, 155, 130, 0.1)',
                          color: '#B89B82' 
                        }}
                      >
                        <i className="bi bi-check-lg display-4"></i>
                      </div>
                      <h4 className="font-heading text-light mb-2">Request Received!</h4>
                      <p className="text-muted small mb-0">Thank you for your interest in <strong>LINQ by Raghava</strong>. Our sales team will get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="row g-3">
                      
                      {error && (
                        <div className="col-12">
                          <div className="alert alert-danger border-danger border-opacity-25 bg-danger bg-opacity-10 text-danger small py-2 px-3" style={{ borderRadius: '8px' }}>
                            <i className="bi bi-exclamation-triangle-fill me-2"></i>{error}
                          </div>
                        </div>
                      )}

                      {/* FULL NAME */}
                      <div className="col-12 col-md-6">
                        <label className="form-label text-uppercase fw-semibold" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--text-main)' }}>
                          FULL NAME *
                        </label>
                        <div className="input-group" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
                          <span className="input-group-text border-0 text-warning" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--gold-primary)', paddingLeft: '14px', paddingRight: '14px' }}>
                            <i className="bi bi-person"></i>
                          </span>
                          <input 
                            type="text" 
                            className="form-control bg-dark border-0 text-light py-2 shadow-none" 
                            style={{ backgroundColor: 'var(--bg-secondary)', fontSize: '0.88rem' }}
                            required 
                            disabled={loading}
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                      </div>

                      {/* PHONE NUMBER */}
                      <div className="col-12 col-md-6">
                        <label className="form-label text-uppercase fw-semibold" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--text-main)' }}>
                          PHONE NUMBER *
                        </label>
                        <div className="input-group" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
                          <span className="input-group-text border-0 text-warning" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--gold-primary)', paddingLeft: '14px', paddingRight: '14px' }}>
                            <i className="bi bi-telephone"></i>
                          </span>
                          <input 
                            type="tel" 
                            className="form-control bg-dark border-0 text-light py-2 shadow-none" 
                            style={{ backgroundColor: 'var(--bg-secondary)', fontSize: '0.88rem' }}
                            required 
                            disabled={loading}
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      {/* EMAIL ADDRESS */}
                      <div className="col-12 col-md-6">
                        <label className="form-label text-uppercase fw-semibold" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--text-main)' }}>
                          EMAIL ADDRESS *
                        </label>
                        <div className="input-group" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
                          <span className="input-group-text border-0 text-warning" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--gold-primary)', paddingLeft: '14px', paddingRight: '14px' }}>
                            <i className="bi bi-envelope"></i>
                          </span>
                          <input 
                            type="email" 
                            className="form-control bg-dark border-0 text-light py-2 shadow-none" 
                            style={{ backgroundColor: 'var(--bg-secondary)', fontSize: '0.88rem' }}
                            required 
                            disabled={loading}
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>

                      {/* PREFERRED CONFIGURATION */}
                      <div className="col-12 col-md-6">
                        <label className="form-label text-uppercase fw-semibold" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--text-main)' }}>
                          PREFERRED CONFIGURATION
                        </label>
                        <div className="input-group" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
                          <span className="input-group-text border-0 text-warning" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--gold-primary)', paddingLeft: '14px', paddingRight: '14px' }}>
                            <i className="bi bi-building"></i>
                          </span>
                          <select 
                            className="form-select bg-dark border-0 text-light py-2 shadow-none" 
                            style={{ backgroundColor: 'var(--bg-secondary)', fontSize: '0.88rem' }}
                            disabled={loading}
                            value={formData.unitSize}
                            onChange={(e) => setFormData({...formData, unitSize: e.target.value})}
                          >
                            <option value="3 BHK - 1789 Sq. Ft.">3 BHK – 1789 Sq. Ft.</option>
                            <option value="3 BHK - 1855 Sq. Ft.">3 BHK – 1855 Sq. Ft.</option>
                            <option value="3 BHK - 1952 Sq. Ft.">3 BHK – 1952 Sq. Ft.</option>
                            <option value="3 BHK - 2044 Sq. Ft.">3 BHK – 2044 Sq. Ft.</option>
                            <option value="3 BHK - 2284 Sq. Ft.">3 BHK – 2284 Sq. Ft.</option>
                            <option value="3 BHK - 2388 Sq. Ft.">3 BHK – 2388 Sq. Ft.</option>
                          </select>
                        </div>
                      </div>

                      {/* ADDITIONAL COMMENTS / REQUEST */}
                      <div className="col-12">
                        <label className="form-label text-uppercase fw-semibold" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--text-main)' }}>
                          ADDITIONAL COMMENTS / REQUEST
                        </label>
                        <div className="input-group" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
                          <span className="input-group-text border-0 text-warning align-items-start pt-3" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--gold-primary)', paddingLeft: '14px', paddingRight: '14px' }}>
                            <i className="bi bi-pencil"></i>
                          </span>
                          <textarea 
                            className="form-control bg-dark border-0 text-light shadow-none py-2" 
                            style={{ backgroundColor: 'var(--bg-secondary)', fontSize: '0.88rem' }}
                            rows="3" 
                            disabled={loading}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                          ></textarea>
                        </div>
                      </div>

                      {/* SUBMIT BUTTON */}
                      <div className="col-12 pt-2">
                        <button 
                          type="submit" 
                          className="btn btn-gold w-100 py-3 text-uppercase font-heading d-flex align-items-center justify-content-center gap-2"
                          style={{ 
                            borderRadius: '10px',
                            fontSize: '0.95rem'
                          }}
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              SUBMITTING... <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
                            </>
                          ) : (
                            <>
                              SUBMIT REQUEST <i className="bi bi-arrow-right fs-5"></i>
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  )}
                </div>

                {/* Footer Security Note */}
                <div className="pt-3 mt-3 border-top border-secondary border-opacity-25 text-center">
                  <p className="text-muted small mb-0 d-flex align-items-center justify-content-center gap-2" style={{ fontSize: '0.78rem', color: '#909090' }}>
                    <i className="bi bi-lock text-warning" style={{ fontSize: '0.85rem' }}></i> Your details are safe and confidential with Raghava Projects.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ReusablePopupModal;
