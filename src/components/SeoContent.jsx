import React from 'react';
import { motion } from 'framer-motion';

export default function SeoContent() {
  return (
    <section className="section-padding position-relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Glow backdrop */}
        <div 
          className="position-absolute start-0 top-50 translate-middle-y rounded-circle pointer-events-none"
          style={{
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)',
            zIndex: 0
          }}
        ></div>

        <motion.div 
          className="max-w-desktop-header text-center mb-5 position-relative z-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-badge mb-2">SEO METRICS</span>
          <h2 className="font-heading gold-gradient-text text-uppercase mb-2" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
            Luxury Living at Hyderabad: Why Choose LINQ at Kokapet
          </h2>
          <div className="gold-divider"></div>
        </motion.div>

        <div className="row g-4 position-relative z-1">
          <div className="col-lg-6">
            <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'var(--bg-glass-card)', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-luxury)' }}>
              <h3 className="font-heading mb-3 h5" style={{ color: 'var(--gold-dark)', fontSize: '1rem', letterSpacing: '0.04em' }}>
                Futuristic High-Rise Living in Neopolis Kokapet
              </h3>
              <p className="text-muted small mb-3" style={{ lineHeight: '1.8', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                Experience the pinnacle of premium <strong>hi rise living</strong> at <strong>LINQ by Raghava</strong>, poised to be recognized as the ultimate <strong>tallest tower of hyderabad</strong> project. Located in the heart of <strong>Neopolis</strong>, this masterfully planned development offers unmatched connectivity to primary IT hubs, making it the most coveted choice for a <strong>luxury apartment in hyderabad</strong>. Whether you are looking for an <strong>ultra luxury apartment</strong> or premium <strong>3 bhk at neopolis, kokapet</strong>, Raghava Projects delivers unparalleled architectural excellence.
              </p>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.8', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                As one of the most anticipated <strong>hyderabad apartment projects</strong>, this development by the renowned <strong>Raghava builder</strong> and <strong>Raghava construction</strong> group sets a new standard. It caters to modern buyers looking for a premium <strong>3 bhk in gachibowli</strong>, <strong>3 bhk in hitech city</strong>, and <strong>3 bhk at financial district</strong> options. The strategic proximity to the <strong>financial district, hyderabad</strong> ensures you are always minutes away from workspace towers.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'var(--bg-glass-card)', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-luxury)' }}>
              <h3 className="font-heading mb-3 h5" style={{ color: 'var(--gold-dark)', fontSize: '1rem', letterSpacing: '0.04em' }}>
                Unmatched Luxury Amenities & Pricing Advantage
              </h3>
              <p className="text-muted small mb-3" style={{ lineHeight: '1.8', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                At <strong>LINQ at Kokapet</strong>, you get access to world-class <strong>luxury amenities</strong> spanning a massive 5.5 Lakh Sq. Ft. clubhouse, Club LINQ. It offers temperature-controlled indoor pools, sports arenas, guest suites, and private work offices designed for sophisticated professionals. If you are comparing pricing and searching for a premium <strong>3 bhk apartment</strong> or a spacious <strong>apartment within 2 cr at gachibowli, kokapet</strong>, LINQ presents a compelling investment layout.
              </p>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.8', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                While the project focuses on premium 3 BHK configurations starting at ₹1.63 Cr*, it also captures the attention of buyers looking for upscale living options, including those exploring a <strong>2 bhk at kokapet, gachibowli</strong>. Discover the ultimate balance of urban connectivity and natural surrounding views. Choose premium <strong>luxury living in hyderabad</strong> with Raghava Projects.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
