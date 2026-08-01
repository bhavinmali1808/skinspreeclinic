import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Globe, Shield } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer style={{ background: '#090d16', color: '#94a3b8', paddingTop: '80px', paddingBottom: '32px' }}>
      <div className="container">
        
        {/* Top Footer Banner / Contact Quick Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: '#2563eb', padding: '12px', borderRadius: '10px', color: '#ffffff' }}>
              <Phone size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Call Emergency Hotline</div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff' }}>+1 (555) 864-4444</div>
            </div>
          </div>

          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: '#2563eb', padding: '12px', borderRadius: '10px', color: '#ffffff' }}>
              <Mail size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Email Clinic Support</div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff' }}>support@skinspreeclinic.com</div>
            </div>
          </div>

          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: '#2563eb', padding: '12px', borderRadius: '10px', color: '#ffffff' }}>
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Visit Flagship Clinic</div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff' }}>350 5th Ave, NY 10118</div>
            </div>
          </div>

        </div>

        {/* Main Footer Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '48px', padding: '64px 0 48px 0' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #2563eb, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={20} color="#ffffff" />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff' }}>SKINSPREE</span>
              <span style={{ fontSize: '1.4rem', fontWeight: '400', color: '#3b82f6' }}>CLINIC</span>
            </div>
            <p style={{ fontSize: '0.925rem', lineHeight: '1.7', marginBottom: '24px', maxWidth: '360px' }}>
              Your Health & Skin, Our Priority Anytime, Anywhere. Dedicated to setting the highest standard in medical and cosmetic dermatology.
            </p>
            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Licensed & Accredited Medical Care Facility • Board Certified Dermatologists
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '20px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#about" style={{ hover: { color: '#ffffff' } }}>About Us</a></li>
              <li><a href="#process">Our Mission & Vision</a></li>
              <li><a href="#doctors">Specialist Team</a></li>
              <li><a href="#faq">FAQ & Policies</a></li>
              <li><a href="#blog">Latest News</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '20px' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#services">Acne & Scar Care</a></li>
              <li><a href="#services">Laser Rejuvenation</a></li>
              <li><a href="#services">Clinical Checkups</a></li>
              <li><a href="#services">Hair Restoration</a></li>
              <li><a href="#services">Emergency Triage</a></li>
            </ul>
          </div>

          {/* Location Map / GEO Embed */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '20px' }}>Clinic Location</h4>
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '140px', background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
              <iframe 
                title="SkinSpree Clinic Map" 
                src="https://maps.google.com/maps?q=350%205th%20Ave,%20New%20York,%20NY%2010118&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem' }}>
          <div>2026 © <strong>SkinSpree Clinic</strong>. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Patient Rights</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
