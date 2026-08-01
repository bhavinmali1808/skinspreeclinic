import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2, MapPin, Clock, User, Phone, Mail, Sparkles, Volume2, ExternalLink } from 'lucide-react';
import { notifyTaskComplete, playCompletionSound } from '../utils/notifications';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Bodakdev Clinic (10 AM - 5 PM)',
    service: 'Acne & Scar Treatment',
    doctor: 'Dr. Palak Sharmeel Gandhi',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:30 AM',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [waLink, setWaLink] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Format structured WhatsApp message text
    const messageLines = [
      `Hello SkinSpree Clinic! I would like to Ask for an Appointment.`,
      ``,
      `*Appointment Details:*`,
      `• *Patient Name:* ${formData.name}`,
      `• *Phone:* ${formData.phone}`,
      `• *Treatment:* ${formData.service}`,
      `• *Clinic Location:* ${formData.location}`,
      `• *Dermatologist:* ${formData.doctor}`,
      `• *Preferred Date:* ${formData.date}`,
      `• *Preferred Time:* ${formData.timeSlot}`,
      formData.email ? `• *Email:* ${formData.email}` : ``,
      formData.notes ? `• *Skin Concerns:* ${formData.notes}` : ``
    ].filter(Boolean).join('\n');

    const whatsappNumber = "917825829458";
    const generatedWaUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines)}`;
    setWaLink(generatedWaUrl);

    try {
      // Log to backend API
      await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, waUrl: generatedWaUrl })
      });
    } catch (err) {
      console.log("Logged offline or local server");
    }

    setLoading(false);

    // Play chime audio and trigger browser desktop notification
    notifyTaskComplete(
      "Appointment Request Sent via WhatsApp!",
      `Request for ${formData.service} with Dr. Palak Sharmeel Gandhi prepared for WhatsApp.`
    );

    setResult({
      type: 'success',
      msg: `Your appointment request for ${formData.service} has been prepared! Opening WhatsApp chat with Dr. Palak Sharmeel Gandhi...`
    });

    // Open WhatsApp automatically
    window.open(generatedWaUrl, '_blank');
  };

  const servicesList = [
    "Acne & Scar Treatment",
    "Pigmentation & Brightening",
    "Anti-Aging & Wrinkles",
    "Laser Hair Reduction",
    "Hair Fall & Trichology",
    "HydraFacial & Skin Rejuvenation"
  ];

  const timeSlots = [
    "10:30 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:15 PM ()", "06:15 PM ()"
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '640px', background: '#ffffff', padding: '36px', position: 'relative', maxHeight: '90vh', overflowY: 'auto', borderRadius: '20px' }}>

        {/* Close Button */}
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: '#f1f5f9', border: 'none', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <X size={20} color="#64748b" />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <div style={{ background: '#d1fae5', padding: '8px', borderRadius: '10px', color: '#059669' }}>
            <MessageCircle size={20} fill="#059669" color="#ffffff" />
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#059669', textTransform: 'uppercase', letterSpacing: '1px' }}>SKINSPREE CLINIC • WHATSAPP BOOKING</span>
        </div>

        {/* Heading explicitly changed to Ask for Appointment */}
        <h2 style={{ fontSize: '1.9rem', marginBottom: '6px', color: '#0f172a' }}>Ask for Appointment</h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px' }}>
          Fill in your details below to send your appointment request directly to Dr. Palak Sharmeel Gandhi on WhatsApp.
        </p>

        {result ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ background: '#dcfce7', color: '#16a34a', width: '68px', height: '68px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <CheckCircle2 size={40} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#0f172a' }}>Appointment Request Ready!</h3>
            <p style={{ color: '#475569', marginBottom: '24px', lineHeight: '1.6', fontSize: '1rem' }}>{result.msg}</p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '14px 28px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={20} fill="#ffffff" />
                <span>Open WhatsApp Chat Again</span>
                <ExternalLink size={16} />
              </a>

              <button onClick={() => { setResult(null); onClose(); }} className="btn-outline" style={{ padding: '14px 24px' }}>
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            {/* Location & Specialist */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
                  <MapPin size={14} color="#2563eb" />
                  <span>Clinic Location *</span>
                </label>
                <select
                  value={formData.location}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', background: '#ffffff', fontSize: '0.9rem' }}
                >
                  <option value="Bodakdev Clinic (10 AM - 5 PM)">Bodakdev Clinic (10 AM - 5 PM)</option>
                  <option value=" Clinic (5 PM - 7 PM)"> Clinic (5 PM - 7 PM)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>
                  <User size={14} color="#2563eb" />
                  <span>Dermatologist *</span>
                </label>
                <input
                  type="text"
                  disabled
                  value="Dr. Palak Sharmeel Gandhi"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', fontWeight: '600', color: '#1e293b' }}
                />
              </div>
            </div>

            {/* Service & Date */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Treatment / Service *</label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', background: '#ffffff', fontSize: '0.9rem' }}
                >
                  {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            {/* Time Slot */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Available Time Slot *</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {timeSlots.map(slot => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setFormData({ ...formData, timeSlot: slot })}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '0.825rem',
                      fontWeight: '600',
                      border: formData.timeSlot === slot ? '2px solid #25D366' : '1px solid #cbd5e1',
                      background: formData.timeSlot === slot ? '#e8f5e9' : '#ffffff',
                      color: formData.timeSlot === slot ? '#1b5e20' : '#475569'
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Patient Name, Email, Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Patient Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Shah"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Email Address (Optional)</label>
              <input
                type="email"
                placeholder="patient@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '6px', color: '#334155' }}>Skin Concerns / Special Requests</label>
              <textarea
                rows="2"
                placeholder="Tell us about your skin or hair condition..."
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', resize: 'none' }}
              />
            </div>

            {/* Direct WhatsApp Chat Action Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: '6px', fontSize: '1.05rem', background: '#25D366', borderRadius: '9999px' }}
            >
              <MessageCircle size={22} fill="#ffffff" color="#25D366" />
              <span>{loading ? 'Preparing WhatsApp Request...' : 'Ask for Appointment via WhatsApp'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
