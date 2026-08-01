import React from 'react';
import { Stethoscope, Cpu, ShieldCheck, Award, Star } from 'lucide-react';

export default function FeaturesBar() {
  const highlights = [
    {
      icon: Stethoscope,
      title: 'Expert Dermatologist',
      subtitle: 'Board Certified Specialist',
      desc: 'Dr. Palak Sharmeel Gandhi delivers top-quality medical and cosmetic dermatology care.'
    },
    {
      icon: Cpu,
      title: 'Advanced Laser Technology',
      subtitle: 'US-FDA Approved Equipment',
      desc: 'Safe, reliable laser and RF Matrix treatments tailored for precise skin results.'
    },
    {
      icon: ShieldCheck,
      title: 'Personalized Clinical Care',
      subtitle: 'Patient-First Approach',
      desc: 'Individualized treatment plans and dedicated follow-up for long-term skin health.'
    }
  ];

  return (
    <section style={{ background: '#f8fafc', padding: '72px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Sleek Clinical Key Metrics Bar */}
        <div 
          className="reveal-on-scroll reveal-fade-down"
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            padding: '32px 48px',
            marginBottom: '56px',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
            display: 'grid',
            gridTemplateColumns: '1fr 1px 1fr',
            gap: '32px',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
            <div style={{ background: '#eff6ff', padding: '14px', borderRadius: '12px', color: '#2563eb' }}>
              <Award size={30} strokeWidth={1.75} />
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1', color: '#0f172a', letterSpacing: '-0.5px' }}>11+ Years</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Healthcare Experience
              </div>
            </div>
          </div>

          <div style={{ background: '#e2e8f0', height: '50px', width: '1px' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
            <div style={{ background: '#fff7ed', padding: '14px', borderRadius: '12px', color: '#ea580c' }}>
              <Star size={30} strokeWidth={1.75} fill="#ea580c" />
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1', color: '#0f172a', letterSpacing: '-0.5px' }}>4.9 / 5.0 Rating</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                1000+ Happy Patients
              </div>
            </div>
          </div>
        </div>

        {/* Professional Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`reveal-on-scroll reveal-fade-up delay-${(idx + 1) * 100}`}
                style={{ 
                  background: '#ffffff', 
                  borderRadius: '16px', 
                  padding: '36px', 
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ background: '#f1f5f9', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a' }}>
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', lineHeight: '1.2' }}>{item.title}</h3>
                    <div style={{ fontSize: '0.775rem', fontWeight: '600', color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.65' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
