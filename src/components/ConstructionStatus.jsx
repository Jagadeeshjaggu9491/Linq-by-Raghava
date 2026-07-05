import React from 'react';
import { motion } from 'framer-motion';
import { CONSTRUCTION_TIMELINE, PROJECT_DETAILS } from '../data/propertyData';

export default function ConstructionStatus({ onOpenTourModal }) {
  return (
    <section id="construction-status" className="section-padding bg-secondary-dark position-relative border-top border-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <div className="subtitle-badge mb-3">
            <i className="bi bi-clock-history" style={{ color: '#F4D03F' }}></i>
            <span>Site Updates</span>
          </div>
          <h2 className="display-5 font-heading text-light mb-3">
            Construction <span className="gold-gradient-text">Progress & Timeline</span>
          </h2>
          <p className="text-muted lead fs-6">
            Real-time milestone tracking for {PROJECT_DETAILS.name}. Project handover scheduled for {PROJECT_DETAILS.possessionDate}.
          </p>
        </div>

        {/* Animated Timeline Cards */}
        <div className="row g-4">
          {CONSTRUCTION_TIMELINE.map((item, idx) => (
            <div key={item.id} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="glass-card h-100 p-4 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  backgroundColor: '#1B1B1B',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div>
                  {/* Timeline Header Badge & Date */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span 
                      className={`badge px-3 py-1 font-heading border ${
                        item.progress === 100 
                          ? 'bg-success bg-opacity-20 text-success border-success' 
                          : 'bg-warning bg-opacity-20 text-warning border-gold'
                      }`}
                      style={{ borderRadius: '50px', fontSize: '0.75rem' }}
                    >
                      {item.status}
                    </span>

                    <span className="text-muted small font-heading fw-bold">{item.date}</span>
                  </div>

                  <h5 className="font-heading text-light mb-2">{item.title}</h5>
                  <p className="text-muted small mb-4" style={{ lineHeight: '1.6', color: '#BBBBBB' }}>
                    {item.description}
                  </p>
                </div>

                {/* Progress Bar & Percentage Counter */}
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="text-muted small text-uppercase" style={{ fontSize: '0.7rem' }}>Completion</span>
                    <span className="gold-gradient-text font-heading fw-bold fs-6">{item.progress}%</span>
                  </div>

                  <div className="progress bg-dark border border-secondary" style={{ height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.15, ease: 'easeOut' }}
                      className="progress-bar gold-gradient-bg"
                      role="progressbar"
                      aria-valuenow={item.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Live Site Viewing Call to Action */}
        <div className="mt-5 text-center">
          <div className="glass-card p-4 d-inline-flex flex-wrap align-items-center justify-content-center gap-4 border-gold" style={{ borderRadius: '16px' }}>
            <div className="text-start">
              <h5 className="font-heading text-light mb-1">Want to inspect site progress in person?</h5>
              <p className="text-muted small m-0">Schedule an escorted VIP site walk with our Project Engineers.</p>
            </div>

            <button 
              onClick={onOpenTourModal}
              className="btn btn-gold py-3 px-4 font-heading d-flex align-items-center gap-2"
              style={{ borderRadius: '12px' }}
            >
              <i className="bi bi-camera-video-fill"></i>
              <span>Schedule Escorted Site Visit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
