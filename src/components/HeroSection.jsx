import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brochureData } from '../data/brochureData';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';

const HeroSection = ({ onOpenModal }) => {
  const heroImages = [hero1, hero2, hero3];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section id="hero" className="position-relative min-vh-100 d-flex align-items-center pt-5 pb-5 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      
      {/* Background Image Slider */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentSlide}
            src={heroImages[currentSlide]} 
            alt={`LINQ by Raghava Hero Slide ${currentSlide + 1}`} 
            className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" 
            style={{ objectPosition: 'center 40%' }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        <div 
          className="position-absolute bottom-0 start-0 w-100" 
          style={{ 
            height: '120px', 
            background: 'linear-gradient(to top, var(--bg-primary) 0%, rgba(252, 250, 246, 0.4) 60%, transparent 100%)' 
          }}
        ></div>
      </div>

      <button 
        onClick={handlePrev}
        className="btn position-absolute top-50 start-0 translate-middle-y ms-2 ms-md-4 z-2 rounded-circle d-flex align-items-center justify-content-center text-dark shadow-lg"
        style={{ 
          width: '40px', 
          height: '40px', 
          backgroundColor: 'var(--bg-glass)', 
          border: '1px solid var(--border-gold)',
          backdropFilter: 'blur(12px)',
          transition: 'all 0.3s ease'
        }}
        aria-label="Previous Slide"
      >
        <i className="bi bi-chevron-left fs-6 text-warning"></i>
      </button>

      <button 
        onClick={handleNext}
        className="btn position-absolute top-50 end-0 translate-middle-y me-2 me-md-4 z-2 rounded-circle d-flex align-items-center justify-content-center text-dark shadow-lg"
        style={{ 
          width: '40px', 
          height: '40px', 
          backgroundColor: 'var(--bg-glass)', 
          border: '1px solid var(--border-gold)',
          backdropFilter: 'blur(12px)',
          transition: 'all 0.3s ease'
        }}
        aria-label="Next Slide"
      >
        <i className="bi bi-chevron-right fs-6 text-warning"></i>
      </button>

      {/* Main Hero Content - Compact Card Aligned to Left Side */}
      <div className="container position-relative z-1 py-4 mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-8 col-lg-5 col-xl-5 me-auto ms-lg-4 d-none d-md-block">
            
            <motion.div 
              className="p-4 rounded-4 position-relative overflow-hidden"
              style={{ 
                backgroundColor: 'var(--bg-glass-card)', 
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid var(--border-gold-light)',
                boxShadow: '0 20px 50px rgba(74, 60, 49, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 25px var(--gold-glow)',
                borderRadius: '20px'
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              {/* Top Metallic Accent Bar */}
              <div 
                className="position-absolute top-0 start-0 w-100" 
                style={{ 
                  height: '3px', 
                  background: 'linear-gradient(90deg, transparent, #B89B82 50%, transparent)' 
                }}
              ></div>

              {/* Top Location Badge */}
              <div className="mb-2">
                <span className="subtitle-badge py-1 px-3" style={{ fontSize: '0.7rem' }}>
                  <i className="bi bi-geo-alt-fill text-warning me-1"></i> NEOPOLIS, HYDERABAD
                </span>
              </div>

              {/* Title */}
              <h1 
                className="font-heading fw-bold gold-gradient-text mb-1 text-uppercase"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', letterSpacing: '0.04em', lineHeight: '1.2' }}
              >
                {brochureData.projectName}
              </h1>

              {/* Tagline */}
              <p 
                className="font-subheading text-warning fst-italic mb-2 fw-normal"
                style={{ fontSize: '1.05rem', color: '#B89B82' }}
              >
                "{brochureData.tagline}"
              </p>

              {/* Sub-description */}
              <p 
                className="text-light opacity-85 mb-3"
                style={{ fontSize: '0.84rem', lineHeight: '1.5' }}
              >
                {brochureData.subTagline} • 9.2 Acres, 4 Towers & Premium 3 BHK Residences.
              </p>

              {/* Compact 2x2 Specs Grid */}
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <div 
                    className="p-2 text-center rounded-2"
                    style={{ backgroundColor: 'var(--bg-glass)', border: '1px solid var(--border-subtle)' }}
                  >
                    <span className="text-muted d-block" style={{ fontSize: '0.65rem' }}>Land Area</span>
                    <span className="fw-bold text-warning font-heading text-uppercase d-block" style={{ fontSize: '0.82rem', color: 'var(--gold-primary)' }}>9.2 ACRES</span>
                  </div>
                </div>

                <div className="col-6">
                  <div 
                    className="p-2 text-center rounded-2"
                    style={{ backgroundColor: 'var(--bg-glass)', border: '1px solid var(--border-subtle)' }}
                  >
                    <span className="text-muted d-block" style={{ fontSize: '0.65rem' }}>Towers</span>
                    <span className="fw-bold text-warning font-heading text-uppercase d-block" style={{ fontSize: '0.82rem', color: 'var(--gold-primary)' }}>4 TOWERS</span>
                  </div>
                </div>

                <div className="col-6">
                  <div 
                    className="p-2 text-center rounded-2"
                    style={{ backgroundColor: 'var(--bg-glass)', border: '1px solid var(--border-subtle)' }}
                  >
                    <span className="text-muted d-block" style={{ fontSize: '0.65rem' }}>Typology</span>
                    <span className="fw-bold text-warning font-heading text-uppercase d-block" style={{ fontSize: '0.82rem', color: 'var(--gold-primary)' }}>3 BHK PREMIUM</span>
                  </div>
                </div>

                <div className="col-6">
                  <div 
                    className="p-2 text-center rounded-2"
                    style={{ backgroundColor: 'var(--bg-glass)', border: '1px solid var(--border-subtle)' }}
                  >
                    <span className="text-muted d-block" style={{ fontSize: '0.65rem' }}>Sizes</span>
                    <span className="fw-bold text-warning font-heading text-uppercase d-block" style={{ fontSize: '0.82rem', color: 'var(--gold-primary)' }}>1789-2388 SQ.FT</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-grid gap-2">
                <button 
                  className="btn btn-gold py-2 font-heading text-uppercase shadow-lg d-flex align-items-center justify-content-center gap-2"
                  style={{ fontSize: '0.82rem', letterSpacing: '0.06em', borderRadius: '8px' }}
                  onClick={() => onOpenModal("Get Brochure")}
                >
                  <i className="bi bi-file-earmark-pdf fs-6"></i> GET BROCHURE
                </button>
                <button 
                  className="btn btn-outline-gold py-2 font-heading text-uppercase d-flex align-items-center justify-content-center gap-2"
                  style={{ fontSize: '0.82rem', letterSpacing: '0.06em', borderRadius: '8px' }}
                  onClick={() => onOpenModal("Book Site Visit")}
                >
                  <i className="bi bi-calendar-check fs-6"></i> BOOK SITE VISIT
                </button>
              </div>

            </motion.div>

            <div className="d-flex justify-content-center justify-content-lg-start gap-2 mt-3 ms-2">
              {heroImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="btn p-0 rounded-pill transition-smooth"
                  style={{ 
                    width: currentSlide === index ? '24px' : '7px', 
                    height: '5px', 
                    backgroundColor: currentSlide === index ? 'var(--gold-primary)' : 'var(--border-gold-light)',
                    border: 'none'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
