import React from 'react';
import { UserCheck, ShieldAlert, Headphones } from 'lucide-react';

export default function FeaturesBar() {
  const features = [
    {
      icon: <UserCheck size={28} color="#2563eb" />,
      title: "Expert Doctors",
      desc: "Skilled dermatologist professionals delivering top-quality skin care.",
      bg: "#eff6ff"
    },
    {
      icon: <ShieldAlert size={28} color="#ffffff" />,
      title: "Emergency Care",
      desc: "Fast, reliable triage for acute skin allergies & flare-ups when needed most.",
      bg: "#2563eb",
      highlight: true
    },
    {
      icon: <Headphones size={28} color="#2563eb" />,
      title: "24/7 Full Support",
      desc: "Always here for instant appointment booking & emergency consultations.",
      bg: "#eff6ff"
    }
  ];

  return (
    <section style={{ marginTop: '-40px', position: 'relative', zIndex: 20 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{ 
                padding: '32px 28px', 
                background: item.highlight ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : '#ffffff', 
                color: item.highlight ? '#ffffff' : '#1e293b',
                display: 'flex',
                alignItems: 'start',
                gap: '20px'
              }}
            >
              <div style={{ background: item.highlight ? 'rgba(255,255,255,0.2)' : item.bg, padding: '14px', borderRadius: '14px' }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: item.highlight ? '#ffffff' : '#0f172a' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: item.highlight ? '#e0f2fe' : '#64748b', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
