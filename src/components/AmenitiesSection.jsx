import React from 'react';
import { motion } from 'framer-motion';
import { STILT_LEVEL_AMENITIES } from '../data/propertyData';

// Custom inline SVGs for category icons
const CATEGORY_ICONS = {
  live: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8E725C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 14a3 3 0 0 1-1.5-5.5 3.5 3.5 0 0 1 6.5-1.5 3 3 0 0 1-1 5.5v5H6v-3.5" />
      <path d="M10 17h10M11 14h8M12 14v4M18 14v4" />
      <path d="M19 18V6a1 1 0 0 1 1-1h1v1" />
      <circle cx="21" cy="5" r="1" />
    </svg>
  ),
  essentials: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8E725C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  create: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8E725C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 9.5 20 8 18.5 8C17.5 8 17 8.5 16.5 9C16 9.5 15.5 10 14.5 10C13.5 10 13 9 13 8C13 6.5 14.5 5 14.5 3C14.5 2 13.5 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <circle cx="7.5" cy="10.5" r="1" fill="#8E725C" />
      <circle cx="11.5" cy="7.5" r="1" fill="#8E725C" />
      <circle cx="16.5" cy="12.5" r="1" fill="#8E725C" />
      <path d="M18 3l3 3-9 9-3-3 9-9z" />
    </svg>
  ),
  relax: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8E725C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 14V4a2 2 0 0 1 4 0v10" />
      <path d="M14 14V4a2 2 0 0 1 4 0v10" />
      <path d="M6 8h4" />
      <path d="M14 8h4" />
      <path d="M6 11h4" />
      <path d="M14 11h4" />
      <path d="M2 17c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
      <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
    </svg>
  ),
  connect: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8E725C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <path d="M6 1v3" />
      <path d="M10 1v3" />
      <path d="M14 1v3" />
    </svg>
  ),
  play: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8E725C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="15" cy="9" r="6" />
      <path d="M10.5 13.5L5 19M5 19l-2 2 1 1 2-2" />
      <path d="M12 4.5l6 9M10.5 6l7.5 7.5M9.5 8.5l6.5 6.5M18 4.5l-6 9M19.5 6l-7.5 7.5M20.5 8.5l-6.5 6.5" opacity="0.3" />
      <circle cx="20" cy="18" r="1.5" fill="#8E725C" />
    </svg>
  )
};

// Custom inline SVGs for background sketches (faint line art)
const CATEGORY_SKETCHES = {
  live: (
    <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="#8E725C" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="position-absolute bottom-0 end-0 pointer-events-none" style={{ opacity: 0.12, transform: 'translate(5%, 5%)' }}>
      <path d="M10 90 Q40 50 80 10" />
      <path d="M30 70 Q45 55 40 50 Q30 55 30 70" />
      <path d="M35 65 Q20 55 25 50 Q35 55 35 65" />
      <path d="M50 50 Q65 35 60 30 Q50 35 50 50" />
      <path d="M55 45 Q40 35 45 30 Q55 35 55 45" />
      <path d="M70 26 Q82 15 78 10 Q70 15 70 26" />
      <path d="M73 23 Q60 15 65 10 Q73 15 73 23" />
    </svg>
  ),
  essentials: (
    <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="#8E725C" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="position-absolute bottom-0 end-0 pointer-events-none" style={{ opacity: 0.12, transform: 'translate(5%, 5%)' }}>
      <path d="M20 50h60l-8 35H28z" />
      <path d="M25 50l5 35M35 50l3 35M45 50l1 35M55 50l-1 35M65 50l-3 35M75 50l-5 35" opacity="0.4" />
      <path d="M22 60h56M24 70h52M26 80h48" opacity="0.4" />
      <path d="M30 50l-8-25c-1-3 2-4 3-3l10 23" />
      <path d="M25 40l3-2M27 35l3-2" opacity="0.5" />
      <circle cx="45" cy="45" r="8" />
      <path d="M45 37c0-2 2-3 2-3" />
      <circle cx="58" cy="47" r="7" />
      <path d="M68 50l8-18M76 32c-2-2-5 0-5 2s2 5 2 5M72 40l6-12" />
      <path d="M50 20 C25 20, 20 40, 20 50M50 20 C75 20, 80 40, 80 50" strokeDasharray="3 3" />
    </svg>
  ),
  create: (
    <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="#8E725C" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="position-absolute bottom-0 end-0 pointer-events-none" style={{ opacity: 0.12, transform: 'translate(5%, 5%)' }}>
      <path d="M20 50 C20 25, 80 25, 80 50 C80 65, 70 80, 50 80 C35 80, 20 70, 20 50 Z" />
      <circle cx="35" cy="40" r="4" />
      <circle cx="48" cy="35" r="4.5" />
      <circle cx="62" cy="42" r="5" />
      <circle cx="65" cy="58" r="4" />
      <circle cx="32" cy="58" r="6" />
      <path d="M15 85 L75 25" strokeWidth="1.0" />
      <path d="M75 25 Q78 22 80 25 Q77 28 75 25" fill="#8E725C" />
      <path d="M22 88 L82 28" strokeWidth="1.0" />
      <path d="M82 28 Q85 25 87 28 Q84 31 82 28" fill="#8E725C" />
    </svg>
  ),
  relax: (
    <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="#8E725C" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="position-absolute bottom-0 end-0 pointer-events-none" style={{ opacity: 0.12, transform: 'translate(5%, 5%)' }}>
      <path d="M50 90 V40" />
      <path d="M25 40 Q50 15 75 40 Z" />
      <path d="M50 40 L25 40M50 40 L37 40M50 40 L63 40M50 40 L75 40" />
      <path d="M50 40 L50 16" />
      <path d="M55 80 H85 L90 70 L75 68 L60 80" />
      <path d="M75 68 L70 58" />
      <path d="M25 85 H55 L60 75 L45 73 L30 85" />
      <path d="M45 73 L40 63" />
    </svg>
  ),
  connect: (
    <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="#8E725C" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="position-absolute bottom-0 end-0 pointer-events-none" style={{ opacity: 0.12, transform: 'translate(5%, 5%)' }}>
      <path d="M25 65 H75" strokeWidth="1.0" />
      <path d="M25 55 H75" />
      <path d="M30 45 V65" />
      <path d="M70 45 V65" />
      <path d="M35 45 V55M45 45 V55M55 45 V55M65 45 V55" />
      <path d="M28 65 V80M72 65 V80M32 65 V80M68 65 V80" />
      <path d="M12 80 H20 L22 68 H10 Z" />
      <path d="M16 68 Q10 50 5 60 Q10 40 16 68" />
      <path d="M16 68 Q22 50 27 60 Q20 40 16 68" />
      <path d="M80 80 H88 L90 68 H78 Z" />
      <path d="M84 68 Q90 50 95 60 Q90 40 84 68" />
      <path d="M84 68 Q78 50 73 60 Q80 40 84 68" />
    </svg>
  ),
  play: (
    <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="#8E725C" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="position-absolute bottom-0 end-0 pointer-events-none" style={{ opacity: 0.12, transform: 'translate(5%, 5%)' }}>
      <path d="M60 90 V50 H90 V90" />
      <path d="M55 50 L75 30 L95 50 Z" />
      <circle cx="75" cy="42" r="5" />
      <path d="M30 90 L30 65" />
      <path d="M26 65 H34" />
      <path d="M26 73 H34" />
      <path d="M26 81 H34" />
      <path d="M30 65 Q50 65 60 90" />
      <path d="M30 62 Q52 62 64 87" />
      <path d="M30 65 H60" />
    </svg>
  )
};

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="section-padding position-relative border-top border-secondary overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Decorative leaf branch corner flourishes */}
      <svg width="240" height="240" viewBox="0 0 100 100" fill="none" stroke="#8E725C" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" className="position-absolute top-0 start-0 opacity-15 pointer-events-none d-none d-md-block" style={{ transform: 'rotate(90deg) translate(-5%, -5%)' }}>
        <path d="M0 0 Q40 30 90 90" />
        <path d="M30 20 Q45 35 40 40 Q30 35 30 20" />
        <path d="M35 25 Q20 35 25 40 Q35 35 35 25" />
        <path d="M50 45 Q65 60 60 65 Q50 60 50 45" />
        <path d="M55 50 Q40 60 45 65 Q55 60 55 50" />
      </svg>
      <svg width="240" height="240" viewBox="0 0 100 100" fill="none" stroke="#8E725C" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" className="position-absolute top-0 end-0 opacity-15 pointer-events-none d-none d-md-block" style={{ transform: 'scaleX(-1) rotate(90deg) translate(-5%, -5%)' }}>
        <path d="M0 0 Q40 30 90 90" />
        <path d="M30 20 Q45 35 40 40 Q30 35 30 20" />
        <path d="M35 25 Q20 35 25 40 Q35 35 35 25" />
        <path d="M50 45 Q65 60 60 65 Q50 60 50 45" />
        <path d="M55 50 Q40 60 45 65 Q55 60 55 50" />
      </svg>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <h2 className="display-6 font-heading text-light mb-1" style={{ letterSpacing: '0.08em', fontWeight: 400 }}>
            STILT LEVEL AMENITIES
          </h2>
          
          {/* Custom Elegant Leaf Flourish Divider */}
          <svg width="150" height="24" viewBox="0 0 150 24" fill="none" className="mx-auto my-2 d-block">
            <path d="M10 12H65" stroke="#8E725C" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M85 12H140" stroke="#8E725C" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M75 4C75 4 71 8 71 12C71 16 75 20 75 20C75 20 79 16 79 12C79 8 75 4 75 4Z" fill="#8E725C" opacity="0.8" />
            <path d="M75 8C75 8 73.5 10 73.5 12C73.5 14 75 16 75 16C75 16 76.5 14 76.5 12C76.5 10 75 8 75 8Z" fill="#FCFAF6" />
            <path d="M67 12C67 12 69 11 69 9.5C69 8 67 8 67 8C67 8 65 8 65 9.5C65 11 67 12 67 12Z" fill="#8E725C" opacity="0.6" />
            <path d="M83 12C83 12 81 11 81 9.5C81 8 83 8 83 8C83 8 85 8 85 9.5C85 11 83 12 83 12Z" fill="#8E725C" opacity="0.6" />
          </svg>
        </div>

        {/* 3-Column Premium Amenities Grid */}
        <div className="row g-4 justify-content-center">
          {STILT_LEVEL_AMENITIES.map((amenity, index) => (
            <div key={amenity.id} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(142, 114, 92, 0.12)' }}
                className="h-100 position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #FDFDFB 0%, #F8F5EE 100%)',
                  borderRadius: '20px',
                  border: '1px solid rgba(142, 114, 92, 0.18)',
                  padding: '40px 24px 30px 24px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* Circle Icon Container */}
                <div
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(142, 114, 92, 0.25)',
                    boxShadow: '0 8px 24px rgba(142, 114, 92, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {/* Subtle inner radial gradient shadow */}
                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      top: '2px',
                      left: '2px',
                      right: '2px',
                      bottom: '2px',
                      background: 'radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(245,238,225,0.4) 100%)',
                      zIndex: -1
                    }}
                  ></div>
                  {CATEGORY_ICONS[amenity.id]}
                </div>

                {/* Category Header */}
                <h4
                  className="font-heading"
                  style={{
                    color: '#8E725C',
                    fontSize: '1.15rem',
                    letterSpacing: '0.22em',
                    fontWeight: '600',
                    textAlign: 'center',
                    marginBottom: '12px',
                    zIndex: 2
                  }}
                >
                  {amenity.title}
                </h4>

                {/* Simple elegant divider line */}
                <div style={{ width: '32px', height: '1.2px', backgroundColor: '#B5957C', margin: '0 auto 24px auto', opacity: 0.7, zIndex: 2 }}></div>

                {/* List of items aligned beautifully */}
                <div className="w-100 flex-grow-1 d-flex flex-column align-items-center justify-content-start" style={{ zIndex: 2 }}>
                  <div style={{ width: 'fit-content', minWidth: '200px' }}>
                    {amenity.items.map((item, idx) => (
                      <div key={idx} className="d-flex align-items-start mb-3" style={{ color: '#231E1B', fontSize: '0.94rem', fontWeight: '500', fontFamily: 'var(--font-body)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8E725C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="me-2 mt-1 flex-shrink-0" style={{ color: '#B5957C' }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Faint Pencil Sketch in bottom right corner */}
                {CATEGORY_SKETCHES[amenity.id]}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

