import React from 'react';
import { PROJECT_DETAILS } from '../data/propertyData';

export default function MobileNav({ onOpenTourModal }) {
  const closeOffcanvas = () => {
    const offcanvasEl = document.getElementById('mobileOffcanvas');
    if (offcanvasEl && window.bootstrap) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <div
      className="offcanvas offcanvas-end offcanvas-dark"
      tabIndex="-1"
      id="mobileOffcanvas"
      aria-labelledby="mobileOffcanvasLabel"
      style={{ backgroundColor: 'var(--bg-secondary)', borderLeft: '1px solid var(--border-gold)' }}
    >
      <div className="offcanvas-header border-bottom border-secondary py-3">
        <div className="d-flex align-items-center gap-2">
          <div
            className="d-flex align-items-center justify-content-center gold-gradient-bg text-dark rounded-circle"
            style={{ width: '38px', height: '38px', fontWeight: '800' }}
          >
            A
          </div>
          <div>
            <h5 className="offcanvas-title font-heading text-light m-0" id="mobileOffcanvasLabel">
              {PROJECT_DETAILS.name}
            </h5>
            <span className="text-uppercase" style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--gold-primary)' }}>
              Grand Residences
            </span>
          </div>
        </div>
        <button
          type="button"
          className="btn-close btn-close-white text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body d-flex flex-column justify-content-between py-4">
        <ul className="navbar-nav gap-2">
          <li className="nav-item">
            <a
              className="nav-link text-light fs-5 font-heading text-uppercase d-flex align-items-center justify-content-between py-2"
              href="#hero"
              data-bs-dismiss="offcanvas"
            >
              <span>Home</span>
              <i className="bi bi-chevron-right fs-6" style={{ color: 'var(--gold-primary)' }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fs-5 font-heading text-uppercase d-flex align-items-center justify-content-between py-2"
              href="#overview"
              data-bs-dismiss="offcanvas"
            >
              <span>About</span>
              <i className="bi bi-chevron-right fs-6" style={{ color: 'var(--gold-primary)' }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fs-5 font-heading text-uppercase d-flex align-items-center justify-content-between py-2"
              href="#price"
              data-bs-dismiss="offcanvas"
            >
              <span>Price</span>
              <i className="bi bi-chevron-right fs-6" style={{ color: 'var(--gold-primary)' }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fs-5 font-heading text-uppercase d-flex align-items-center justify-content-between py-2"
              href="#residences"
              data-bs-dismiss="offcanvas"
            >
              <span>Floor Plans</span>
              <i className="bi bi-chevron-right fs-6" style={{ color: 'var(--gold-primary)' }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fs-5 font-heading text-uppercase d-flex align-items-center justify-content-between py-2"
              href="#amenities"
              data-bs-dismiss="offcanvas"
            >
              <span>Amenities</span>
              <i className="bi bi-chevron-right fs-6" style={{ color: 'var(--gold-primary)' }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fs-5 font-heading text-uppercase d-flex align-items-center justify-content-between py-2"
              href="#gallery"
              data-bs-dismiss="offcanvas"
            >
              <span>Gallery</span>
              <i className="bi bi-chevron-right fs-6" style={{ color: 'var(--gold-primary)' }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fs-5 font-heading text-uppercase d-flex align-items-center justify-content-between py-2"
              href="#location"
              data-bs-dismiss="offcanvas"
            >
              <span>Location</span>
              <i className="bi bi-chevron-right fs-6" style={{ color: 'var(--gold-primary)' }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light fs-5 font-heading text-uppercase d-flex align-items-center justify-content-between py-2"
              href="#contact"
              data-bs-dismiss="offcanvas"
            >
              <span>Contact</span>
              <i className="bi bi-chevron-right fs-6" style={{ color: 'var(--gold-primary)' }}></i>
            </a>
          </li>
        </ul>

        {/* Action Buttons & Concierge Hotline */}
        <div className="pt-4 border-top border-secondary">
          <button
            className="btn btn-gold w-100 py-3 mb-4 d-flex align-items-center justify-content-center gap-2"
            style={{ borderRadius: '12px' }}
            onClick={() => {
              closeOffcanvas();
              onOpenTourModal();
            }}
          >
            <i className="bi bi-calendar-check-fill fs-5"></i>
            <span>Book Site Visit</span>
          </button>

          <div className="text-center">
            <p className="text-muted small mb-1">VIP Concierge Desk</p>
            <a href="tel:+18005559988" className="text-decoration-none fw-bold fs-5" style={{ color: 'var(--gold-primary)' }}>
              +1 (800) 555-9988
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
