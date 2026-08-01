import React from 'react';
import { Eye, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutUs({ onOpenBooking }) {
  return (
    <section id="about" style={{ padding: '100px 0', background: '#ffffff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          
          {/* Left Visual Gallery */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" 
              alt="Skin Clinic Operation Room" 
              style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.06)' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80" 
              alt="Laser Skin Treatment Session" 
              style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', marginTop: '32px', boxShadow: '0 10px 20px rgba(0,0,0,0.06)' }}
            />
          </div>

          {/* Right Text Content */}
          <div>
            <div className="section-badge">
              <Shield size={16} />
              <span>ABOUT US</span>
            </div>

            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px' }}>
              SkinSpree Clinic Creates A Safe, Healing Space For Your Skin & Priority
            </h2>

            <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '32px', lineHeight: '1.7' }}>
              SkinSpree Clinic delivers top-tier dermatological healthcare with certified skin specialists, FDA-cleared laser technologies, emergency care, and round-the-clock patient support.
            </p>

            {/* Two Vision / Mission Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '36px' }}>
              
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '3px solid #2563eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#2563eb', fontWeight: '700' }}>
                  <Eye size={20} />
                  <span>Our Vision</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569' }}>
                  To be the most trusted healthcare leader in accessible, compassionate, and cutting-edge medical & aesthetic dermatology.
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '3px solid #f97316' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#f97316', fontWeight: '700' }}>
                  <CheckCircle2 size={20} />
                  <span>Our Mission</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569' }}>
                  To deliver personalized, patient-focused care with 24/7 support, advanced skincare science, and guaranteed safety.
                </p>
              </div>

            </div>

            <button onClick={onOpenBooking} className="btn-accent">
              <span>Book An Appointment</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
