import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { brochureData } from '../data/brochureData';

const ContactSection = ({ onOpenModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitSize: '3 BHK (1789 Sq. Ft.)',
    message: ''
  });

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
    <section
      id="contact"
      className="section-padding position-relative overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/brochure/img-p19-52-3500x2334.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 z-0"
        style={{
          backgroundColor: 'rgba(252, 250, 246, 0.88)',
          background: 'linear-gradient(rgba(252, 250, 246, 0.85) 0%, rgba(244, 236, 225, 0.9) 100%)'
        }}
      ></div>

      <div className="container position-relative z-1">

        {/* Section Header */}
        <motion.div 
          className="text-center mb-5 max-w-desktop-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge mb-2">GET IN TOUCH</span>
          <h2 className="font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
            CONTACT SALES TEAM
          </h2>
          <div className="gold-divider"></div>
          <p className="text-muted max-w-desktop-desc mb-0" style={{ fontSize: '0.92rem' }}>
            Direct Contact Information Extracted From The Official Raghava LINQ Brochure.
          </p>
        </motion.div>

        <div className="row g-4 align-items-stretch">

          {/* Contact Details Card - BG Image */}
          <div className="col-lg-5">
            <motion.div
              className="h-100 d-flex flex-column justify-content-between position-relative overflow-hidden shadow-lg"
              style={{
                borderRadius: '16px',
                backgroundImage: 'url("/assets/brochure/img-p13-34-2000x2000.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid var(--border-gold)',
                minHeight: '420px',
              }}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Dark overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: 'linear-gradient(160deg, rgba(28,22,18,0.82) 0%, rgba(28,22,18,0.58) 55%, rgba(28,22,18,0.78) 100%)',
                  borderRadius: '16px',
                  zIndex: 0,
                }}
              />
              {/* Gold shimmer glow */}
              <div
                className="position-absolute top-0 start-0 pointer-events-none"
                style={{
                  width: '240px', height: '240px',
                  background: 'radial-gradient(ellipse, rgba(184,155,130,0.18) 0%, transparent 70%)',
                  zIndex: 1,
                }}
              />

              <div className="position-relative p-4 p-md-5 d-flex flex-column justify-content-between h-100" style={{ zIndex: 2 }}>
                <div>
                  <span className="subtitle-badge mb-3">OFFICIAL HELPLINE</span>
                  <h3 className="font-heading mb-4 h5" style={{ color: '#fff' }}>Contact Details</h3>

                  <div className="d-flex align-items-start gap-3 mb-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '46px', height: '46px', backgroundColor: 'rgba(184,155,130,0.18)', border: '1px solid rgba(184,155,130,0.4)' }}>
                      <i className="bi bi-telephone-fill fs-6" style={{ color: '#D4A96A' }}></i>
                    </div>
                    <div>
                      <span className="d-block" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>BROCHURE CONTACT NUMBERS</span>
                      <a href={`tel:${brochureData.contact.phones[0]}`} className="h6 font-heading d-block text-decoration-none mb-1" style={{ color: '#D4A96A' }}>
                        {brochureData.contact.phones[0]}
                      </a>
                      <a href={`tel:${brochureData.contact.phones[1]}`} className="h6 font-heading d-block text-decoration-none mb-0" style={{ color: '#D4A96A' }}>
                        {brochureData.contact.phones[1]}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '46px', height: '46px', backgroundColor: 'rgba(184,155,130,0.18)', border: '1px solid rgba(184,155,130,0.4)' }}>
                      <i className="bi bi-whatsapp fs-6" style={{ color: '#D4A96A' }}></i>
                    </div>
                    <div>
                      <span className="d-block" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>WHATSAPP ENQUIRY</span>
                      <a href={`https://wa.me/${brochureData.contact.whatsapp}?text=Hi,%20I%20am%20interested%20in%20LINQ%20by%20Raghava`} target="_blank" rel="noreferrer" className="h6 font-heading d-block text-decoration-none" style={{ color: '#5dde7a' }}>
                        Chat on WhatsApp <i className="bi bi-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '46px', height: '46px', backgroundColor: 'rgba(184,155,130,0.18)', border: '1px solid rgba(184,155,130,0.4)' }}>
                      <i className="bi bi-geo-alt-fill fs-6" style={{ color: '#D4A96A' }}></i>
                    </div>
                    <div>
                      <span className="d-block" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>PROJECT LOCATION</span>
                      <p className="font-heading small mb-0" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                        Neopolis, Hyderabad, Telangana
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <button
                    className="btn w-100 py-2 text-uppercase font-heading"
                    style={{ fontSize: '0.85rem', border: '1px solid rgba(184,155,130,0.6)', color: '#D4A96A', backgroundColor: 'rgba(184,155,130,0.1)', borderRadius: '8px', letterSpacing: '0.05em' }}
                    onClick={() => onOpenModal("Book Site Visit")}
                  >
                    <i className="bi bi-calendar-check me-2"></i> Book VIP Site Visit
                  </button>
                </div>
              </div>
            </motion.div>
          </div>


          {/* Form Card */}
          <div className="col-lg-7">
            <motion.div
              className="glass-card p-4 p-md-5 border-warning border-opacity-30 shadow-lg"
              style={{ backgroundColor: 'var(--bg-glass-card)', borderRadius: '16px' }}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="subtitle-badge mb-3">INSTANT CALLBACK</span>
              <h3 className="font-heading gold-gradient-text mb-4 h5">Send An Enquiry</h3>

              {submitted ? (
                <div className="text-center py-5">
                  <div className="rounded-circle bg-warning bg-opacity-10 text-warning d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px', border: '2px solid #B89B82' }}>
                    <i className="bi bi-check-lg display-5"></i>
                  </div>
                  <h4 className="font-heading gold-gradient-text mb-2 h5">Enquiry Submitted!</h4>
                  <p className="text-muted mb-0 small">Thank you for contacting LINQ by Raghava. Our sales executive will call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="row g-3">
                  {error && (
                    <div className="col-12">
                      <div className="alert alert-danger border-danger border-opacity-25 bg-danger bg-opacity-10 text-danger small py-2 px-3" style={{ borderRadius: '8px' }}>
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>{error}
                      </div>
                    </div>
                  )}

                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold" style={{ fontSize: '0.75rem', color: 'var(--text-main)' }}>FULL NAME *</label>
                    <input
                      type="text"
                      className="form-control form-control-dark"
                      required
                      disabled={loading}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold" style={{ fontSize: '0.75rem', color: 'var(--text-main)' }}>MOBILE NUMBER *</label>
                    <input
                      type="tel"
                      className="form-control form-control-dark"
                      required
                      disabled={loading}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold" style={{ fontSize: '0.75rem', color: 'var(--text-main)' }}>EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      className="form-control form-control-dark"
                      required
                      disabled={loading}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold" style={{ fontSize: '0.75rem', color: 'var(--text-main)' }}>APARTMENT SIZE</label>
                    <select
                      className="form-select form-select-dark"
                      disabled={loading}
                      value={formData.unitSize}
                      onChange={e => setFormData({ ...formData, unitSize: e.target.value })}
                    >
                      <option value="3 BHK (1789 Sq. Ft.)">3 BHK - 1789 Sq. Ft.</option>
                      <option value="3 BHK (1855 Sq. Ft.)">3 BHK - 1855 Sq. Ft.</option>
                      <option value="3 BHK (1952 Sq. Ft.)">3 BHK - 1952 Sq. Ft.</option>
                      <option value="3 BHK (2044 Sq. Ft.)">3 BHK - 2044 Sq. Ft.</option>
                      <option value="3 BHK (2284 Sq. Ft.)">3 BHK - 2284 Sq. Ft.</option>
                      <option value="3 BHK (2388 Sq. Ft.)">3 BHK - 2388 Sq. Ft.</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-semibold" style={{ fontSize: '0.75rem', color: 'var(--text-main)' }}>MESSAGE / INQUIRY</label>
                    <textarea
                      className="form-control form-control-dark"
                      rows="3"
                      disabled={loading}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="col-12 pt-2">
                    <button type="submit" className="btn btn-gold w-100 py-2.5 text-uppercase font-heading" style={{ fontSize: '0.85rem' }} disabled={loading}>
                      {loading ? (
                        <>
                          Submitting... <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
                        </>
                      ) : (
                        <>
                          Submit Enquiry <i className="bi bi-send ms-2"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
