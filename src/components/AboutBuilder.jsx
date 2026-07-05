import React from 'react';
import { motion } from 'framer-motion';
import { brochureData } from '../data/brochureData';

const AboutBuilder = ({ onOpenModal }) => {
  return (
    <section id="builder" className="section-padding bg-primary-dark position-relative">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div 
              className="glass-card p-4 p-md-5 border-warning border-opacity-40 text-center position-relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <span className="subtitle-badge mb-3">DEVELOPER & BRAND</span>
              
              <h2 className="font-heading gold-gradient-text text-uppercase mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                {brochureData.builder}
              </h2>
              
              <div className="gold-divider"></div>
              
              <p className="font-subheading text-warning fst-italic mb-4" style={{ fontSize: '1.2rem' }}>
                "LINQ by Raghava — City Connected, Nature Surrounded."
              </p>

              <p className="text-light opacity-75 max-w-desktop-desc mx-auto mb-4" style={{ fontSize: '0.92rem', lineHeight: '1.65' }}>
                Raghava Projects is dedicated to creating landmark architectural developments that harmonize urban convenience with high-end luxury. LINQ by Raghava stands as a testament to engineering excellence and luxury living in Neopolis, Hyderabad.
              </p>

              <div className="row g-3 justify-content-center mb-4">
                <div className="col-12 col-sm-4">
                  <motion.div 
                    className="p-3 bg-dark rounded border border-secondary border-opacity-25"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h4 className="font-heading text-warning h6 mb-1">9.2 Acres</h4>
                    <span className="text-muted small" style={{ fontSize: '0.78rem' }}>Master Development</span>
                  </motion.div>
                </div>
                <div className="col-12 col-sm-4">
                  <motion.div 
                    className="p-3 bg-dark rounded border border-secondary border-opacity-25"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h4 className="font-heading text-warning h6 mb-1">4 Towers</h4>
                    <span className="text-muted small" style={{ fontSize: '0.78rem' }}>Iconic Architecture</span>
                  </motion.div>
                </div>
                <div className="col-12 col-sm-4">
                  <motion.div 
                    className="p-3 bg-dark rounded border border-secondary border-opacity-25"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h4 className="font-heading text-warning h6 mb-1">Neopolis</h4>
                    <span className="text-muted small" style={{ fontSize: '0.78rem' }}>Prime Hyderabad Location</span>
                  </motion.div>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button 
                  className="btn btn-gold px-4 py-2.5 font-heading text-uppercase"
                  style={{ fontSize: '0.85rem' }}
                  onClick={() => onOpenModal("Contact Us")}
                >
                  <i className="bi bi-headset me-2"></i> Contact Developer Sales
                </button>
                <button 
                  className="btn btn-outline-gold px-4 py-2.5 font-heading text-uppercase"
                  style={{ fontSize: '0.85rem' }}
                  onClick={() => onOpenModal("Get Brochure")}
                >
                  <i className="bi bi-file-earmark-pdf me-2"></i> Download Official Brochure
                </button>
              </div>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBuilder;
