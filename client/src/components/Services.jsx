import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

const DEFAULT_SERVICES = [
  {
    id: "srv-1",
    title: "Acne & Scar Treatment",
    description: "Effective solutions for active acne, acne scars, and open pores using chemical peels, microneedling, and RF Matrix treatments."
  },
  {
    id: "srv-2",
    title: "Pigmentation & Brightening",
    description: "Advanced treatments for hyper-pigmentation, melasma, and skin brightening to restore your natural glow and even skin tone."
  },
  {
    id: "srv-3",
    title: "Anti-Aging & Wrinkles",
    description: "Minimally invasive Botox and Dermal Fillers to reduce fine lines, wrinkles, and restore youthful volume to your face."
  },
  {
    id: "srv-4",
    title: "Laser Hair Reduction",
    description: "Safe and permanent laser hair removal solutions using the latest technology for a smooth, hair-free skin experience."
  },
  {
    id: "srv-5",
    title: "Hair Fall & Trichology",
    description: "Medical-grade treatments for hair loss, thinning, and scalp conditions, focusing on healthy hair growth and restoration."
  },
  {
    id: "srv-6",
    title: "HydraFacial & Skin Rejuvenation",
    description: "Deep cleansing, exfoliation, and hydration treatments to revitalize dull, tired skin and achieve a healthy, glowing complexion."
  }
];

export default function Services({ onOpenBooking }) {
  const [services, setServices] = useState(DEFAULT_SERVICES);

  useEffect(() => {
    fetch('/api/services')
      .then(res => {
        const contentType = res.headers.get('content-type');
        if (res.ok && contentType && contentType.includes('application/json')) {
          return res.json();
        }
        return null;
      })
      .then(data => {
        if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
          setServices(data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="services" style={{ padding: '56px 0', background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="reveal-on-scroll reveal-fade-down" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            <Sparkles size={16} />
            <span>OUR SERVICES</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Comprehensive Skin, Hair & Laser Solutions</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7' }}>
            At SkinSpree Clinic, we offer a wide range of medical and aesthetic services tailored to your needs, from routine skin check-ups to advanced laser treatments.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {services.map((srv, idx) => {
            const waTreatmentUrl = `https://wa.me/917825829458?text=${encodeURIComponent(`Hi SkinSpree Clinic, I want to inquire about ${srv.title}.`)}`;
            return (
              <div 
                key={srv.id || idx} 
                className={`glass-card reveal-on-scroll reveal-fade-up delay-${(idx % 3 + 1) * 100}`}
                style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ background: '#dbeafe', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', marginBottom: '24px' }}>
                    <Sparkles size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', color: '#0f172a' }}>{srv.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '28px' }}>{srv.description}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                  <button 
                    onClick={onOpenBooking} 
                    style={{ background: 'transparent', border: 'none', color: '#2563eb', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', padding: 0 }}
                  >
                    <span>Schedule Session</span>
                    <ArrowRight size={16} />
                  </button>

                  <a 
                    href={waTreatmentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#25D366', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem' }}
                  >
                    <MessageCircle size={16} fill="#25D366" color="#ffffff" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
