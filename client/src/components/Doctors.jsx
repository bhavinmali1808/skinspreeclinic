import React, { useState, useEffect } from 'react';
import { UserCheck, Star, Calendar } from 'lucide-react';

export default function Doctors({ onOpenBooking }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/api/doctors')
      .then(res => res.json())
      .then(data => {
        if (data.success) setDoctors(data.data);
      })
      .catch(() => {
        setDoctors([
          { id: "doc-1", name: "Dr. John Smith", specialty: "Senior Dermatologist & Laser Specialist", qualification: "MD, FAAD (15+ Yrs Exp)", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80", rating: 4.9 },
          { id: "doc-2", name: "Dr. Sarah Johnson", specialty: "Cosmetic & Aesthetics Surgeon", qualification: "MBBS, MD Dermatology", image: "https://images.unsplash.com/photo-1594824813566-7885a3964506?auto=format&fit=crop&w=600&q=80", rating: 5.0 },
          { id: "doc-3", name: "Dr. Michael Lee", specialty: "Pediatric & Clinical Dermatologist", qualification: "MD, Pediatric Skin Specialist", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80", rating: 4.8 },
          { id: "doc-4", name: "Dr. Emily Davis", specialty: "Trichologist & Scalp Expert", qualification: "DNB Dermatology, Hair Restoration", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80", rating: 4.9 }
        ]);
      });
  }, []);

  return (
    <section id="doctors" style={{ padding: '100px 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 56px auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            <UserCheck size={16} />
            <span>OUR DOCTORS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Meet Our Specialist Dermatologists</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            Our team of board-certified dermatologists and cosmetic surgeons is dedicated to providing expert care across all skin, laser, and hair health domains.
          </p>
        </div>

        {/* Doctors Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {doctors.map((doc) => (
            <div key={doc.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', textAlign: 'center' }}>
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', padding: '4px 10px', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: '700', color: '#0f172a' }}>
                  <Star size={14} fill="#f97316" color="#f97316" />
                  <span>{doc.rating}</span>
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{doc.name}</h3>
                <div style={{ color: '#2563eb', fontWeight: '600', fontSize: '0.9rem', marginBottom: '6px' }}>{doc.specialty}</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '20px' }}>{doc.qualification}</div>

                <button 
                  onClick={onOpenBooking} 
                  className="btn-outline" 
                  style={{ width: '100%', padding: '10px', fontSize: '0.9rem', display: 'inline-flex', justifyContent: 'center', gap: '8px' }}
                >
                  <Calendar size={16} />
                  <span>Consult Doctor</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
