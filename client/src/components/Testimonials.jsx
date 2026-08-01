import React from 'react';
import { MessageSquare, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Priya S.",
      location: "Bodakdev, Ahmedabad",
      rating: 5,
      text: "I had an excellent experience at SkinSpree Clinic for my acne scars. Dr. Palak was incredibly supportive, and the RF Matrix treatment gave me amazing results. I truly felt cared for throughout the entire process.",
      delay: "delay-100"
    },
    {
      name: "Aisha R.",
      location: ", Ahmedabad",
      rating: 5,
      text: "SkinSpree has been my go-to for laser hair reduction, and I am always impressed by the professionalism and genuine care from the doctors. The technology is top-notch and painless.",
      delay: "delay-200"
    },
    {
      name: "Rohan M.",
      location: "Satellite, Ahmedabad",
      rating: 5,
      text: "The specialists at SkinSpree provided me with the guidance I needed to manage my severe pigmentation. Their expertise and timely support made a huge difference in my skin's clarity.",
      delay: "delay-300"
    }
  ];

  return (
    <section id="testimonials" style={{ padding: '56px 0', background: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #2563eb 100%)', color: '#ffffff' }}>
      <div className="container">

        {/* Section Header */}
        <div className="reveal-on-scroll reveal-fade-down" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#93c5fd', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            <MessageSquare size={16} />
            <span>PATIENT TESTIMONIALS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>Hear from Those Who Trust SkinSpree Clinic</h2>
          <p style={{ color: '#bfdbfe', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Our patients' experiences speak volumes. Read how SkinSpree Clinic has provided compassionate, expert care and transformed their skin and confidence.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className={`reveal-on-scroll reveal-zoom ${rev.delay}`}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                borderRadius: '18px',
                padding: '36px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: '700' }}>{rev.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#93c5fd' }}>{rev.location}</div>
                  </div>
                  <Quote size={32} color="#93c5fd" opacity={0.6} />
                </div>
                <p style={{ fontSize: '1rem', color: '#eff6ff', lineHeight: '1.7', marginBottom: '28px' }}>"{rev.text}"</p>
              </div>

              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#f97316" color="#f97316" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
