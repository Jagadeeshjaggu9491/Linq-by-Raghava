import React from 'react';
import { brochureData } from '../data/brochureData';
import logo from '../assets/logo.png';

const Footer = ({ onOpenModal }) => {
  return (
    <footer
      className="position-relative overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-gold)',
        padding: '48px 0 32px',
      }}
    >
      {/* Subtle background glow */}
      <div
        className="position-absolute top-0 start-50 translate-middle-x pointer-events-none"
        style={{
          width: '600px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(184,155,130,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>

        {/* Logo + RERA row */}
        <div className="d-flex flex-column align-items-center mb-4">
          <img
            src={logo}
            alt="LINQ by Raghava"
            style={{ height: '52px', objectFit: 'contain', marginBottom: '12px' }}
          />
          <span
            className="badge font-heading d-inline-flex align-items-center gap-2"
            style={{
              backgroundColor: 'rgba(184,155,130,0.1)',
              border: '1px solid rgba(184,155,130,0.35)',
              color: '#B89B82',
              fontSize: '0.76rem',
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: '8px',
              letterSpacing: '0.06em',
            }}
          >
            <i className="bi bi-shield-check" style={{ fontSize: '0.9rem' }} />
            TS RERA NO: P02400007892
          </span>
        </div>

        {/* Thin gold divider */}
        <div
          style={{
            width: '60px',
            height: '1.5px',
            background: 'linear-gradient(90deg, transparent, var(--gold-secondary), transparent)',
            margin: '0 auto 28px',
          }}
        />

        {/* Disclaimer block */}
        <div className="text-center mx-auto" style={{ maxWidth: '720px' }}>
          <p
            className="mb-3"
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: '1.75',
              letterSpacing: '0.01em',
            }}
          >
            <strong style={{ color: 'var(--text-dim)', fontWeight: 600 }}>Disclaimer: </strong>
            Information displayed on this website is sourced strictly from the official Raghava LINQ mini brochure.
            All visuals, renders, floor plans, specifications, pricing details, and project data belong solely to the developer —{' '}
            <strong style={{ color: 'var(--text-dim)' }}>Raghava Projects Pvt. Ltd.</strong> This website is an
            official marketing channel and is not an offer or solicitation to buy. Actual product may vary.
            Interested parties are requested to verify all details independently before making any investment decision.
          </p>

          <p
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              lineHeight: '1.65',
            }}
          >
            This project is registered under the Telangana Real Estate Regulatory Authority (TS RERA) under Registration No.{' '}
            <strong style={{ color: '#B89B82' }}>P02400007892</strong>. For further details, visit{' '}
            <a
              href="https://rera.telangana.gov.in"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#B89B82', textDecoration: 'underline' }}
            >
              rera.telangana.gov.in
            </a>.
          </p>
        </div>

        {/* Bottom copyright strip */}
        <div
          className="text-center mt-4 pt-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <p
            className="mb-0 font-heading fw-medium"
            style={{ fontSize: '0.84rem', color: '#B89B82', letterSpacing: '0.05em' }}
          >
            © {new Date().getFullYear()} LINQ by Raghava. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
