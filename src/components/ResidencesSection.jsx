import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING_TABS } from '../data/propertyData';

export default function ResidencesSection({ onOpenTourModal, onOpenBrochureModal }) {
  const [activeTab, setActiveTab] = useState(PRICING_TABS[0].id);
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(null);

  const currentTab = PRICING_TABS.find(t => t.id === activeTab) || PRICING_TABS[0];

  return (
    <section id="residences" className="section-padding bg-primary-dark position-relative border-top border-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <div className="subtitle-badge mb-3">
            <i className="bi bi-tag-fill" style={{ color: '#F4D03F' }}></i>
            <span>Investment & Residences</span>
          </div>
          <h2 className="display-5 font-heading text-light mb-3">
            Premium <span className="gold-gradient-text">Pricing & Floor Plans</span>
          </h2>
          <p className="text-muted lead fs-6">
            Select your preferred configuration below to explore layout dimensions, key features, and instant pricing schedules.
          </p>
        </div>

        {/* Category Tabs: 2 BHK, 3 BHK, 4 BHK */}
        <div className="d-flex justify-content-center mb-5">
          <div className="glass-card p-2 d-inline-flex flex-wrap gap-2 justify-content-center border-gold" style={{ borderRadius: '16px' }}>
            {PRICING_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn btn-md px-4 py-2 font-heading transition-all ${
                  activeTab === tab.id 
                    ? 'btn-gold shadow-lg' 
                    : 'btn-outline-dark text-light border-0 hover-text-warning'
                }`}
                style={{ letterSpacing: '0.08em', borderRadius: '12px', minWidth: '110px' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="row g-4 justify-content-center">
          {PRICING_TABS.map((unit) => {
            const isActive = unit.id === activeTab;
            return (
              <div key={unit.id} className="col-md-6 col-lg-4">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card h-100 p-4 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  style={{
                    backgroundColor: isActive ? 'var(--bg-glass-card)' : 'var(--bg-card)',
                    border: isActive ? '1px solid var(--border-gold-light)' : '1px solid var(--border-subtle)',
                    borderRadius: '16px',
                    boxShadow: isActive 
                      ? 'var(--shadow-card-hover)' 
                      : 'var(--shadow-luxury)'
                  }}
                >
                  {/* Top Badge */}
                  {isActive && (
                    <span className="position-absolute top-0 end-0 m-3 badge gold-gradient-bg text-dark font-heading px-3 py-2" style={{ borderRadius: '8px' }}>
                      Most Selected
                    </span>
                  )}

                  <div>
                    {/* Configuration & Image */}
                    <div className="img-zoom-wrapper mb-4 border border-secondary" style={{ borderRadius: '12px', height: '200px' }}>
                      <img 
                        src={unit.image} 
                        alt={unit.config} 
                        className="img-fluid w-100 h-100 object-fit-cover" 
                        loading="lazy"
                      />
                    </div>

                    <h4 className="font-heading text-light mb-2">{unit.config}</h4>
                    <p className="text-muted small mb-3">Handcrafted residence with panoramic horizon views.</p>

                    {/* Area & Spec Specs Bar */}
                    <div className="p-3 mb-4 rounded-3 border border-secondary" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="text-muted small">Total Super Area:</span>
                        <span className="text-light fw-bold font-heading">{unit.area}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="text-muted small">Bedrooms:</span>
                        <span className="text-light fw-semibold">{unit.bedrooms} Ensuite</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="text-muted small">Target Handover:</span>
                        <span className="text-light fw-semibold">{unit.possession}</span>
                      </div>
                    </div>

                    {/* Price Tag */}
                    <div className="mb-4 text-center p-3 rounded-3" style={{ background: 'var(--gold-glow)', border: '1px solid var(--border-gold)' }}>
                      <span className="text-muted text-uppercase d-block small" style={{ fontSize: '0.7rem' }}>Starting Investment</span>
                      <div className="gold-gradient-text font-heading display-6 fw-bold m-0">{unit.price}</div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="d-flex flex-column gap-2 pt-2">
                    <button 
                      onClick={onOpenTourModal}
                      className="btn btn-gold w-100 py-3 font-heading fw-bold d-flex align-items-center justify-content-center gap-2"
                      style={{ borderRadius: '12px' }}
                    >
                      <i className="bi bi-tag-fill"></i>
                      <span>Get Price Breakdown</span>
                    </button>

                    <button 
                      onClick={() => setSelectedFloorPlan(unit.image)}
                      className="btn btn-outline-gold w-100 py-2 font-heading small d-flex align-items-center justify-content-center gap-2"
                      style={{ borderRadius: '12px' }}
                    >
                      <i className="bi bi-map"></i>
                      <span>View Floor Plan Blueprint</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Blueprint Lightbox Modal */}
      {selectedFloorPlan && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content text-light border border-gold" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '16px' }}>
              <div className="modal-header border-secondary">
                <h5 className="modal-title font-heading" style={{ color: 'var(--gold-primary)' }}>
                  Architectural Residence Blueprint
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setSelectedFloorPlan(null)}
                ></button>
              </div>
              <div className="modal-body text-center p-4">
                <img 
                  src={selectedFloorPlan} 
                  alt="Architectural Blueprint" 
                  className="img-fluid border border-secondary shadow-lg"
                  style={{ borderRadius: '12px' }}
                />
              </div>
              <div className="modal-footer border-secondary justify-content-between">
                <span className="text-muted small">Scale 1:100 Architectural Layout</span>
                <button className="btn btn-gold btn-sm" onClick={onOpenBrochureModal}>
                  Download High-Res PDF Blueprint
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
