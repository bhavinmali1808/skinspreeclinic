import React from 'react';
import { Tag, MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{ background: '#0f172a', color: '#94a3b8', fontSize: '0.825rem', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#e2e8f0' }}>
          <Tag size={14} color="#f97316" />
          <span>Get a discount of up to <strong>50%</strong> for dermatology services this month!</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} color="#3b82f6" />
            <span>350 5th Ave, New York, 10118</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={14} color="#3b82f6" />
            <span>support@skinspreeclinic.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={14} color="#3b82f6" />
            <span>+1 (555) 864-4444</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>
            <Clock size={14} color="#f97316" />
            <span>Mon - Sat: 9AM - 6PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
