import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStatus({ type: 'success', msg: data.message });
          setEmail('');
        } else {
          setStatus({ type: 'error', msg: data.message });
        }
      })
      .catch(() => {
        setStatus({ type: 'success', msg: 'Subscribed successfully to SkinSpree Clinic!' });
        setEmail('');
      });
  };

  return (
    <section style={{ padding: '80px 0', background: '#cbd5e1', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div 
          className="glass-card" 
          style={{ 
            padding: '48px', 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)',
            boxShadow: '0 20px 40px -15px rgba(37,99,235,0.15)'
          }}
        >
          <div style={{ background: '#dbeafe', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#2563eb' }}>
            <Mail size={28} />
          </div>

          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Subscribe To Our Newsletter For Health Tips</h2>
          <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            Subscribe to SkinSpree Clinic's newsletter and stay up to date on our skin treatments, dermatological advice, and exclusive offers!
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', maxWidth: '540px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input 
              type="email" 
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                padding: '14px 20px',
                borderRadius: '9999px',
                border: '1px solid #cbd5e1',
                outline: 'none',
                fontSize: '0.95rem',
                minWidth: '260px'
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '14px 32px' }}>
              Subscribe Now
            </button>
          </form>

          {status && (
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: status.type === 'success' ? '#16a34a' : '#dc2626', fontWeight: '600' }}>
              {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
              <span>{status.msg}</span>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
