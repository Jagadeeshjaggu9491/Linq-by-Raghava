import React from 'react';
import { motion } from 'framer-motion';
import { LOCATION_CARDS, PROJECT_DETAILS } from '../data/propertyData';

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-primary-dark position-relative border-top border-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <div className="subtitle-badge mb-3">
            <i className="bi bi-geo-alt-fill" style={{ color: '#F4D03F' }}></i>
            <span>Prime Connectivity</span>
          </div>
          <h2 className="display-5 font-heading text-light mb-3">
            Strategic <span className="gold-gradient-text">Location & Landmarks</span>
          </h2>
          <p className="text-muted lead fs-6">
            Situated at the heart of {PROJECT_DETAILS.location}, offering effortless proximity to transit, education, healthcare, and retail.
          </p>
        </div>

        {/* Split Layout: Left Map Placeholder & Right Location Cards */}
        <div className="row g-5 align-items-stretch">
          {/* LEFT SIDE: Interactive Dark Google Map Placeholder */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-4 border-gold h-100 d-flex flex-column justify-content-between"
              style={{ borderRadius: '16px' }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h4 className="font-heading text-light m-0">Neighborhood Map</h4>
                  <span className="badge bg-warning bg-opacity-20 border border-gold text-warning font-heading px-3 py-1" style={{ borderRadius: '50px' }}>
                    GPS Coordinates Active
                  </span>
                </div>

                <div 
                  className="position-relative rounded-4 overflow-hidden border border-secondary mb-4 shadow-lg" 
                  style={{ height: '380px' }}
                >
                  {/* Google Map Dark Embedded Preview */}
                  <iframe
                    title="Aurelia Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.74838634125!2d55.132867!3d25.114777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f153e3609c32d%3A0xcc12d97378229b46!2sPalm%20Jumeirah!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Marker Pin Overlay */}
                  <div className="position-absolute top-50 start-50 translate-middle pointer-events-none text-center">
                    <div className="pulse-pin d-inline-flex align-items-center justify-content-center bg-warning text-dark rounded-circle p-3 shadow-lg border border-light">
                      <i className="bi bi-building-fill fs-4"></i>
                    </div>
                    <div className="mt-1 glass-card py-1 px-3 border-gold text-light font-heading fs-6 fw-bold shadow-lg" style={{ borderRadius: '8px' }}>
                      {PROJECT_DETAILS.name}
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 pt-2 border-top border-secondary">
                <div>
                  <span className="text-muted small text-uppercase d-block">Address</span>
                  <span className="text-light fw-medium small">{PROJECT_DETAILS.location}</span>
                </div>

                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold btn-sm d-inline-flex align-items-center gap-2"
                  style={{ borderRadius: '10px' }}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Open Full Google Maps</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Location Cards (Metro, Airport, School, Hospital, Mall, IT Park) */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              {LOCATION_CARDS.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="glass-card p-3 border-gold-glow d-flex align-items-center justify-content-between"
                  style={{ borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="gold-gradient-bg text-dark rounded-circle p-2 d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                      style={{ width: '44px', height: '44px' }}
                    >
                      <i className={`bi ${card.icon} fs-5`}></i>
                    </div>

                    <div>
                      <span className="text-muted text-uppercase d-block" style={{ fontSize: '0.68rem', letterSpacing: '0.08em', color: '#F4D03F' }}>
                        {card.category}
                      </span>
                      <h6 className="font-heading text-light m-0 fs-6">{card.name}</h6>
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>{card.detail}</small>
                    </div>
                  </div>

                  <span className="badge border border-gold font-heading px-3 py-2 flex-shrink-0" style={{ color: 'var(--gold-primary)', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', fontSize: '0.85rem' }}>
                    {card.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
