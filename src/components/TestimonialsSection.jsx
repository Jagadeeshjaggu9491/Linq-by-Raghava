import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/propertyData';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className="section-padding bg-secondary-dark position-relative border-top border-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <div className="subtitle-badge mb-3">
            <i className="bi bi-chat-quote-fill" style={{ color: '#F4D03F' }}></i>
            <span>Resident Reviews</span>
          </div>
          <h2 className="display-5 font-heading text-light mb-3">
            Testimonials From <span className="gold-gradient-text">Distinguished Owners</span>
          </h2>
          <p className="text-muted lead fs-6">
            Read first-hand experiences from international tech investors, architect visionaries, and private equity executives who chose Aurelia.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="position-relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card p-4 p-md-5 border-gold text-center position-relative overflow-hidden"
                  style={{ borderRadius: '16px', backgroundColor: 'var(--bg-card)' }}
                >
                  {/* Quote Icon Overlay */}
                  <i 
                    className="bi bi-quote position-absolute top-0 start-50 translate-middle-x opacity-10" 
                    style={{ fontSize: '10rem', color: '#D4AF37', pointerEvents: 'none' }}
                  ></i>

                  {/* Customer Photo */}
                  <div className="mb-4 position-relative z-2">
                    <img 
                      src={currentTestimonial.photo} 
                      alt={currentTestimonial.name}
                      className="rounded-circle border border-gold shadow-lg object-fit-cover"
                      style={{ width: '90px', height: '90px' }}
                    />
                  </div>

                  {/* 5 Star Rating */}
                  <div className="d-flex align-items-center justify-content-center gap-1 mb-3 position-relative z-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning fs-5" style={{ color: '#F4D03F' }}></i>
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="lead font-subheading text-light fs-4 italic mb-4 max-w-700 mx-auto position-relative z-2" style={{ lineHeight: '1.6' }}>
                    "{currentTestimonial.review}"
                  </blockquote>

                  {/* Customer Name & Role */}
                  <div className="position-relative z-2">
                    <h5 className="font-heading text-light m-0">{currentTestimonial.name}</h5>
                    <span className="text-muted small text-uppercase" style={{ letterSpacing: '0.1em', color: 'var(--gold-primary)' }}>
                      {currentTestimonial.role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                <button 
                  onClick={() => setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="btn btn-outline-gold rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '44px', height: '44px' }}
                  aria-label="Previous Testimonial"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                <div className="d-flex align-items-center gap-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`btn p-0 rounded-circle transition-all ${activeIdx === idx ? 'gold-gradient-bg' : 'bg-secondary'}`}
                      style={{ width: activeIdx === idx ? '24px' : '10px', height: '10px', borderRadius: '5px', border: 'none' }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={() => setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="btn btn-outline-gold rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '44px', height: '44px' }}
                  aria-label="Next Testimonial"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
