import React from 'react';
import { Eye, Shield, CheckCircle2, ArrowRight, MessageCircle, Heart } from 'lucide-react';

export default function AboutUs({ onOpenBooking }) {
  const waUrl = "https://wa.me/917825829458?text=Hi%20SkinSpree%20Clinic,%20I%20want%20to%20learn%20more%20about%20your%20treatments.";

  return (
    <section id="about" style={{ padding: '56px 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section 4: About Us */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '80px' }}>
          
          {/* Visual Images */}
          <div className="reveal-on-scroll reveal-slide-left" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" 
              alt="SkinSpree Clinic Consultation Room" 
              style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.06)' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80" 
              alt="Advanced Laser Skin Treatment" 
              style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '16px', marginTop: '32px', boxShadow: '0 10px 20px rgba(0,0,0,0.06)' }}
            />
          </div>

          {/* Text Content */}
          <div className="reveal-on-scroll reveal-slide-right delay-200">
            <div className="section-badge">
              <Shield size={16} />
              <span>ABOUT SKINSPREE CLINIC</span>
            </div>

            <h2 style={{ fontSize: '2.6rem', lineHeight: '1.2', marginBottom: '12px' }}>
              A Touch of Perfection
            </h2>

            <p style={{ color: '#2563eb', fontWeight: '700', fontSize: '1.1rem', marginBottom: '16px' }}>
              "We Believe In Skin.vest.ment!"
            </p>

            <p style={{ color: '#64748b', fontSize: '1.025rem', marginBottom: '32px', lineHeight: '1.7' }}>
              SkinSpree Clinic provides top-quality dermatological and aesthetic healthcare with experienced doctors, advanced laser services, and round-the-clock support. Give yourself the gift of flawless skin with treatments with us. Be it acne, ageing skin, pigmentation, or dull skin, we have a solution for it all. Your trusted partner for a healthier, more confident you.
            </p>

            {/* Vision & Mission Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '36px' }}>
              
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #2563eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#2563eb', fontWeight: '700' }}>
                  <Eye size={20} />
                  <span>Our Vision</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6' }}>
                  To be a trusted leader in quality, accessible, and compassionate dermatological healthcare in Ahmedabad and beyond.
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f97316' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#f97316', fontWeight: '700' }}>
                  <CheckCircle2 size={20} />
                  <span>Our Mission</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6' }}>
                  SkinSpree delivers expert, patient-focused care with advanced medical and cosmetic dermatology technology, focusing on long-term skin health and aesthetic wellness.
                </p>
              </div>

            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={onOpenBooking} className="btn-primary">
                <span>Ask for Appointment</span>
                <ArrowRight size={18} />
              </button>

              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={18} fill="#ffffff" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

        </div>

        {/* Section 5: Our Commitment */}
        <div 
          className="glass-card reveal-on-scroll reveal-fade-up"
          style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
            padding: '48px',
            borderRadius: '20px',
            border: '1px solid #bfdbfe'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', alignItems: 'center' }}>
            <div>
              <div className="section-badge">
                <Heart size={16} color="#2563eb" />
                <span>OUR COMMITMENT</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#0f172a', lineHeight: '1.3' }}>
                Dedicated to Excellence in Dermatological Care
              </h3>
            </div>
            <div>
              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.8' }}>
                We are committed to providing exceptional care by working with leading healthcare professionals, utilizing the latest aesthetic technology, and maintaining trusted partnerships with top pharmaceutical providers. We put our heart into every treatment, ensuring long-term skin health and visible transformations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
