import React from 'react';
import { motion } from 'framer-motion';
import { brochureData } from '../data/brochureData';
import masterPlanImg from '../assets/master-plan.png';

const MasterPlan = ({ onOpenModal }) => {
  return (
    <section id="master-plan" className="section-padding bg-primary-dark position-relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5 max-w-desktop-header">
          <span className="subtitle-badge mb-2">ARCHITECTURAL BLUEPRINT</span>
          <h2 className="font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
            MASTER PLAN
          </h2>
          <div className="gold-divider"></div>
          <p className="text-muted max-w-desktop-desc mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.65' }}>
            Spread across <strong className="text-warning font-semibold">9.2 Acres</strong>, LINQ by Raghava seamlessly integrates <strong className="text-warning font-semibold">4 iconic residential towers</strong> with expansive green open spaces and <strong className="text-warning font-semibold">Club LINQ</strong>.
          </p>
        </div>

        {/* Row with Equal Heights align-items-stretch */}
        <div className="row g-4 align-items-stretch">
          
          {/* Master Plan 3D Image Column - Zero Padding Edge to Edge */}
          <div className="col-lg-6 text-center">
            <div 
              className="glass-card p-0 border-warning border-opacity-30 overflow-hidden shadow-lg h-100 d-flex align-items-center justify-content-center position-relative"
              style={{ backgroundColor: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-gold)' }}
            >
              <img 
                src={masterPlanImg} 
                alt="LINQ by Raghava Master Plan 3D Render" 
                className="w-100 h-100 object-fit-cover rounded-3"
                style={{ display: 'block' }}
              />
            </div>
          </div>

          {/* Master Plan Elements Column */}
          <div className="col-lg-6">
            <div 
              className="glass-card p-4 p-md-5 border-warning border-opacity-30 h-100 d-flex flex-column justify-content-between"
              style={{ backgroundColor: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-gold)' }}
            >
              <div>
                {/* Badge */}
                <div className="mb-3">
                  <span className="subtitle-badge mb-0">KEY SITE ELEMENTS</span>
                </div>

                {/* Card Title */}
                <h3 
                  className="font-heading gold-gradient-text mb-4 text-uppercase"
                  style={{ fontSize: '1.25rem', letterSpacing: '0.04em' }}
                >
                  SITE ZONING & TOWERS
                </h3>

                {/* 5 Site Elements List with Spacing */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {brochureData.masterPlan.elements.map((elem, idx) => (
                    <motion.div 
                      key={idx} 
                      className="p-3 rounded-3 d-flex align-items-center justify-content-between"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)', 
                        border: '1px solid var(--border-subtle)' 
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.06 }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div 
                          className="rounded-3 font-heading fw-bold d-flex align-items-center justify-content-center text-dark"
                          style={{ 
                            width: '32px', 
                            height: '32px', 
                            background: 'linear-gradient(135deg, #B89B82 0%, #7B614E 100%)',
                            fontSize: '0.85rem' 
                          }}
                        >
                          {idx + 1}
                        </div>
                        <span className="font-heading text-light fw-semibold" style={{ fontSize: '0.95rem', letterSpacing: '0.04em' }}>
                          {elem}
                        </span>
                      </div>

                      <span 
                        className="badge px-2.5 py-1.5 rounded-pill font-heading d-inline-flex align-items-center gap-1"
                        style={{ 
                          backgroundColor: 'rgba(184, 155, 130, 0.08)', 
                          border: '1px solid rgba(184, 155, 130, 0.3)',
                          color: '#B89B82',
                          fontSize: '0.72rem',
                          fontWeight: 500
                        }}
                      >
                        <i className="bi bi-shield-check" style={{ fontSize: '0.78rem' }}></i> Brochure Verified
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                {/* Information Note Box */}
                <div 
                  className="p-3 rounded-3 mb-4 d-flex align-items-start gap-2"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    lineHeight: '1.5'
                  }}
                >
                  <i className="bi bi-info-circle text-warning mt-0.5 fs-6 flex-shrink-0" style={{ color: '#B89B82' }}></i>
                  <span>The 9.2-acre master plan layout ensures unhindered views, maximum natural ventilation, and dedicated vehicular-free zones for children and residents.</span>
                </div>

                {/* Action Button */}
                <button 
                  className="btn btn-gold w-100 py-2.5 text-uppercase font-heading d-flex align-items-center justify-content-center gap-2"
                  style={{ 
                    borderRadius: '8px',
                    fontSize: '0.85rem'
                  }}
                  onClick={() => onOpenModal("Get Brochure")}
                >
                  <i className="bi bi-file-earmark-pdf fs-6"></i> REQUEST MASTER PLAN PDF
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MasterPlan;
