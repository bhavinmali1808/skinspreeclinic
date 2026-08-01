import React, { useState } from 'react';
import { Tag, MapPin, Mail, Phone, MessageCircle, Bell, Volume2 } from 'lucide-react';
import { requestNotificationPermission, playCompletionSound } from '../utils/notifications';

export default function TopBar() {
  const [notifGranted, setNotifGranted] = useState(
    typeof Notification !== 'undefined' && Notification.permission === 'granted'
  );

  const waUrl = "https://wa.me/917825829458?text=Hi%20SkinSpree%20Clinic,%20I%20want%20to%20inquire%20about%20a%20skin%20consultation.";

  const handleEnableNotifications = async () => {
    const granted = await requestNotificationPermission();
    setNotifGranted(granted);
    playCompletionSound();
  };

  return (
    <div style={{ background: '#0f172a', color: '#94a3b8', fontSize: '0.825rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>

        {/* Banner Offer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f8fafc', maxWidth: '100%' }}>
          <Tag size={14} color="#f97316" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '0.8rem', lineHeight: '1.3' }}>
            Get up to <strong style={{ color: '#38bdf8' }}>20% OFF</strong> HydraFacial & Laser Sessions!
          </span>
        </div>

        {/* Info & Notification Sound Toggle (Desktop Only) */}
        <div className="topbar-details" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#e2e8f0' }}>
            <MapPin size={14} color="#38bdf8" />
            <span>Bodakdev & Ambavadi, Ahmedabad</span>
          </div>

          <a href="tel:+917265060006" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#e2e8f0' }}>
            <Phone size={14} color="#38bdf8" />
            <span>+91 7265060006</span>
          </a>

          <a href="mailto:Dr.palakgandhi@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#e2e8f0' }}>
            <Mail size={14} color="#38bdf8" />
            <span>Dr.palakgandhi@gmail.com</span>
          </a>

          <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#25D366', fontWeight: '600' }}>
            <MessageCircle size={14} />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={handleEnableNotifications}
            title="Enable sound & desktop notifications"
            style={{
              background: notifGranted ? 'rgba(34, 197, 94, 0.15)' : 'rgba(59, 130, 246, 0.15)',
              color: notifGranted ? '#4ade80' : '#60a5fa',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2px 10px',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <Bell size={12} />
            <Volume2 size={12} />
            <span>{notifGranted ? 'Alerts On' : 'Alerts'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
