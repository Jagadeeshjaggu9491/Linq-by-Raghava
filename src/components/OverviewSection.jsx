import React from 'react';
import { motion } from 'framer-motion';
import { PROJECT_DETAILS } from '../data/propertyData';

const FEATURES_LIST = [
  "Triple-Height Italian Statuario Marble Lobby",
  "14ft Double-Height Acoustic Glass Curtain Walls",
  "Integrated Crestron Smart Home Automation",
  "Private Heated Plunge Pools on Every Sky Villa Deck",
  "Rooftop Helipad & Private Executive Transit Base",
  "24/7 White-Glove European Concierge & Butler Service"
];

export default function OverviewSection({ onOpenVideoModal, onOpenBrochureModal }) {
  return (
    <section id="overview" className="section-padding bg-primary-dark position-relative border-top border-secondary">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT COLUMN: Large Project Image with Reveal Animation */}
          <div className="col-lg-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="position-relative"
            >
              <div 
                className="img-zoom-wrapper shadow-lg position-relative border border-secondary overflow-hidden" 
                style={{ borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=90" 
                  alt="Aurelia Grand Residence Architecture"
                  className="img-fluid w-100 object-fit-cover"
                  style={{ minHeight: '520px', maxHeight: '600px' }}
                  loading="lazy"
                />

                {/* 4K Video Tour Overlay Trigger */}
                <div className="position-absolute top-50 start-50 translate-middle text-center z-2">
                  <button 
                    onClick={onOpenVideoModal}
                    className="btn btn-gold rounded-circle d-inline-flex align-items-center justify-content-center p-0 shadow-lg"
                    style={{ width: '84px', height: '84px' }}
                    aria-label="Play Virtual Video Tour"
                  >
                    <i className="bi bi-play-fill display-5 text-dark ms-1"></i>
                  </button>
                  <div className="mt-3 text-light fw-semibold text-uppercase tracking-wider small bg-dark bg-opacity-80 px-3 py-2 rounded-pill border border-gold">
                    Watch 4K Cinematic Tour
                  </div>
                </div>

                {/* Dark Gradient Tint */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(10,10,10,0.65) 100%)' }}
                ></div>
              </div>

              {/* Floating Architectural Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="glass-card position-absolute bottom-0 end-0 m-4 p-3 d-none d-sm-block border-gold"
                style={{ backdropFilter: 'blur(16px)', borderRadius: '16px', maxWidth: '290px', zIndex: 3 }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div className="gold-gradient-bg text-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '46px', height: '46px' }}>
                    <i className="bi bi-award-fill fs-5"></i>
                  </div>
                  <div>
                    <h6 className="m-0 font-heading text-light fs-6">Best High-Rise Icon</h6>
                    <small style={{ color: 'var(--gold-primary)' }}>World Architecture Awards 2026</small>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Heading, Description, Feature List, Brochure Button */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Subtitle Badge */}
              <div className="subtitle-badge mb-3">
                <i className="bi bi-info-circle-fill" style={{ color: '#F4D03F' }}></i>
                <span>About The Project</span>
              </div>

              {/* Heading */}
              <h2 className="display-5 font-heading text-light mb-4">
                Redefining Sky Living Through <span className="gold-gradient-text">Unrivaled Luxury</span>
              </h2>

              {/* Description */}
              <p className="text-muted lead fs-6 mb-4" style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Handcrafted by world-renowned architectural visionaries, {PROJECT_DETAILS.name} stands as an iconic 52-storey sanctuary on Palm Jumeirah. Every residence is meticulously engineered with double-height ceiling volumes, private cantilevered plunge pools, and uninterrupted 360° ocean horizon vistas.
              </p>

              {/* Feature List */}
              <div className="row g-3 mb-4">
                {FEATURES_LIST.map((feature, idx) => (
                  <div key={idx} className="col-12 col-sm-6">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="d-flex align-items-center gap-3 p-2 rounded-3"
                      style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
                    >
                      <div className="gold-gradient-bg text-dark rounded-circle p-1 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '28px', height: '28px' }}>
                        <i className="bi bi-check-lg fw-bold fs-6"></i>
                      </div>
                      <span className="text-light small fw-medium">{feature}</span>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3 pt-3 border-top border-secondary">
                <button 
                  onClick={onOpenBrochureModal}
                  className="btn btn-gold btn-lg d-inline-flex align-items-center gap-2 py-3 px-4"
                  style={{ borderRadius: '12px', fontSize: '0.92rem' }}
                >
                  <i className="bi bi-download fs-5"></i>
                  <span>Download E-Brochure</span>
                </button>

                <button 
                  onClick={onOpenVideoModal}
                  className="btn btn-outline-gold btn-lg d-inline-flex align-items-center gap-2 py-3 px-4"
                  style={{ borderRadius: '12px', fontSize: '0.92rem' }}
                >
                  <i className="bi bi-play-circle-fill fs-5"></i>
                  <span>Watch Video Tour</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
