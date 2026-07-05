import React from 'react';
import { motion } from 'framer-motion';
import { brochureData } from '../data/brochureData';

const ProjectSpecifications = ({ onOpenModal }) => {
  return (
    <section id="specifications" className="section-padding bg-primary-dark position-relative">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5 max-w-desktop-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge mb-2">ENGINEERING EXCELLENCE</span>
          <h2 className="font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
            PROJECT SPECIFICATIONS
          </h2>
          <div className="gold-divider"></div>
          <p className="text-muted max-w-desktop-desc mb-0" style={{ fontSize: '0.92rem' }}>
            Built to international standards with earthquake-resistant Mivan structure & high-end luxury finishes.
          </p>
        </motion.div>

        {/* Specifications Grid */}
        <div className="row g-4">
          {brochureData.specifications.map((spec, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <motion.div 
                className="glass-card p-4 h-100 d-flex flex-column justify-content-between border-warning border-opacity-25"
                style={{ backgroundColor: 'var(--bg-card)', borderRadius: '14px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div 
                      className="rounded-circle bg-dark border border-warning border-opacity-50 text-warning d-flex align-items-center justify-content-center"
                      style={{ width: '46px', height: '46px' }}
                    >
                      <i className={`bi ${spec.icon} fs-5`}></i>
                    </div>
                    <h3 className="font-heading text-light h6 mb-0" style={{ fontSize: '0.95rem', letterSpacing: '0.03em' }}>
                      {spec.title}
                    </h3>
                  </div>

                  <p className="text-muted mb-0" style={{ fontSize: '0.84rem', lineHeight: '1.6' }}>
                    {spec.detail}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-top border-secondary border-opacity-20 d-flex align-items-center justify-content-between">
                  <span className="text-warning small font-heading" style={{ fontSize: '0.72rem' }}>
                    <i className="bi bi-shield-check me-1"></i> Quality Standard
                  </span>
                  <span className="badge bg-dark text-muted border border-secondary border-opacity-30" style={{ fontSize: '0.68rem' }}>
                    Verified Spec
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* RERA Approval & Download Specs Bar */}
        <motion.div 
          className="mt-5 p-4 glass-card border-warning border-opacity-30 text-center bg-dark bg-opacity-70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8 text-lg-start mb-3 mb-lg-0">
              <span className="badge bg-warning text-dark font-heading mb-2" style={{ fontSize: '0.75rem' }}>OFFICIAL RERA APPROVAL</span>
              <h4 className="font-heading text-light h5 mb-1">{brochureData.reraNo}</h4>
              <p className="text-muted mb-0 small" style={{ fontSize: '0.85rem' }}>
                All specifications, floor plans, and amenities are legally registered under Telangana RERA guidelines.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button 
                className="btn btn-gold px-4 py-2.5 font-heading text-uppercase"
                style={{ fontSize: '0.82rem' }}
                onClick={() => onOpenModal("Get Brochure")}
              >
                <i className="bi bi-file-earmark-pdf me-2"></i> Download Full Specs PDF
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectSpecifications;
