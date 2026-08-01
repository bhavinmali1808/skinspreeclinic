import React from 'react';
import { ArrowRight, ShieldCheck, Award, Star, MessageCircle, Phone } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const waUrl = "https://wa.me/917825829458?text=Hi%20SkinSpree%20Clinic,%20I%20want%20to%20schedule%20a%20consultation%20with%20Dr.%20Palak%20Gandhi.";

  return (
    <section id="hero" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #e0f2fe 100%)', padding: '56px 0 64px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Glow shapes */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '450px', height: '450px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.12)', filter: 'blur(80px)' }}></div>
      <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(249, 115, 22, 0.1)', filter: 'blur(60px)' }}></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
        
        {/* Left Column Content */}
        <div className="reveal-on-scroll reveal-slide-left">
          <div className="section-badge">
            <ShieldCheck size={16} />
            <span>WELCOME TO SKINSPREE CLINIC</span>
          </div>

          <h1 style={{ fontSize: '3.3rem', lineHeight: '1.15', marginBottom: '20px', letterSpacing: '-1px' }}>
            We Are Here to <span style={{ color: '#2563eb', background: 'linear-gradient(120deg, #2563eb, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Heal Your Skin</span>, Hair, and Nails
          </h1>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
            SkinSpree Clinic – Your Trusted Partner for Flawless Skin
          </h3>

          <p style={{ fontSize: '1.05rem', color: '#475569', marginBottom: '32px', maxWidth: '580px', lineHeight: '1.7' }}>
            Comprehensive dermatological and aesthetic care with expert medical guidance, advanced laser technology, and personalized treatment plans. Your confidence, our priority.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '44px' }}>
            <button onClick={onOpenBooking} className="btn-primary">
              <span>Ask for Appointment</span>
              <ArrowRight size={18} />
            </button>
            
            <a href="#footer" className="btn-outline">
              Contact Us
            </a>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={18} fill="#ffffff" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Key Stats Overlay */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', paddingTop: '24px', borderTop: '1px solid #cbd5e1', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#dbeafe', padding: '10px', borderRadius: '50%', color: '#2563eb' }}>
                <Award size={24} color="#2563eb" />
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0f172a' }}>11+ Years</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Healthcare Experience</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#fff7ed', padding: '10px', borderRadius: '50%', color: '#f97316' }}>
                <Star size={24} fill="#f97316" color="#f97316" />
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0f172a' }}>4.9 / 5.0</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>1000+ Happy Clients</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Hero Image Visual */}
        <div className="reveal-on-scroll reveal-slide-right delay-200" style={{ position: 'relative' }}>
          
          <div className="glass-card" style={{ padding: '16px', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
              alt="Dr. Palak Sharmeel Gandhi Consultation at SkinSpree Clinic" 
              style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>

          {/* Floating Badge 1 */}
          <div className="glass-card animate-float" style={{ position: 'absolute', top: '30px', left: '-30px', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(255, 255, 255, 0.95)', borderLeft: '4px solid #2563eb' }}>
            <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '10px', color: '#2563eb' }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a' }}>Dr. Palak Gandhi</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '500' }}>MBBS (Reg: G-41873)</div>
            </div>
          </div>

          {/* Floating Badge 2 */}
          <div className="glass-card animate-float" style={{ position: 'absolute', bottom: '-20px', right: '-20px', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(255, 255, 255, 0.95)', borderLeft: '4px solid #f97316', animationDelay: '2s' }}>
            <div style={{ background: '#fff7ed', padding: '10px', borderRadius: '10px', color: '#f97316' }}>
              <Star size={26} fill="#f97316" color="#f97316" />
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a' }}>1000+</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '500' }}>Transformed Patients</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
