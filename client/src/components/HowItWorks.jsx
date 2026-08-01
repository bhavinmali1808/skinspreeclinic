import React from 'react';
import { HelpCircle, CalendarCheck, UserCheck, HeartPulse, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Book An Appointment',
      desc: 'Schedule your visit through our easy-to-use online system or by calling our support line. Choose your preferred time & doctor.'
    },
    {
      num: '02',
      title: 'Consult Our Experts',
      desc: 'Meet with our board-certified dermatologists who conduct detailed skin diagnostic checks and recommend personalized treatments.'
    },
    {
      num: '03',
      title: 'Receive Targeted Care',
      desc: 'Once your treatment plan is established, undergo safe, state-of-the-art medical or aesthetic laser procedures.'
    },
    {
      num: '04',
      title: 'Follow-Up & Wellness',
      desc: 'After your treatment, stay connected for follow-up skin checks and customized skincare maintenance routines.'
    }
  ];

  return (
    <section id="process" style={{ padding: '100px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            <HelpCircle size={16} />
            <span>HOW IT WORKS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Trusted Healthcare With A Focus On Your Well-Being</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            At SkinSpree Clinic, we have streamlined our dermatological care process so you receive prompt, expert treatment with total comfort.
          </p>
        </div>

        {/* 4 Step Process Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {steps.map((step) => (
            <div key={step.num} className="glass-card" style={{ padding: '32px', position: 'relative' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#2563eb', opacity: 0.2, position: 'absolute', top: '20px', right: '24px' }}>
                {step.num}
              </div>
              <div style={{ background: '#dbeafe', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontWeight: '800', fontSize: '1.1rem', marginBottom: '20px' }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
