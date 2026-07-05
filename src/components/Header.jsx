import React, { useState, useEffect } from 'react';
import { brochureData } from '../data/brochureData';
import logo from '../assets/logo.png';

const Header = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Plans", href: "#master-plan" },
    { name: "Specs", href: "#specifications" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className={`fixed-top glass-header ${scrolled ? 'scrolled' : ''}`} style={{ zIndex: 1040 }}>
        <nav className="navbar navbar-expand-lg navbar-dark py-3">
          <div className="container">

            {/* Logo on Left */}
            <a className="navbar-brand d-flex align-items-center gap-2" href="#hero">
              <img src={logo} alt="LINQ by Raghava Logo" style={{ height: '42px', objectFit: 'contain' }} />
            </a>

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              style={{ color: '#D4A96A' }}
            >
              <i className="bi bi-list" style={{ fontSize: '1.7rem', color: '#D4A96A' }}></i>
            </button>

            {/* Nav Links in Center */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto gap-1 gap-lg-2">
                {navLinks.map((link, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link nav-link-custom" href={link.href}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Buttons on Right */}
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-gold btn-sm px-3 py-2 font-heading"
                  onClick={() => onOpenModal("Get Brochure")}
                >
                  Brochure
                </button>
                <button
                  className="btn btn-gold btn-sm px-3 py-2 font-heading"
                  onClick={() => onOpenModal("Book Site Visit")}
                >
                  Book Visit
                </button>
              </div>
            </div>

          </div>
        </nav>
      </header>

      {/* Offcanvas for Mobile Navigation - Positioned at root level */}
      <div className="offcanvas offcanvas-end offcanvas-dark" tabIndex="-1" id="mobileMenu" style={{ zIndex: 1065 }}>
        <div className="offcanvas-header border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-2">
            <img src={logo} alt="LINQ Logo" style={{ height: '32px', objectFit: 'contain' }} />
            <h5 className="offcanvas-title font-heading gold-gradient-text mb-0">LINQ BY RAGHAVA</h5>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          <ul className="navbar-nav gap-1 pt-2">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index} data-bs-dismiss="offcanvas">
                <a
                  className="nav-link py-3 px-2 d-flex align-items-center gap-2"
                  href={link.href}
                  style={{
                    color: '#E8E0D8',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    fontSize: '1.05rem',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.03em',
                  }}
                >
                  <i className="bi bi-chevron-right" style={{ color: '#D4A96A', fontSize: '0.75rem' }}></i>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-grid gap-2 pt-4">
            <button
              className="btn btn-gold py-3 text-uppercase font-heading"
              onClick={() => onOpenModal("Get Brochure")}
              data-bs-dismiss="offcanvas"
            >
              Get Brochure PDF
            </button>
            <button
              className="btn btn-outline-gold py-2.5 text-uppercase font-heading"
              onClick={() => onOpenModal("Book Site Visit")}
              data-bs-dismiss="offcanvas"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
