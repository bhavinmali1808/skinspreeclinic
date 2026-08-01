import React, { useState, useEffect } from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        if (data.success) setBlogs(data.data);
      })
      .catch(() => {
        setBlogs([
          { id: "blog-1", title: "Understanding the Importance of Regular Health & Skin Checkups", date: "January 15, 2026", category: "Skincare Advice", author: "Dr. Sarah Johnson", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", excerpt: "Preventative dermatology can catch skin lesions early and boost your natural radiance." },
          { id: "blog-2", title: "How to Manage Stress & Prevent Hormonal Acne Breakouts", date: "January 24, 2026", category: "Wellness", author: "Dr. John Smith", image: "https://images.unsplash.com/photo-1512290900676-26c2a6a095ae?auto=format&fit=crop&w=800&q=80", excerpt: "Cortisol spikes directly influence sebum production. Discover science-backed techniques." },
          { id: "blog-3", title: "New Advances in Laser Aesthetics: What You Need to Know", date: "February 01, 2026", category: "Technology", author: "Dr. Emily Davis", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", excerpt: "Explore the latest non-ablative laser innovations that deliver skin renewal with zero downtime." }
        ]);
      });
  }, []);

  return (
    <section id="blog" style={{ padding: '100px 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            <Newspaper size={16} />
            <span>BLOG & NEWS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Stay Informed With The Latest In Dermatology</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            Our Blog & News section keeps you updated with expert skin tips, medical breakthroughs, clinic news, and wellness advice.
          </p>
        </div>

        {/* Blog Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {blogs.map((b) => (
            <article key={b.id} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: '#2563eb', color: '#ffffff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                  {b.category}
                </span>
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.85rem', marginBottom: '12px' }}>
                  <Calendar size={14} />
                  <span>{b.date} • {b.author}</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', lineHeight: '1.4' }}>{b.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.6' }}>{b.excerpt}</p>

                <a href="#blog" style={{ color: '#2563eb', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
