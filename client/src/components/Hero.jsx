import React from 'react';
import { ArrowRight, ShieldCheck, Award, Star, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const waUrl = "https://wa.me/917825829458?text=Hi%20SkinSpree%20Clinic,%20I%20want%20to%20schedule%20a%20consultation%20with%20Dr.%20Palak%20Gandhi.";

  return (
    <section id="hero" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #e0f2fe 100%)', padding: '48px 0 56px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background shapes */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', filter: 'blur(70px)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(249, 115, 22, 0.08)', filter: 'blur(50px)', pointerEvents: 'none' }}></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px', alignItems: 'center' }}>
        
        {/* Left Column Content */}
        <div className="reveal-on-scroll reveal-slide-left">
          <div className="section-badge">
            <ShieldCheck size={16} />
            <span>WELCOME TO SKINSPREE CLINIC</span>
          </div>

          <h1 style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '16px', letterSpacing: '-0.5px' }}>
            We Are Here to <span style={{ color: '#2563eb', background: 'linear-gradient(120deg, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Heal Your Skin</span>, Hair, and Nails
          </h1>

          <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
            SkinSpree Clinic – Your Trusted Partner for Flawless Skin
          </h3>

          <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '28px', maxWidth: '580px', lineHeight: '1.65' }}>
            Comprehensive dermatological and aesthetic care with expert medical guidance, advanced laser technology, and personalized treatment plans. Your confidence, our priority.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
            <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '12px 24px' }}>
              <span>Ask for Appointment</span>
              <ArrowRight size={18} />
            </button>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: '12px 24px' }}>
              <MessageCircle size={18} fill="#ffffff" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Key Stats */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingTop: '20px', borderTop: '1px solid #cbd5e1', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: '#dbeafe', padding: '8px', borderRadius: '50%', color: '#2563eb' }}>
                <Award size={22} color="#2563eb" />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a' }}>11+ Years</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Healthcare Experience</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: '#fff7ed', padding: '8px', borderRadius: '50%', color: '#f97316' }}>
                <Star size={22} fill="#f97316" color="#f97316" />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a' }}>4.9 / 5.0</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>1000+ Happy Clients</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Hero Image Visual */}
        <div className="reveal-on-scroll reveal-slide-right delay-200" style={{ position: 'relative', width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
          
          <div className="glass-card" style={{ padding: '12px', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
              alt="Dr. Palak Sharmeel Gandhi Consultation at SkinSpree Clinic" 
              style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>

          {/* Floating Badge 1 (Clean in-bounds positioning) */}
          <div className="glass-card animate-float hero-floating-card" style={{ position: 'absolute', top: '20px', left: '16px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255, 255, 255, 0.95)', borderLeft: '4px solid #2563eb' }}>
            <div style={{ background: '#eff6ff', padding: '8px', borderRadius: '8px', color: '#2563eb' }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a' }}>Dr. Palak Gandhi</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>MBBS (Reg: G-41873)</div>
            </div>
          </div>

          {/* Floating Badge 2 (Clean in-bounds positioning) */}
          <div className="glass-card animate-float hero-floating-card" style={{ position: 'absolute', bottom: '20px', right: '16px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255, 255, 255, 0.95)', borderLeft: '4px solid #f97316', animationDelay: '2s' }}>
            <div style={{ background: '#fff7ed', padding: '8px', borderRadius: '8px', color: '#f97316' }}>
              <Star size={22} fill="#f97316" color="#f97316" />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a' }}>1000+</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>Transformed Patients</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
