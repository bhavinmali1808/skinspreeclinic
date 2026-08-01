import React from 'react';
import { HelpCircle, Calendar, Stethoscope, Sparkles, HeartPulse } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: Calendar,
      title: 'Book an Appointment',
      desc: 'Schedule your consultation online or call us directly at +91 7265060006.',
      delay: 'delay-100'
    },
    {
      num: '02',
      icon: Stethoscope,
      title: 'Consult Our Expert',
      desc: 'Meet with Dr. Palak Gandhi for a personalized skin, hair, or nail diagnosis.',
      delay: 'delay-200'
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'Receive Custom Care',
      desc: 'Undergo your tailored treatment plan using advanced medical and aesthetic technology.',
      delay: 'delay-300'
    },
    {
      num: '04',
      icon: HeartPulse,
      title: 'Follow-Up & Maintenance',
      desc: 'Regular follow-ups to ensure long-term skin health and visible, lasting results.',
      delay: 'delay-400'
    }
  ];

  return (
    <section id="process" style={{ padding: '56px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="reveal-on-scroll reveal-fade-down" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            <HelpCircle size={16} />
            <span>HOW IT WORKS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Trusted Dermatology with a Focus on Your Well-Being</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7' }}>
            At SkinSpree Clinic, we've streamlined the dermatological process to ensure you receive the best care with ease and convenience.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num} 
                className={`glass-card reveal-on-scroll reveal-fade-up ${step.delay}`}
                style={{ padding: '36px', position: 'relative' }}
              >
                <div style={{ fontSize: '2.8rem', fontWeight: '800', color: '#2563eb', opacity: 0.15, position: 'absolute', top: '20px', right: '24px' }}>
                  {step.num}
                </div>
                
                <div style={{ background: '#dbeafe', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', marginBottom: '24px' }}>
                  <Icon size={26} />
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#0f172a' }}>{step.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.65' }}>{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
