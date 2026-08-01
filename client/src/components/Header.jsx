import React, { useState } from 'react';
import { Sparkles, Calendar, ChevronDown, Menu, X, MapPin } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '76px' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #2563eb, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }}>
            <Sparkles size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', lineHeight: '1' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px' }}>SKINSPREE</span>
              <span style={{ fontSize: '1.3rem', fontWeight: '400', color: '#2563eb', marginLeft: '4px' }}>CLINIC</span>
            </div>
            <span style={{ fontSize: '0.6rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: '600', display: 'block', marginTop: '2px' }}>A Touch of Perfection</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#hero" style={{ fontWeight: '600', color: '#2563eb' }}>Home</a>
          <a href="#about" style={{ fontWeight: '500', color: '#475569' }}>About Us</a>
          <a href="#services" style={{ fontWeight: '500', color: '#475569' }}>Services</a>
          <a href="#doctor" style={{ fontWeight: '500', color: '#475569' }}>Doctor Profile</a>
          <a href="#locations" style={{ fontWeight: '500', color: '#475569' }}>Locations</a>
          <a href="#footer" style={{ fontWeight: '500', color: '#475569' }}>Contact</a>

          {/* Pages Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setPagesDropdown(true)}
            onMouseLeave={() => setPagesDropdown(false)}
          >
            <button 
              style={{ background: 'transparent', border: 'none', fontWeight: '500', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 0', fontSize: '0.95rem' }}
            >
              <span>Pages</span>
              <ChevronDown size={15} />
            </button>

            {pagesDropdown && (
              <div 
                className="glass-card animate-fade-in" 
                style={{ 
                  position: 'absolute', 
                  top: '100%', 
                  left: '0', 
                  width: '200px', 
                  background: '#ffffff', 
                  borderRadius: '12px', 
                  padding: '12px', 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  zIndex: 1001
                }}
              >
                <a href="#blog" style={{ padding: '8px 12px', borderRadius: '6px', color: '#334155', fontWeight: '500', fontSize: '0.9rem' }}>Blog & News</a>
                <a href="#testimonials" style={{ padding: '8px 12px', borderRadius: '6px', color: '#334155', fontWeight: '500', fontSize: '0.9rem' }}>Testimonials</a>
                <a href="#process" style={{ padding: '8px 12px', borderRadius: '6px', color: '#334155', fontWeight: '500', fontSize: '0.9rem' }}>How It Works</a>
              </div>
            )}
          </div>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onOpenBooking} className="btn-primary header-desktop-cta" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            <Calendar size={16} />
            <span>Ask for Appointment</span>
          </button>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button 
            className="header-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: '#f1f5f9', border: 'none', padding: '8px', borderRadius: '8px', color: '#0f172a', cursor: 'pointer' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-drawer animate-fade-in"
          style={{
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
          }}
        >
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '600', color: '#2563eb', padding: '8px 0' }}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: '#334155', padding: '8px 0' }}>About Us</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: '#334155', padding: '8px 0' }}>Services</a>
          <a href="#doctor" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: '#334155', padding: '8px 0' }}>Dr. Palak Gandhi Profile</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: '#334155', padding: '8px 0' }}>How It Works</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: '#334155', padding: '8px 0' }}>Testimonials</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: '#334155', padding: '8px 0' }}>Blog & News</a>
          <a href="#locations" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: '#334155', padding: '8px 0' }}>Locations & Contact</a>

          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center', padding: '12px', marginTop: '8px' }}
          >
            <Calendar size={18} />
            <span>Ask for Appointment</span>
          </button>
        </div>
      )}
    </header>
  );
}
