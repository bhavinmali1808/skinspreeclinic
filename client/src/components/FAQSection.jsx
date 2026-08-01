import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const DEFAULT_FAQS = [
  { question: "What treatments does SkinSpree Clinic specialize in?", answer: "SkinSpree Clinic specializes in medical dermatology, aesthetic skin rejuvenation, laser scar removal, anti-aging therapies, pigmentation correction, and hair restoration." },
  { question: "How do I book an appointment with a dermatologist?", answer: "You can easily book an appointment online using our interactive booking button on the website, or call our helpline at +1 (555) 864-4444." },
  { question: "Are laser skin treatments safe for sensitive skin?", answer: "Yes! We use medical-grade, FDA-cleared cooling lasers tailored precisely to your specific skin type after a patch test." },
  { question: "Where is SkinSpree Clinic located?", answer: "Our main flagship clinic is located at 350 5th Ave, New York, NY 10118. We offer both in-clinic visits and virtual tele-dermatology consultations." }
];

export default function FAQSection() {
  const [faqs, setFaqs] = useState(DEFAULT_FAQS);
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => {
        const contentType = res.headers.get('content-type');
        if (res.ok && contentType && contentType.includes('application/json')) {
          return res.json();
        }
        return null;
      })
      .then(data => {
        if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
          setFaqs(data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="faq" style={{ padding: '56px 0', background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Section Header */}
        <div className="reveal-on-scroll reveal-fade-down" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            <HelpCircle size={16} />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Got Questions? We Have Answers</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            Everything you need to know about our dermatology treatments, booking, and clinic policies.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`glass-card reveal-on-scroll reveal-fade-up delay-${(idx + 1) * 100}`}
                style={{ padding: '20px 28px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f172a' }}>{faq.question}</h3>
                  <div style={{ color: '#2563eb' }}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {isOpen && (
                  <p style={{ marginTop: '16px', color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic AEO Schema Injection for FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer
                }
              }))
            })
          }}
        />

      </div>
    </section>
  );
}
