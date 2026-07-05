import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MASTER_PLAN_DATA } from '../data/propertyData';

export default function MasterPlanSection({ onOpenBrochureModal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="master-plan" className="section-padding bg-secondary-dark position-relative border-top border-secondary">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-700 mx-auto mb-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="subtitle-badge mb-3">
            <i className="bi bi-diagram-3-fill" style={{ color: '#F4D03F' }}></i>
            <span>Site Layout</span>
          </div>
          <h2 className="display-5 font-heading text-light mb-3">
            {MASTER_PLAN_DATA.title}
          </h2>
          <p className="text-muted lead fs-6">
            {MASTER_PLAN_DATA.description}
          </p>
        </motion.div>

        <div className="row align-items-center g-5">
          {/* Large Master Plan Image with Luxury Overlay & Zoom Animation */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="position-relative overflow-hidden cursor-pointer"
              style={{ borderRadius: '16px', border: '1px solid var(--border-gold)' }}
              onClick={() => setIsModalOpen(true)}
            >
              <div className="img-zoom-wrapper shadow-lg position-relative" style={{ height: '480px' }}>
                <img
                  src={MASTER_PLAN_DATA.image}
                  alt="Aurelia Master Plan Layout"
                  className="img-fluid w-100 object-fit-cover"
                  loading="lazy"
                />

                {/* Luxury Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-4"
                  style={{
                    background: 'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 100%)',
                    transition: 'all 0.4s ease'
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-dark bg-opacity-80 px-3 py-2 font-heading border border-gold" style={{ color: '#F4D03F', borderRadius: '8px' }}>
                      3.5 Acres Master Blueprint
                    </span>
                    <span className="text-light small d-flex align-items-center gap-1">
                      <i className="bi bi-arrows-fullscreen" style={{ color: '#F4D03F' }}></i> Click to expand
                    </span>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                      className="btn btn-gold btn-lg d-inline-flex align-items-center gap-2 py-3 px-4 shadow-lg"
                      style={{ borderRadius: '12px', fontSize: '0.92rem' }}
                    >
                      <i className="bi bi-zoom-in fs-5"></i>
                      <span>View Full Master Plan</span>
                    </button>
                  </div>

                  <div className="d-flex align-items-center justify-content-between text-muted small">
                    <span>Scale 1:500 Master Plan</span>
                    <span>Approved by Palm Development Authority</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Master Plan Key Legend */}
          <div className="col-lg-4">
            <div className="glass-card p-4 border-gold" style={{ borderRadius: '16px' }}>
              <h4 className="font-heading text-light mb-4">Master Plan Legend</h4>

              <div className="d-flex flex-column gap-3 mb-4">
                {MASTER_PLAN_DATA.legend.map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
                    <div
                      className="gold-gradient-bg text-dark rounded-circle fw-bold d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: '36px', height: '36px', fontSize: '0.85rem' }}
                    >
                      {item.num}
                    </div>
                    <span className="text-light small fw-medium">{item.name}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenBrochureModal}
                className="btn btn-outline-gold w-100 py-3 font-heading small d-flex align-items-center justify-content-center gap-2"
                style={{ borderRadius: '12px' }}
              >
                <i className="bi bi-file-earmark-pdf-fill"></i>
                <span>Download Master Plan PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Large Image Full-Screen Lightbox Modal */}
      {isModalOpen && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)', zIndex: 1070 }}
          tabIndex="-1"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content text-light border border-gold" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '16px' }}>
              <div className="modal-header border-secondary">
                <h5 className="modal-title font-heading" style={{ color: 'var(--gold-primary)' }}>
                  {MASTER_PLAN_DATA.title} - High Resolution Blueprint
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body text-center p-3">
                <img
                  src={MASTER_PLAN_DATA.image}
                  alt="Full Master Plan Blueprint"
                  className="img-fluid rounded border border-secondary shadow-lg object-fit-contain"
                  style={{ maxHeight: '78vh' }}
                />
              </div>
              <div className="modal-footer border-secondary justify-content-between">
                <span className="text-muted small">Scale 1:500 High-Res Master Architectural Plan</span>
                <button className="btn btn-gold btn-sm" onClick={() => { setIsModalOpen(false); onOpenBrochureModal(); }}>
                  Request Printed Masterbook
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
