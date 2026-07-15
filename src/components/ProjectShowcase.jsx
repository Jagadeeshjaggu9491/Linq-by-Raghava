import React from 'react';
import { motion } from 'framer-motion';
import { brochureData } from '../data/brochureData';

const ProjectShowcase = ({ onOpenModal }) => {
  return (
    <section id="showcase" className="section-padding bg-secondary-dark position-relative">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5 max-w-desktop-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge mb-2">ARCHITECTURAL ELEVATIONS</span>
          <h2 className="font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
            PROJECT SHOWCASE
          </h2>
          <div className="gold-divider"></div>
          <p className="text-muted max-w-desktop-desc mb-0" style={{ fontSize: '0.92rem' }}>
            Tower renders and architectural perspectives of LINQ by Raghava.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="row g-4">
          {brochureData.showcaseImages.map((item, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <motion.div 
                className="glass-card p-3 border-warning border-opacity-30 h-100 d-flex flex-column justify-content-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div className="img-zoom-wrapper rounded mb-3">
                  <img 
                    src={item.src} 
                    alt={`${item.title} - Linq by Raghava Tallest tower of Hyderabad, Luxury Apartment in Hyderabad by Raghava builder`} 
                    className="w-100 object-fit-cover rounded" 
                    style={{ height: '320px' }}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between pt-2 border-top border-secondary border-opacity-25">
                  <div>
                    <span className="badge bg-warning text-dark font-heading mb-1" style={{ fontSize: '0.7rem' }}>{item.label}</span>
                    <h4 className="font-heading text-light h6 mb-0">{item.title}</h4>
                  </div>
                  <button 
                    className="btn btn-outline-gold btn-sm font-heading"
                    style={{ fontSize: '0.78rem' }}
                    onClick={() => onOpenModal("Book Site Visit")}
                  >
                    Site Visit <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectShowcase;
