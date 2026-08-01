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
          {
            id: "blog-1",
            title: "Understanding the Importance of Regular Skin Check-ups",
            date: "January 15, 2026",
            category: "Dermatology Care",
            author: "Dr. Palak Sharmeel Gandhi",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            excerpt: "Learn why annual dermatological screenings are crucial for early detection of skin issues and long-term skin health."
          },
          {
            id: "blog-2",
            title: "How Microneedling Can Transform Your Skin After 35",
            date: "June 12, 2026",
            category: "Aesthetics",
            author: "Dr. Palak Sharmeel Gandhi",
            image: "https://images.unsplash.com/photo-1512290900676-26c2a6a095ae?auto=format&fit=crop&w=800&q=80",
            excerpt: "Discover how controlled micro-injuries can stimulate collagen production for tighter, younger-looking skin."
          },
          {
            id: "blog-3",
            title: "Advances in Laser Hair Reduction: What You Need to Know",
            date: "July 3, 2026",
            category: "Laser Tech",
            author: "Dr. Palak Sharmeel Gandhi",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
            excerpt: "A comprehensive guide to the latest laser technologies for safe and effective hair removal."
          }
        ]);
      });
  }, []);

  return (
    <section id="blog" style={{ padding: '56px 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="reveal-on-scroll reveal-fade-down" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            <Newspaper size={16} />
            <span>BLOG & NEWS</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Stay Informed with the Latest in Skincare</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Our Blog & News section keeps you updated with the latest skin health tips, aesthetic breakthroughs, clinic news, and wellness advice.
          </p>
        </div>

        {/* 3 Featured Blog Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {blogs.map((b, idx) => (
            <article 
              key={b.id || idx} 
              className={`glass-card reveal-on-scroll reveal-fade-up delay-${(idx + 1) * 100}`}
              style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
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

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: '1.4', color: '#0f172a' }}>{b.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.925rem', marginBottom: '20px', lineHeight: '1.6' }}>{b.excerpt}</p>
                </div>
              </div>

              <div style={{ padding: '0 24px 24px 24px' }}>
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
