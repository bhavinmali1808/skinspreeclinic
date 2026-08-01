import React, { useState, useEffect } from 'react';
import { Sparkles, Stethoscope, Sun, Zap, ShieldAlert, CheckCircle } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (data.success) setServices(data.data);
      })
      .catch(() => {
        // Fallback default services
        setServices([
          { id: 'srv-1', title: 'Acne & Scar Rejuvenation', category: 'Dermatology', description: 'Customized chemical peels, microneedling, and fractional laser therapy to eliminate stubborn acne scars and blemishes.', price: '$120' },
          { id: 'srv-2', title: 'Laser & Anti-Aging Therapy', category: 'Aesthetics', description: 'FDA-approved laser skin tightening, HIFU, and collagen boost therapies for youthful, firm, glowing skin.', price: '$250' },
          { id: 'srv-3', title: 'Comprehensive Skin Checkup', category: 'Clinical', description: 'Full body mole scanning, digital dermoscopy, and diagnostic skin health evaluation by certified dermatologists.', price: '$95' },
          { id: 'srv-4', title: 'Pigmentation & Brightening', category: 'Aesthetics', description: 'Targeted laser melasma removal, glutathione therapy, and hyperpigmentation correction for an even skin tone.', price: '$180' },
          { id: 'srv-5', title: 'Hair & Scalp Restoration', category: 'Trichology', description: 'Advanced PRP growth factor therapy, mesotherapy, and scalp detox treatments to curb hair loss and stimulate growth.', price: '$210' },
          { id: 'srv-6', title: '24/7 Emergency Skincare Support', category: 'Emergency', description: 'Immediate triage for severe allergic skin reactions, chemical burns, acute rashes, and flare-ups.', price: '$150' }
        ]);
      });
  }, []);

  const categories = ['All', 'Dermatology', 'Aesthetics', 'Clinical', 'Trichology'];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" style={{ padding: '100px 0', background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            <Sparkles size={16} />
            <span>OUR SERVICES</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Comprehensive Healthcare & Skincare Solutions</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            At SkinSpree Clinic, we offer a wide spectrum of dermatological procedures tailored to your unique skin type, from clinical routine checkups to advanced laser aesthetics.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                background: activeCategory === cat ? '#2563eb' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#475569',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(37,99,235,0.3)' : '0 2px 6px rgba(0,0,0,0.05)',
                border: activeCategory === cat ? 'none' : '1px solid #e2e8f0'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {filteredServices.map((srv) => (
            <div key={srv.id} className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ background: '#dbeafe', padding: '12px', borderRadius: '12px', color: '#2563eb' }}>
                    <Sparkles size={24} />
                  </div>
                  <span style={{ background: '#eff6ff', color: '#2563eb', fontWeight: '700', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.85rem' }}>
                    {srv.price}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{srv.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>{srv.description}</p>
              </div>

              <button 
                onClick={onOpenBooking} 
                style={{ background: 'transparent', border: 'none', color: '#2563eb', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem', padding: '0' }}
              >
                <span>Book This Treatment</span>
                <CheckCircle size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
