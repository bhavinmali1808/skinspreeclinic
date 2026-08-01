import React from 'react';
import { MessageSquare, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Samantha Elizabeth",
      location: "New York, NY",
      rating: 5,
      text: "I had an excellent experience at SkinSpree Clinic during a recent acne flare-up emergency. The team was incredibly supportive, attentive, and I received prompt laser treatment. I felt cared for throughout the entire process!"
    },
    {
      name: "Olivia Marie",
      location: "Los Angeles, CA",
      rating: 5,
      text: "SkinSpree Clinic has been my go-to for skin consultations. I am always impressed by the professionalism and genuine care from Dr. Sarah. She takes time to explain every routine, making every visit personal."
    },
    {
      name: "Jessica Claire",
      location: "Chicago, IL",
      rating: 5,
      text: "The specialists provided me with exact guidance needed for my stubborn pigmentation. Their expertise and timely support made a huge difference in my recovery, and I am grateful for the comprehensive care."
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #2563eb 100%)', color: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#93c5fd', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            <MessageSquare size={16} />
            <span>PATIENT TESTIMONIALS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '16px' }}>Hear From Those Who Trust SkinSpree Clinic</h2>
          <p style={{ color: '#bfdbfe', fontSize: '1.05rem' }}>
            Our patients' experiences speak volumes. Read how our specialized care has brought confidence and health back to their lives.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(12px)', 
                borderRadius: '16px', 
                padding: '32px', 
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff' }}>{rev.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#93c5fd' }}>{rev.location}</div>
                  </div>
                  <Quote size={28} color="#93c5fd" opacity={0.6} />
                </div>
                <p style={{ fontSize: '0.95rem', color: '#eff6ff', lineHeight: '1.7', marginBottom: '24px' }}>"{rev.text}"</p>
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
