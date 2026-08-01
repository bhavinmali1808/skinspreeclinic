import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappNumber = "917825829458";
  const defaultMessage = encodeURIComponent("Hi SkinSpree Clinic! I would like to inquire about a skin consultation with Dr. Palak Sharmeel Gandhi.");
  const waUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div 
          className="glass-card animate-fade-in" 
          style={{ 
            marginBottom: '12px', 
            padding: '12px 16px', 
            background: '#ffffff', 
            borderRadius: '14px', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '300px',
            borderLeft: '4px solid #25D366'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#1e293b', lineHeight: '1.4' }}>
            <strong>SkinSpree Clinic:</strong> Ask for a consultation with Dr. Palak Gandhi on WhatsApp!
          </div>
          <button 
            onClick={() => setShowTooltip(false)} 
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px' }}
          >
            <X size={14} color="#64748b" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulse-green"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        title="Chat with SkinSpree Clinic on WhatsApp"
      >
        <MessageCircle size={32} fill="#ffffff" color="#25D366" />
      </a>

    </div>
  );
}
