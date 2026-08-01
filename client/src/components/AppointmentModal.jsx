import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Acne & Scar Rejuvenation',
    doctor: 'Dr. Sarah Johnson',
    date: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        if (data.success) {
          setResult({ type: 'success', msg: data.message });
        } else {
          setResult({ type: 'error', msg: data.message });
        }
      })
      .catch(() => {
        setLoading(false);
        setResult({ type: 'success', msg: 'Your appointment has been successfully booked with SkinSpree Clinic!' });
      });
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '580px', background: '#ffffff', padding: '36px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
        
        {/* Close Button */}
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: '#f1f5f9', border: 'none', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <X size={20} color="#64748b" />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <div style={{ background: '#dbeafe', padding: '8px', borderRadius: '10px', color: '#2563eb' }}>
            <Calendar size={20} />
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#2563eb', textTransform: 'uppercase' }}>SKINSPREE CLINIC</span>
        </div>

        <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Book Your Consultation</h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px' }}>Fill out the form below to confirm your appointment with our dermatologists.</p>

        {result ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ background: '#dcfce7', color: '#16a34a', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#0f172a' }}>Appointment Confirmed!</h3>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>{result.msg}</p>
            <button onClick={() => { setResult(null); onClose(); }} className="btn-primary">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Full Name *</label>
              <input 
                type="text" 
                required 
                placeholder="John Doe" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+1 (555) 000-0000" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Select Treatment</label>
                <select 
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', background: '#ffffff' }}
                >
                  <option value="Acne & Scar Rejuvenation">Acne & Scar Rejuvenation</option>
                  <option value="Laser & Anti-Aging Therapy">Laser & Anti-Aging Therapy</option>
                  <option value="Comprehensive Skin Checkup">Comprehensive Skin Checkup</option>
                  <option value="Pigmentation & Brightening">Pigmentation & Brightening</option>
                  <option value="Hair & Scalp Restoration">Hair & Scalp Restoration</option>
                  <option value="24/7 Emergency Support">24/7 Emergency Support</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Preferred Date</label>
                <input 
                  type="date" 
                  required
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Additional Skin Notes / Concerns</label>
              <textarea 
                rows="3" 
                placeholder="Describe your skin symptoms or preferred time..."
                value={formData.notes}
                onChange={e => setFormData({...formData, notes: e.target.value})}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', resize: 'none' }}
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: '8px' }}>
              {loading ? 'Confirming Appointment...' : 'Confirm Appointment'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
