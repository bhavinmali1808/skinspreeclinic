import React from 'react';
import { UserCheck, Star, Calendar, MessageCircle, Award, CheckCircle } from 'lucide-react';

export default function Doctors({ onOpenBooking }) {
  const doctor = {
    name: "Dr. Palak Sharmeel Gandhi",
    altName: "Dr. Palak Mehta Gandhi",
    title: "Medical & Cosmetic Dermatologist",
    qualification: "MBBS (Smt. N.H.L. Municipal Medical College, Ahmedabad)",
    registration: "G-41873",
    experience: "11+ Years Experience",
    bio: "Dr. Palak brings over 11 years of healthcare experience, specializing in both medical dermatology (acne, eczema, hair loss) and advanced cosmetic procedures (lasers, fillers, Botox).",
    rating: 4.9,
    reviews: "1000+ Happy Patients",
    image: "https://images.unsplash.com/photo-1594824813566-7885a3964506?auto=format&fit=crop&w=800&q=80"
  };

  const waDocUrl = `https://wa.me/917825829458?text=${encodeURIComponent("Hi SkinSpree Clinic, I want to book a consultation with Dr. Palak Sharmeel Gandhi.")}`;

  return (
    <section id="doctor" style={{ padding: '56px 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="reveal-on-scroll reveal-fade-down" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            <UserCheck size={16} />
            <span>MEET OUR SPECIALIST</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Expert Medical & Cosmetic Dermatology</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            Our clinic is led by a dedicated specialist doctor committed to providing expert care across a wide range of dermatological fields.
          </p>
        </div>

        {/* Doctor Card Profile */}
        <div 
          className="glass-card reveal-on-scroll reveal-zoom"
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            padding: '40px', 
            display: 'grid', 
            gridTemplateColumns: '320px 1fr', 
            gap: '40px', 
            alignItems: 'center',
            background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)',
            boxShadow: '0 20px 40px -10px rgba(37,99,235,0.12)'
          }}
        >
          {/* Doctor Image */}
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '380px' }}>
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.95)', padding: '6px 14px', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: '800', color: '#0f172a' }}>
              <Star size={16} fill="#f97316" color="#f97316" />
              <span>{doctor.rating} / 5.0</span>
            </div>
          </div>

          {/* Doctor Bio Details */}
          <div>
            <div style={{ display: 'inline-block', background: '#dbeafe', color: '#2563eb', fontWeight: '700', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.8rem', marginBottom: '12px' }}>
              Lead Dermatologist & Specialist
            </div>

            <h3 style={{ fontSize: '2rem', marginBottom: '4px', color: '#0f172a' }}>{doctor.name}</h3>
            <div style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '12px' }}>({doctor.altName})</div>

            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2563eb', marginBottom: '12px' }}>
              {doctor.title}
            </div>

            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '10px', borderLeft: '4px solid #2563eb', marginBottom: '20px', fontSize: '0.875rem', color: '#334155' }}>
              <div><strong>Qualification:</strong> {doctor.qualification}</div>
              <div style={{ marginTop: '4px' }}><strong>Gujarat Medical Council Reg:</strong> {doctor.registration}</div>
            </div>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '28px' }}>
              {doctor.bio}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenBooking} 
                className="btn-primary"
                style={{ padding: '12px 24px' }}
              >
                <Calendar size={18} />
                <span>Ask for Appointment with Dr. Palak</span>
              </button>

              <a 
                href={waDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '12px 24px' }}
              >
                <MessageCircle size={18} fill="#ffffff" />
                <span>WhatsApp Dr. Palak</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
