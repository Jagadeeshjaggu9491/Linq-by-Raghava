import React from 'react';
import { motion } from 'framer-motion';
import { brochureData } from '../data/brochureData';

const ProjectHighlights = ({ onOpenModal }) => {
  return (
    <section id="highlights" className="section-padding bg-secondary-dark position-relative overflow-hidden">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5 max-w-desktop-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge mb-2">BROCHURE VERIFIED FACTS</span>
          <h2 className="h3 font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
            PROJECT HIGHLIGHTS
          </h2>
          <div className="gold-divider"></div>
          <p className="text-muted max-w-desktop-desc mb-0" style={{ fontSize: '0.92rem' }}>
            LINQ by Raghava brings together expansive green spaces, architectural elegance, and supreme connectivity in Neopolis.
          </p>
        </motion.div>

        <div className="row g-4">
          {brochureData.highlights.map((item, index) => (
            <div className="col-6 col-md-6 col-lg-4" key={index}>
              <motion.div 
                className="glass-card p-4 h-100 position-relative d-flex flex-column justify-content-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <div className="rounded-circle bg-dark border border-warning border-opacity-50 d-inline-flex align-items-center justify-content-center text-warning mb-3" style={{ width: '54px', height: '54px' }}>
                    <i className={`bi ${item.icon} fs-4`}></i>
                  </div>
                  <h3 className="h5 font-heading text-light mb-1">{item.title}</h3>
                  <p className="text-warning small fw-semibold text-uppercase mb-3" style={{ letterSpacing: '1px', fontSize: '0.78rem' }}>{item.subtitle}</p>
                </div>
                <div className="pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
                  <span className="text-muted small" style={{ fontSize: '0.8rem' }}>LINQ by Raghava</span>
                  <i className="bi bi-arrow-right-short text-warning fs-5"></i>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA Bar inside highlights */}
        <motion.div 
          className="mt-5 p-4 glass-card border-warning border-opacity-30 text-center bg-dark bg-opacity-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8 text-lg-start mb-3 mb-lg-0">
              <h4 className="font-heading gold-gradient-text mb-1 h5">Looking for detailed floor plan layouts & pricing breakdown?</h4>
              <p className="text-muted mb-0 small" style={{ fontSize: '0.88rem' }}>Download the complete brochure directly or schedule an exclusive site visit.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button 
                className="btn btn-gold px-4 py-2 font-heading text-uppercase"
                style={{ fontSize: '0.82rem' }}
                onClick={() => onOpenModal("Get Brochure")}
              >
                Request Brochure PDF
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectHighlights;
