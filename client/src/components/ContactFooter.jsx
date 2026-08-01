import React from 'react';
import { Sparkles, Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin, Youtube, Clock } from 'lucide-react';

export default function ContactFooter() {
  const waUrl = "https://wa.me/917825829458?text=Hi%20SkinSpree%20Clinic,%20I%20want%20to%20inquire%20about%20a%20skin%20consultation.";
  const igUrl = "https://www.instagram.com/skinspreeclinic?igsh=MWxoNzhtem9qMWNwYg==";

  return (
    <footer id="footer" style={{ background: '#090d16', color: '#94a3b8', paddingTop: '80px', paddingBottom: '32px' }}>
      <div className="container">

        {/* Top Location & Quick Contact Cards */}
        <div id="locations" className="reveal-on-scroll reveal-fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Location 1: Bodakdev */}
          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '14px', borderLeft: '4px solid #2563eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#60a5fa', fontWeight: '700' }}>
              <MapPin size={18} />
              <span>Location 1 (Bodakdev)</span>
            </div>
            <div style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '600', marginBottom: '6px' }}>
              A/5, Shivalik Business Center, Rajpath Club Lane, Bodakdev, Ahmedabad-380054
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', color: '#94a3b8', marginTop: '8px' }}>
              <Clock size={14} color="#f97316" />
              <span>Mon - Sun: 10:00 AM - 5:00 PM</span>
            </div>
          </div>

          {/* Location 2:  */}
          <div style={{ background: '#1e293b', padding: '24px', borderRadius: '14px', borderLeft: '4px solid #f97316' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#fb923c', fontWeight: '700' }}>
              <MapPin size={18} />
              <span>Location 2 ()</span>
            </div>
            <div style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '600', marginBottom: '6px' }}>
              C-4, Shivani Apartments, Opp. Azad Society, B/h Sahjanand College, , Ahmedabad-380015
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', color: '#94a3b8', marginTop: '8px' }}>
              <Clock size={14} color="#f97316" />
              <span>Mon - Sun: 05:00 PM - 07:00 PM</span>
            </div>
          </div>

          {/* Quick WhatsApp / Phone Card */}
          <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: '#1e293b', padding: '24px', borderRadius: '14px', borderLeft: '4px solid #25D366', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#25D366', fontWeight: '700', marginBottom: '4px' }}>
              <MessageCircle size={20} fill="#25D366" color="#1e293b" />
              <span>WhatsApp Instant Booking</span>
            </div>
            <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '800' }}>+91 78258 29458</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>Click to start direct chat with Dr. Palak Gandhi</div>
          </a>

        </div>

        {/* Main 3 Column Footer Layout */}
        <div className="reveal-on-scroll reveal-fade-up delay-200" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.5fr', gap: '48px', padding: '64px 0 48px 0' }}>

          {/* Left Column: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #2563eb, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={22} color="#ffffff" />
              </div>
              <div>
                <span style={{ fontSize: '1.35rem', fontWeight: '800', color: '#ffffff' }}>SKINSPREE</span>
                <span style={{ fontSize: '1.35rem', fontWeight: '400', color: '#3b82f6', marginLeft: '4px' }}>CLINIC</span>
              </div>
            </div>

            <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.95rem', marginBottom: '12px' }}>
              A Touch of Perfection - Skin | Hair | Nail | Laser
            </div>

            <p style={{ fontSize: '0.925rem', lineHeight: '1.7', marginBottom: '24px', maxWidth: '380px', color: '#94a3b8' }}>
              Reach out to us for all your dermatological needs. We believe in "Skin.vest.ment" – Give yourself the gift of flawless skin with expert medical guidance.
            </p>

            {/* Social Media Links */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a
                href={igUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e1306c', transition: 'all 0.3s' }}
                title="Instagram @skinspreeclinic"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', transition: 'all 0.3s' }}
                title="Facebook Page"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a66c2', transition: 'all 0.3s' }}
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff0000', transition: 'all 0.3s' }}
                title="YouTube Channel"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Middle Column: Company & Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '20px' }}>Company & Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#about" style={{ color: '#94a3b8' }}>About Us</a></li>
              <li><a href="#about" style={{ color: '#94a3b8' }}>Our Mission & Vision</a></li>
              <li><a href="#doctor" style={{ color: '#94a3b8' }}>Careers & Team</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8' }}>Legal Notice & FAQ</a></li>
              <li><a href="#services" style={{ color: '#94a3b8' }}>Acne & Scar Treatment</a></li>
              <li><a href="#services" style={{ color: '#94a3b8' }}>Laser Hair Reduction</a></li>
              <li><a href="#services" style={{ color: '#94a3b8' }}>Anti-Aging Solutions</a></li>
              <li><a href="#services" style={{ color: '#94a3b8' }}>Hair Fall Treatment</a></li>
            </ul>
          </div>

          {/* Right Column: Contact Info & Both Clinic Locations */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '20px' }}>Contact & Locations</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                <Phone size={18} color="#38bdf8" />
                <span><strong>Contact Us:</strong> +91 7265060006</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                <Mail size={18} color="#38bdf8" />
                <span><strong>Email Us:</strong> Dr.palakgandhi@gmail.com</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#25D366' }}>
                <MessageCircle size={18} />
                <span><strong>WhatsApp:</strong> +91 78258 29458</span>
              </div>

              <div style={{ marginTop: '8px', color: '#cbd5e1', lineHeight: '1.6' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <MapPin size={16} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <div><strong>Location 1 (Bodakdev):</strong> A/5, Shivalik Business Center, Rajpath Club Lane, Bodakdev, Ahmedabad-380054</div>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: '10px' }}>
                  <MapPin size={16} color="#f97316" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <div><strong>Location 2 (Ambavadi):</strong> C-4, Shivani Apartments, Opp. Azad Society, B/h Sahjanand College, Ambavadi, Ahmedabad-380015</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem' }}>
          <div>2026 © <strong>SkinSpree Clinic</strong> by Dr. Palak Sharmeel Gandhi. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#patient-rights">Patient Rights</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
