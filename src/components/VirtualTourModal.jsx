import React from 'react';
import { PROJECT_DETAILS } from '../data/propertyData';

export default function VirtualTourModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="modal fade show d-block" 
      style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)', zIndex: 1060 }} 
      tabIndex="-1"
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content bg-dark text-light border border-gold shadow-lg">
          <div className="modal-header border-secondary">
            <h5 className="modal-title font-heading text-warning d-flex align-items-center gap-2">
              <i className="bi bi-play-circle-fill"></i>
              <span>{PROJECT_DETAILS.name} - 4K Cinematic Walkthrough</span>
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-0 text-center" style={{ backgroundColor: '#000000' }}>
            <div className="ratio ratio-16x9">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/g0S_J1N-6pM?autoplay=1&mute=0" 
                title="Aurelia Luxury Real Estate Video Tour" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="modal-footer border-secondary justify-content-between">
            <span className="text-muted small">Ultra High Definition 4K HDR Architectural Film</span>
            <button className="btn btn-gold btn-sm" onClick={onClose}>
              Close Video Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
