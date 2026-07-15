import React from 'react';
import { motion } from 'framer-motion';
import { brochureData } from '../data/brochureData';

const LocationAdvantages = ({ onOpenModal }) => {
  return (
    <section id="location" className="section-padding bg-secondary-dark position-relative">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5 max-w-desktop-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge mb-2">STRATEGIC ADDRESS</span>
          <h2 className="font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
            LOCATION ADVANTAGES & CONNECTIVITY
          </h2>
          <div className="gold-divider"></div>
          <p className="font-subheading text-warning italic mb-1" style={{ fontSize: '1.15rem' }}>
            "{brochureData.subTagline}"
          </p>
          <p className="text-muted max-w-desktop-desc mb-0" style={{ fontSize: '0.92rem' }}>
            Located in Neopolis, Kokapet — Hyderabad's premier ultra-luxury financial & tech hub.
          </p>
        </motion.div>

        {/* Main Location Row */}
        <div className="row g-4 align-items-stretch mb-5">
          
          {/* Location Map Image */}
          <div className="col-lg-7 text-center">
            <motion.div 
              className="glass-card p-0 border-warning border-opacity-30 overflow-hidden shadow-lg h-100 d-flex align-items-center justify-content-center position-relative"
              style={{ backgroundColor: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-gold)' }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={brochureData.locationMapImage} 
                alt="LINQ by Raghava location map - 3 bhk in gachibowli kokapet, financial district Hyderabad apartment projects near Hitech City" 
                className="w-100 h-100 object-fit-cover rounded-3"
                style={{ display: 'block' }}
              />
            </motion.div>
          </div>

          {/* Location Details Card */}
          <div className="col-lg-5">
            <motion.div 
              className="glass-card p-4 p-md-5 border-warning border-opacity-30 h-100 d-flex flex-column justify-content-between"
              style={{ backgroundColor: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-gold)' }}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div>
                <span className="subtitle-badge mb-3"><i className="bi bi-geo-alt-fill me-1"></i> Neopolis Destination</span>
                <h3 className="font-heading gold-gradient-text mb-3 h5">Neopolis, Kokapet, Hyderabad</h3>
                
                <p className="text-light opacity-75 mb-4" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                  LINQ by Raghava offers direct access to Neopolis' futuristic 36m & 45m wide internal roads, outer ring road interchange, and financial district business towers.
                </p>

                <div
                  className="rounded-3 border border-warning border-opacity-25 mb-4"
                  style={{ backgroundColor: 'var(--bg-secondary)', padding: '20px 22px' }}
                >
                  {/* Section heading */}
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="bi bi-pin-map-fill" style={{ color: '#B89B82', fontSize: '0.9rem' }}></i>
                    <h5
                      className="font-heading text-uppercase mb-0"
                      style={{ fontSize: '0.76rem', letterSpacing: '0.1em', color: '#B89B82', fontWeight: 700 }}
                    >
                      Key Corridor Highlights
                    </h5>
                  </div>

                  {/* Thin divider */}
                  <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '16px' }} />

                  {/* Highlight items */}
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                    {[
                      'Located right at Neopolis, Kokapet, Hyderabad',
                      'Direct access to ORR Exit No. 1 (Kokapet Interchange)',
                      'Unobstructed greenery & scenic Osman Sagar / Gandipet views',
                      'Minutes to Financial District, Amazon, Wipro & Microsoft Hubs',
                    ].map((item, i) => (
                      <li key={i} className="d-flex align-items-start gap-3">
                        <i
                          className="bi bi-check-circle-fill flex-shrink-0"
                          style={{ color: '#B89B82', fontSize: '0.85rem', marginTop: '2px' }}
                        ></i>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                className="btn btn-gold w-100 py-2.5 text-uppercase font-heading"
                style={{ fontSize: '0.85rem' }}
                onClick={() => onOpenModal("Book Site Visit")}
              >
                <i className="bi bi-compass me-2"></i> Schedule Location Site Visit
              </button>
            </motion.div>
          </div>

        </div>

        {/* Distance & Travel Time Matrix Grid */}
        <div className="pt-4 border-top border-secondary border-opacity-25">
          <motion.div 
            className="text-center mb-4 max-w-desktop-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="subtitle-badge mb-2">PROXIMITY MATRIX</span>
            <h3 className="font-heading text-light text-uppercase mb-2" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>Minutes To Everywhere</h3>
          </motion.div>

          <div className="row g-3">
            {brochureData.distances.map((item, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <motion.div 
                  className="glass-card p-3 border-warning border-opacity-20 bg-dark bg-opacity-60 d-flex align-items-center justify-content-between h-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle bg-dark border border-warning border-opacity-40 text-warning d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                      <i className={`bi ${item.icon} fs-6`}></i>
                    </div>
                    <div>
                      <h4 className="font-heading text-light h6 mb-0" style={{ fontSize: '0.9rem' }}>{item.destination}</h4>
                      <span className="text-muted small" style={{ fontSize: '0.78rem' }}>{item.distance}</span>
                    </div>
                  </div>
                  <span className="badge bg-warning text-dark font-heading px-2.5 py-1.5" style={{ fontSize: '0.75rem' }}>
                    {item.time}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationAdvantages;
