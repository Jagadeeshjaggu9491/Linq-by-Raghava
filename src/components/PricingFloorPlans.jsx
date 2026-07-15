import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { brochureData } from '../data/brochureData';

const PricingFloorPlans = ({ onOpenModal }) => {
  const [selectedTower, setSelectedTower] = useState('towerA');

  const towerKeys = [
    { id: 'towerA', name: 'Tower A' },
    { id: 'towerB', name: 'Tower B' },
    { id: 'towerC', name: 'Tower C' },
    { id: 'towerD', name: 'Tower D' }
  ];

  const activeTowerData = brochureData.floorPlans[selectedTower];

  return (
    <section id="pricing" className="section-padding bg-secondary-dark position-relative">
      <div className="container">

        {/* Section Header */}
        <motion.div 
          className="text-center mb-5 max-w-desktop-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge mb-2">CONFIGURATIONS & PRICING</span>
          <h2 className="font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
            PRICE & FLOOR PLANS
          </h2>
          <div className="gold-divider"></div>
          <p className="font-subheading text-warning italic mb-1" style={{ fontSize: '1.25rem' }}>
            "{brochureData.viewHeadline}"
          </p>
          <p className="text-muted max-w-desktop-desc mb-0" style={{ fontSize: '0.92rem' }}>
            Starting from <strong className="text-warning font-heading" style={{ fontSize: '1.1rem' }}>{brochureData.pricing.startingPrice}</strong>
          </p>
        </motion.div>

        {/* Pricing Structure Table Card */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <motion.div 
              className="glass-card p-4 p-md-5 border-warning border-opacity-30 shadow-lg"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="font-heading text-warning text-center text-uppercase mb-4 h5" style={{ letterSpacing: '0.05em' }}>
                Brochure Pricing Matrix (Per Sq. Ft.)
              </h3>
              <div className="table-responsive">
                <table className="table table-hover align-middle border-secondary border-opacity-25 mb-0">
                  <thead className="table-light">
                    <tr className="border-bottom border-warning border-opacity-40" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <th className="font-heading text-warning py-3.5 px-4 text-uppercase" style={{ fontSize: '0.78rem', letterSpacing: '0.08em' }}>
                        Cost Component
                      </th>
                      <th className="font-heading text-warning text-end py-3.5 px-4 text-uppercase" style={{ fontSize: '0.78rem', letterSpacing: '0.08em' }}>
                        Brochure Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {brochureData.pricing.breakdown.map((item, idx) => (
                      <tr key={idx} className="border-bottom border-secondary border-opacity-20" style={{ transition: 'background-color 0.2s ease' }}>
                        <td className="py-3.5 px-4 font-heading text-light" style={{ fontSize: '0.88rem', letterSpacing: '0.03em' }}>
                          {item.label}
                        </td>
                        <td className="py-3.5 px-4 text-end fw-bold text-warning" style={{ fontSize: '0.92rem', color: '#B89B82' }}>
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-4 pt-2">
                <button
                  className="btn btn-gold px-4 py-2.5 font-heading text-uppercase shadow-lg"
                  style={{ fontSize: '0.85rem' }}
                  onClick={() => onOpenModal("Request Price")}
                >
                  <i className="bi bi-tag me-2"></i> Request Detailed Cost Sheet
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floor Plan Display Section */}
        <div className="pt-4">
          <motion.div 
            className="text-center mb-4 max-w-desktop-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="subtitle-badge mb-2">TOWER LAYOUTS</span>
            <h3 className="font-heading text-light text-uppercase mb-3" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>Authentic PDF Floor Plans</h3>
          </motion.div>

          {/* Tower Selector Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {towerKeys.map((tower) => (
              <button
                key={tower.id}
                className={`btn ${selectedTower === tower.id ? 'btn-gold' : 'btn-outline-gold'} px-3 py-2 font-heading`}
                style={{ fontSize: '0.82rem' }}
                onClick={() => setSelectedTower(tower.id)}
              >
                {tower.name} Floor Plan
              </button>
            ))}
          </div>

          {/* Active Tower Floor Plan Card */}
          <motion.div
            key={selectedTower}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-4 p-md-5 border-warning border-opacity-30"
          >
            <div className="row align-items-center">

              {/* Floor Plan Image */}
              <div className="col-lg-7 text-center mb-4 mb-lg-0">
                <div className="bg-dark p-2 rounded border border-warning border-opacity-25 img-zoom-wrapper position-relative">
                  <img
                    src={activeTowerData.image}
                    alt={`Linq by Raghava ${activeTowerData.name} Floor Plan - Luxury 3 BHK apartment at Neopolis Kokapet Financial District`}
                    className="w-100 h-auto rounded"
                    style={{ maxHeight: '650px', objectFit: 'contain' }}
                  />
                  <div className="position-absolute bottom-0 end-0 m-3">
                    <button
                      className="btn btn-gold btn-sm font-heading shadow"
                      style={{ fontSize: '0.78rem' }}
                      onClick={() => onOpenModal("Download Floor Plan")}
                    >
                      <i className="bi bi-zoom-in me-1"></i> High-Res PDF Plan
                    </button>
                  </div>
                </div>
              </div>

              {/* Unit Configurations List with Generous Breathing Space */}
              <div className="col-lg-5">
                <h4 className="font-heading gold-gradient-text mb-2 h5">{activeTowerData.name} Configurations</h4>
                <p className="text-muted small mb-4" style={{ fontSize: '0.82rem' }}>Unit sizes and orientations available directly from the brochure:</p>

                <div className="d-flex flex-column gap-3 max-vh-50 overflow-y-auto pe-2" style={{ maxHeight: '480px' }}>
                  {activeTowerData.units.map((u, i) => (
                    <div
                      key={i}
                      className="bg-dark p-3 px-3.5 rounded-3 border border-secondary border-opacity-25 d-flex align-items-center justify-content-between"
                      style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
                    >
                      <div className="d-flex align-items-center gap-2.5">
                        <span
                          className="badge bg-warning text-dark me-2 font-heading px-2.5 py-1.5 rounded-2"
                          style={{ fontSize: '0.75rem', fontWeight: 700 }}
                        >
                          {u.unit}
                        </span>
                        <span className="fw-semibold text-light" style={{ fontSize: '0.88rem' }}>{u.type}</span>
                      </div>
                      <span className="text-warning fw-bold font-heading" style={{ fontSize: '0.88rem', color: '#B89B82', letterSpacing: '0.04em' }}>
                        {u.area}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 d-grid gap-2">
                  <button
                    className="btn btn-gold py-2.5 text-uppercase font-heading"
                    style={{ fontSize: '0.85rem' }}
                    onClick={() => onOpenModal("Download Floor Plan")}
                  >
                    <i className="bi bi-download me-2"></i> Download {activeTowerData.name} Plan
                  </button>
                  <button
                    className="btn btn-outline-gold py-2 text-uppercase font-heading"
                    style={{ fontSize: '0.82rem' }}
                    onClick={() => onOpenModal("Book Site Visit")}
                  >
                    Book Site Visit For {activeTowerData.name}
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PricingFloorPlans;
