import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/propertyData';

export default function FaqSection() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0].id);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-primary-dark position-relative border-top border-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <div className="subtitle-badge mb-3">
            <i className="bi bi-question-circle-fill" style={{ color: '#F4D03F' }}></i>
            <span>Got Questions?</span>
          </div>
          <h2 className="display-5 font-heading text-light mb-3">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-muted lead fs-6">
            Find answers regarding RERA registration, payment plans, possession timelines, and site visit schedules.
          </p>
        </div>

        {/* Dark Accordion with Gold Active Borders */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="d-flex flex-column gap-3">
              {FAQ_ITEMS.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="glass-card overflow-hidden transition-all"
                    style={{
                      backgroundColor: '#1B1B1B',
                      borderRadius: '16px',
                      border: isOpen ? '1px solid rgba(244, 208, 63, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: isOpen ? '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(244, 208, 63, 0.2)' : 'none'
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-100 p-4 border-0 text-start bg-transparent d-flex align-items-center justify-content-between gap-3 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-light fs-5 fw-semibold">
                        {faq.question}
                      </span>
                      <div 
                        className={`gold-gradient-bg text-dark rounded-circle p-2 d-flex align-items-center justify-content-center flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        style={{ width: '36px', height: '36px', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.4s ease' }}
                      >
                        <i className="bi bi-chevron-down fw-bold fs-6"></i>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-4 pb-4 pt-0 border-top border-secondary text-muted" style={{ color: '#BBBBBB', lineHeight: '1.7' }}>
                            <p className="m-0 pt-3">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
