import React from 'react';
import { ArrowRight, ShieldCheck, Award, UserCheck, Star } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #e0f2fe 100%)', padding: '80px 0 100px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle background glows */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.12)', filter: 'blur(80px)' }}></div>
      <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(249, 115, 22, 0.1)', filter: 'blur(60px)' }}></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
        
        {/* Hero Left Content */}
        <div>
          <div className="section-badge">
            <ShieldCheck size={16} />
            <span>WELCOME TO SKINSPREE CLINIC</span>
          </div>

          <h1 style={{ fontSize: '3.4rem', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
            We Are Here To Hear And <span style={{ color: '#2563eb', background: 'linear-gradient(120deg, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Heal Your Skin</span> Problems
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#475569', marginBottom: '32px', maxWidth: '580px', lineHeight: '1.7' }}>
            Comprehensive medical dermatology, laser treatments, and aesthetic care with expert doctors, advanced non-invasive technology, and compassionate patient service.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button onClick={onOpenBooking} className="btn-primary">
              <span>Get Started Now</span>
              <ArrowRight size={18} />
            </button>
            <a href="#about" className="btn-outline">
              Learn More
            </a>
          </div>

          {/* Social Proof / Trust metrics */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingTop: '24px', borderTop: '1px solid #cbd5e1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#dbeafe', padding: '10px', borderRadius: '50%', color: '#2563eb' }}>
                <Star size={24} fill="#2563eb" />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>4.9 / 5.0</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Over 3,500+ Patient Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right Visuals & Stat Cards */}
        <div style={{ position: 'relative' }}>
          
          {/* Main Hero Card / Image */}
          <div className="glass-card" style={{ padding: '16px', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" 
              alt="SkinSpree Dermatologist Consultation" 
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>

          {/* Floating Stat Card 1: 25+ Years Experience */}
          <div className="glass-card animate-fade-in" style={{ position: 'absolute', top: '30px', left: '-30px', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255, 255, 255, 0.95)', borderLeft: '4px solid #2563eb' }}>
            <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '12px', color: '#2563eb' }}>
              <Award size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>25+</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Years of Experience</div>
            </div>
          </div>

          {/* Floating Stat Card 2: 140+ Specialist Doctors */}
          <div className="glass-card animate-fade-in" style={{ position: 'absolute', bottom: '-20px', right: '-20px', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255, 255, 255, 0.95)', borderLeft: '4px solid #f97316' }}>
            <div style={{ background: '#fff7ed', padding: '12px', borderRadius: '12px', color: '#f97316' }}>
              <UserCheck size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>140+</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Specialist Doctors</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
