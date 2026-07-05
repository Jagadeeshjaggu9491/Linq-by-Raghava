import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { brochureData } from '../data/brochureData';

const AboutProject = ({ onOpenModal }) => {
  const [activeZone, setActiveZone] = useState('stilt');

  const zoneData = {
    stilt: brochureData.amenities.stiltLevel,
    mid: brochureData.amenities.midLevel,
    sky: brochureData.amenities.skyAmenities,
    club: brochureData.amenities.clubLinq
  };

  const projectPillars = [
    {
      title: "Iconic Skyscraper Architecture",
      desc: "4 majestic high-rise towers rising up to 58-60 floors, designed with sleek glass facades and double-height entrance lobbies.",
      icon: "bi-building-up"
    },
    {
      title: "Expansive 9.2-Acre Development",
      desc: "Thoughtfully planned master layout with majority open green spaces, vehicular-free podiums, and lush landscaped gardens.",
      icon: "bi-tree"
    },
    {
      title: "5.5 Lakh Sq. Ft. Club LINQ",
      desc: "A 7-star resort-style clubhouse offering temperature-controlled pools, 18 luxury guest suites, banquet halls, and sports arenas.",
      icon: "bi-stars"
    },
    {
      title: "Unobstructed Forever Views",
      desc: "Positioned to deliver permanent scenic views of Osman Sagar Lake, surrounding greenery, and the futuristic Neopolis skyline.",
      icon: "bi-eye"
    }
  ];

  const quickStats = [
    { value: "9.2", unit: "ACRES", label: "Land Parcel", icon: "bi-arrows-fullscreen" },
    { value: "4", unit: "TOWERS", label: "Iconic Skyscrapers", icon: "bi-building" },
    { value: "2,344", unit: "UNITS", label: "Luxury Residences", icon: "bi-houses" },
    { value: "5.5L", unit: "SQ. FT.", label: "Club LINQ & Amenities", icon: "bi-stars" }
  ];

  return (
    <section id="about" className="section-padding bg-primary-dark position-relative">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5 max-w-desktop-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge mb-2">ABOUT THE PROJECT</span>
          <h2 className="font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
            City Connected, Nature Surrounded.
          </h2>
          <div className="gold-divider"></div>
          <p className="font-subheading text-warning fst-italic mb-1" style={{ fontSize: '1.15rem' }}>
            "{brochureData.subTagline}"
          </p>
        </motion.div>

        {/* Main Overview Row */}
        <div className="row align-items-center mb-5 g-4">
          <div className="col-lg-6">
            <h3 className="font-heading text-light h4 mb-3">
              Hyderabad's Most Prestigious High-Rise Address in Neopolis
            </h3>
            <p className="text-light opacity-75 mb-3" style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
              <strong>LINQ by Raghava</strong> is a benchmark residential community spread across <strong>9.2 Acres</strong> in the prime growth corridor of Neopolis, Kokapet. Featuring <strong>4 landmark skyscraper towers</strong> with 2,344 ultra-luxury 3 BHK residences (sizes ranging from 1,789 to 2,388 sq. ft.), the project seamlessly blends high-tech urban convenience with peaceful natural surroundings.
            </p>
            <p className="text-light opacity-75 mb-4" style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
              Every apartment is meticulously crafted with optimal natural light, cross ventilation, double-glazed windows, VRV AC piping provision, and private balconies overlooking serene lakeviews.
            </p>

            {/* Highly Highlighted Key Stats Cards */}
            <div className="row g-3 mb-4">
              {quickStats.map((stat, idx) => (
                <div className="col-6 col-sm-3" key={idx}>
                  <motion.div 
                    className="p-3 text-center rounded-3 position-relative overflow-hidden h-100 d-flex flex-column justify-content-center align-items-center"
                    style={{ 
                      background: 'linear-gradient(145deg, var(--bg-card) 0%, var(--bg-secondary) 100%)', 
                      border: '1px solid var(--border-gold)',
                      boxShadow: 'var(--shadow-luxury)',
                      cursor: 'default'
                    }}
                    whileHover={{ scale: 1.04, borderColor: 'var(--gold-secondary)', boxShadow: 'var(--shadow-card-hover)' }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Top Glow Accent Bar */}
                    <div 
                      className="position-absolute top-0 start-0 w-100" 
                      style={{ 
                        height: '2px', 
                        background: 'linear-gradient(90deg, transparent, #B89B82, transparent)' 
                      }}
                    ></div>

                    <div className="text-warning mb-1 opacity-85">
                      <i className={`bi ${stat.icon}`} style={{ fontSize: '1.1rem', color: '#B89B82' }}></i>
                    </div>

                    <span 
                      className="font-heading fw-bold gold-gradient-text d-block" 
                      style={{ fontSize: '1.65rem', lineHeight: '1.1', letterSpacing: '0.02em' }}
                    >
                      {stat.value}
                    </span>

                    <span 
                      className="font-heading fw-semibold d-block text-uppercase mt-1" 
                      style={{ fontSize: '0.72rem', color: '#B89B82', letterSpacing: '0.08em' }}
                    >
                      {stat.unit}
                    </span>

                    <span 
                      className="text-muted small d-block mt-0.5" 
                      style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}
                    >
                      {stat.label}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-3">
              <button 
                className="btn btn-gold px-4 py-2.5 font-heading text-uppercase"
                style={{ fontSize: '0.85rem' }}
                onClick={() => onOpenModal("Get Brochure")}
              >
                <i className="bi bi-file-earmark-pdf me-2"></i> Download Full Brochure
              </button>
              <button 
                className="btn btn-outline-gold px-4 py-2.5 font-heading text-uppercase"
                style={{ fontSize: '0.85rem' }}
                onClick={() => onOpenModal("Book Site Visit")}
              >
                <i className="bi bi-calendar-check me-2"></i> Schedule VIP Site Visit
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="position-relative">
              <div className="img-zoom-wrapper border border-warning border-opacity-30 shadow-lg rounded-3">
                <img 
                  src="/assets/brochure/img-p13-34-2000x2000.png" 
                  alt="Where Hyderabad looks up" 
                  className="w-100 h-auto rounded-3" 
                  style={{ maxHeight: '520px', objectFit: 'cover' }}
                />
              </div>
              <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-90 backdrop-blur border-top border-warning border-opacity-40 rounded-bottom">
                <p className="font-subheading text-warning mb-0 fst-italic" style={{ fontSize: '1.05rem' }}>
                  "{brochureData.kidsHeadline}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence Grid (Highlighted Cards) */}
        <div className="py-4 my-4">
          <div className="row g-4">
            {projectPillars.map((pillar, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <motion.div 
                  className="p-4 h-100 rounded-3 position-relative overflow-hidden d-flex flex-column justify-content-between"
                  style={{ 
                    background: 'linear-gradient(145deg, var(--bg-card) 0%, var(--bg-secondary) 100%)', 
                    border: '1px solid var(--border-gold)',
                    boxShadow: 'var(--shadow-luxury)'
                  }}
                  whileHover={{ scale: 1.03, translateY: -4, borderColor: 'var(--gold-secondary)', boxShadow: 'var(--shadow-card-hover)' }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Top Glow Accent Bar */}
                  <div 
                    className="position-absolute top-0 start-0 w-100" 
                    style={{ 
                      height: '2px', 
                      background: 'linear-gradient(90deg, transparent, #B89B82, transparent)' 
                    }}
                  ></div>

                  <div>
                    {/* Icon Container */}
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                      style={{ 
                        width: '46px', 
                        height: '46px', 
                        backgroundColor: 'rgba(184, 155, 130, 0.12)',
                        border: '1px solid rgba(184, 155, 130, 0.4)'
                      }}
                    >
                      <i className={`bi ${pillar.icon}`} style={{ fontSize: '1.25rem', color: '#B89B82' }}></i>
                    </div>

                    {/* Title */}
                    <h4 
                      className="font-heading gold-gradient-text text-uppercase mb-2" 
                      style={{ fontSize: '0.96rem', letterSpacing: '0.04em', lineHeight: '1.35' }}
                    >
                      {pillar.title}
                    </h4>

                    {/* Description */}
                    <p 
                      className="mb-0 text-muted" 
                      style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.6' }}
                    >
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Verified Badge Line */}
                  <div className="pt-3 mt-3 border-top border-secondary border-opacity-20 d-flex align-items-center justify-content-between">
                    <span className="text-warning font-heading" style={{ fontSize: '0.72rem', color: '#B89B82' }}>
                      <i className="bi bi-shield-check me-1"></i> Feature Pillar
                    </span>
                    <i className="bi bi-arrow-right-short text-warning fs-5" style={{ color: '#B89B82' }}></i>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Brochure Amenities & Zoning Breakdown */}
        <div className="pt-4 border-top border-secondary border-opacity-25">
          <div className="text-center mb-4 max-w-desktop-header">
            <span className="subtitle-badge mb-2">AMENITIES ARCHITECTURE</span>
            <h3 className="font-heading text-light text-uppercase mb-2" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>Multi-Level Lifestyle Zoning</h3>
            <div className="gold-divider"></div>
          </div>

          {/* Zone Selector Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            <button 
              className={`btn ${activeZone === 'stilt' ? 'btn-gold' : 'btn-outline-gold'} btn-sm px-3 py-2`}
              style={{ fontSize: '0.8rem' }}
              onClick={() => setActiveZone('stilt')}
            >
              Stilt Level
            </button>
            <button 
              className={`btn ${activeZone === 'mid' ? 'btn-gold' : 'btn-outline-gold'} btn-sm px-3 py-2`}
              style={{ fontSize: '0.8rem' }}
              onClick={() => setActiveZone('mid')}
            >
              Mid Level (The Nest)
            </button>
            <button 
              className={`btn ${activeZone === 'sky' ? 'btn-gold' : 'btn-outline-gold'} btn-sm px-3 py-2`}
              style={{ fontSize: '0.8rem' }}
              onClick={() => setActiveZone('sky')}
            >
              Sky Amenities
            </button>
            <button 
              className={`btn ${activeZone === 'club' ? 'btn-gold' : 'btn-outline-gold'} btn-sm px-3 py-2`}
              style={{ fontSize: '0.8rem' }}
              onClick={() => setActiveZone('club')}
            >
              CLUB LINQ
            </button>
          </div>

          {/* Active Zone Display Card */}
          <motion.div 
            key={activeZone}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-4 p-md-5 border-warning border-opacity-30"
          >
            <h4 className="font-heading gold-gradient-text mb-4 border-bottom border-secondary border-opacity-25 pb-3" style={{ fontSize: '1.25rem' }}>
              {zoneData[activeZone].name}
            </h4>

            <div className="row g-4">
              {zoneData[activeZone].categories.map((cat, idx) => {
                const getIcon = (name) => {
                  const n = name.toLowerCase();
                  if (n.includes('live')) return 'bi-heart-fill';
                  if (n.includes('essential')) return 'bi-shield-fill-check';
                  if (n.includes('create')) return 'bi-brush-fill';
                  if (n.includes('relax')) return 'bi-sun-fill';
                  if (n.includes('connect')) return 'bi-people-fill';
                  if (n.includes('play')) return 'bi-dribbble';
                  return 'bi-gem';
                };

                const zoneBadge = activeZone === 'stilt' ? 'STILT' : activeZone === 'mid' ? 'NEST' : activeZone === 'sky' ? 'SKY' : 'CLUB';

                return (
                  <div className="col-12 col-md-6 col-lg-4" key={idx}>
                    <motion.div
                      className="glass-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF8F4 100%)',
                        border: '1px solid rgba(142, 114, 92, 0.16)',
                        borderRadius: '16px',
                        boxShadow: '0 10px 30px rgba(142, 114, 92, 0.04)',
                        transition: 'var(--transition-smooth)'
                      }}
                      whileHover={{ 
                        y: -6, 
                        borderColor: 'var(--gold-secondary)', 
                        boxShadow: 'var(--shadow-card-hover)' 
                      }}
                    >
                      {/* Glow Backdrop */}
                      <div 
                        className="position-absolute top-0 end-0 p-4 rounded-circle"
                        style={{
                          background: 'radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)',
                          transform: 'translate(30%, -30%)',
                          width: '120px',
                          height: '120px',
                          pointerEvents: 'none'
                        }}
                      ></div>

                      <div>
                        {/* Title Bar */}
                        <div className="d-flex align-items-center justify-content-between mb-4 border-bottom border-secondary border-opacity-10 pb-2.5">
                          <h5 
                            className="font-heading m-0 text-dark font-bold text-uppercase d-flex align-items-center gap-2" 
                            style={{ fontSize: '0.92rem', color: 'var(--text-main)', letterSpacing: '0.08em' }}
                          >
                            <span 
                              className="d-inline-flex align-items-center justify-content-center rounded-circle"
                              style={{ 
                                width: '28px', 
                                height: '28px', 
                                backgroundColor: 'var(--gold-glow)', 
                                border: '1px solid var(--border-gold)' 
                              }}
                            >
                              <i className={`bi ${getIcon(cat.category)}`} style={{ fontSize: '0.85rem', color: 'var(--gold-primary)' }}></i>
                            </span>
                            {cat.category}
                          </h5>
                          <span className="badge font-heading" style={{ fontSize: '0.62rem', letterSpacing: '0.05em', color: 'var(--gold-primary)', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', padding: '4px 8px' }}>
                            {zoneBadge}
                          </span>
                        </div>

                        {/* List Items */}
                        <ul className="list-unstyled mb-0 d-flex flex-column gap-2.5">
                          {cat.items.map((item, itemIdx) => (
                            <motion.li 
                              key={itemIdx} 
                              className="d-flex align-items-center text-muted small"
                              whileHover={{ x: 4, color: 'var(--text-main)' }}
                              transition={{ duration: 0.2 }}
                              style={{ fontSize: '0.85rem', cursor: 'default' }}
                            >
                              <span 
                                className="d-inline-flex align-items-center justify-content-center rounded-circle me-2 flex-shrink-0"
                                style={{ 
                                  width: '18px', 
                                  height: '18px', 
                                  backgroundColor: 'rgba(142, 114, 92, 0.08)', 
                                  border: '1px solid rgba(142, 114, 92, 0.25)' 
                                }}
                              >
                                <i className="bi bi-check2" style={{ fontSize: '0.68rem', color: 'var(--gold-primary)', fontWeight: 'bold' }}></i>
                              </span>
                              <span style={{ color: 'var(--text-muted)' }}>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutProject;
