import React, { useState } from 'react';
import { Sparkles, Calendar, Menu, X } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #2563eb, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }}>
            <Sparkles size={24} color="#ffffff" />
          </div>
          <div>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px' }}>SKINSPREE</span>
            <span style={{ fontSize: '1.4rem', fontWeight: '400', color: '#2563eb', marginLeft: '4px' }}>CLINIC</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px', '@media(max-width: 900px)': { display: 'none' } }}>
          <a href="#hero" style={{ fontWeight: '600', color: '#2563eb' }}>Home</a>
          <a href="#about" style={{ fontWeight: '500', color: '#475569', transition: 'color 0.2s' }}>About Us</a>
          <a href="#services" style={{ fontWeight: '500', color: '#475569' }}>Services</a>
          <a href="#doctors" style={{ fontWeight: '500', color: '#475569' }}>Specialists</a>
          <a href="#process" style={{ fontWeight: '500', color: '#475569' }}>How It Works</a>
          <a href="#blog" style={{ fontWeight: '500', color: '#475569' }}>Blog & News</a>
          <a href="#faq" style={{ fontWeight: '500', color: '#475569' }}>FAQ</a>
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '10px 22px' }}>
            <Calendar size={18} />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </header>
  );
}
