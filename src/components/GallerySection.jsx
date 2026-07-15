import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brochureData } from '../data/brochureData';

const GallerySection = ({ onOpenModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Stilt Level', 'Kids & Family', 'Fitness & Wellness', 'Work Facilities', 'Sky Level', 'Club LINQ'];

  const filteredImages = activeFilter === 'All' 
    ? brochureData.galleryImages 
    : brochureData.galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="section-padding bg-primary-dark position-relative">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5 max-w-desktop-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge mb-2">ARCHITECTURAL VISUALS</span>
          <h2 className="font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
            PROJECT GALLERY
          </h2>
          <div className="gold-divider"></div>
          <p className="text-muted max-w-desktop-desc mb-0" style={{ fontSize: '0.92rem' }}>
            100% Authentic Renders Extracted Directly from the Raghava LINQ Brochure.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`btn ${activeFilter === cat ? 'btn-gold' : 'btn-outline-gold'} btn-sm px-3 py-1.5 font-heading`}
              style={{ fontSize: '0.8rem' }}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="row g-4">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div 
                className="col-12 col-md-6 col-lg-4" 
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="glass-card overflow-hidden cursor-pointer img-zoom-wrapper position-relative group border-warning border-opacity-25"
                  onClick={() => setSelectedImage(img)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={img.src} 
                    alt={`${img.title} - Linq by Raghava Luxury Apartment in Hyderabad, 3 BHK at Neopolis Financial District`} 
                    className="w-100 object-fit-cover" 
                    style={{ height: '260px' }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-80 backdrop-blur d-flex justify-content-between align-items-center border-top border-warning border-opacity-30">
                    <div>
                      <h5 className="font-heading text-light h6 mb-0">{img.title}</h5>
                      <span className="text-warning small" style={{ fontSize: '0.75rem' }}>{img.category}</span>
                    </div>
                    <span className="btn btn-gold btn-sm py-1 px-2">
                      <i className="bi bi-arrows-angle-expand"></i>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="modal fade show d-block" 
            tabIndex="-1" 
            style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(10px)', zIndex: 1070 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="modal-dialog modal-dialog-centered modal-xl" onClick={e => e.stopPropagation()}>
              <div className="modal-content bg-transparent border-0 text-center position-relative">
                <button 
                  type="button" 
                  className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
                  onClick={() => setSelectedImage(null)}
                ></button>
                <img 
                  src={selectedImage.src} 
                  alt={`${selectedImage.title} - Linq by Raghava Luxury Apartment in Hyderabad, 3 BHK at Neopolis Financial District`} 
                  className="w-100 h-auto rounded border border-warning border-opacity-50 shadow-lg"
                  style={{ maxHeight: '80vh', objectFit: 'contain' }}
                />
                <div className="mt-3 text-light">
                  <h4 className="font-heading gold-gradient-text mb-1">{selectedImage.title}</h4>
                  <p className="text-warning small mb-0">Raghava LINQ Brochure Render • {selectedImage.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default GallerySection;
