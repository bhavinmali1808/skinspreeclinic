import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// SkinSpree Clinic Data Store
const DB = {
  doctors: [
    {
      id: "doc-1",
      name: "Dr. Palak Sharmeel Gandhi",
      altName: "Dr. Palak Mehta Gandhi",
      specialty: "Medical & Cosmetic Dermatologist",
      qualification: "MBBS (Smt. N.H.L. Municipal Medical College, Ahmedabad) | Reg: G-41873",
      image: "https://images.unsplash.com/photo-1594824813566-7885a3964506?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      experience: "11+ Years Experience",
      bio: "Dr. Palak brings over 11 years of healthcare experience, specializing in medical dermatology (acne, eczema, hair loss) and advanced cosmetic procedures (lasers, fillers, Botox)."
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Acne & Scar Treatment",
      category: "Dermatology",
      icon: "Sparkles",
      description: "Effective solutions for active acne, acne scars, and open pores using chemical peels, microneedling, and RF Matrix treatments.",
      tagline: "Clear & Smooth Skin"
    },
    {
      id: "srv-2",
      title: "Pigmentation & Brightening",
      category: "Aesthetics",
      icon: "Sun",
      description: "Advanced treatments for hyper-pigmentation, melasma, and skin brightening to restore your natural glow and even skin tone.",
      tagline: "Even Tone & Radiance"
    },
    {
      id: "srv-3",
      title: "Anti-Aging & Wrinkles",
      category: "Aesthetics",
      icon: "Zap",
      description: "Minimally invasive Botox and Dermal Fillers to reduce fine lines, wrinkles, and restore youthful volume to your face.",
      tagline: "Youthful Rejuvenation"
    },
    {
      id: "srv-4",
      title: "Laser Hair Reduction",
      category: "Laser Care",
      icon: "ShieldAlert",
      description: "Safe and permanent laser hair removal solutions using the latest technology for a smooth, hair-free skin experience.",
      tagline: "Painless & Permanent"
    },
    {
      id: "srv-5",
      title: "Hair Fall & Trichology",
      category: "Trichology",
      icon: "Feather",
      description: "Medical-grade treatments for hair loss, thinning, and scalp conditions, focusing on healthy hair growth and restoration.",
      tagline: "Scalp & Follicle Therapy"
    },
    {
      id: "srv-6",
      title: "HydraFacial & Skin Rejuvenation",
      category: "Facial Care",
      icon: "Stethoscope",
      description: "Deep cleansing, exfoliation, and hydration treatments to revitalize dull, tired skin and achieve a healthy, glowing complexion.",
      tagline: "Instant Radiance"
    }
  ],
  blogs: [
    {
      id: "blog-1",
      title: "Understanding the Importance of Regular Skin Check-ups",
      date: "January 15, 2026",
      category: "Dermatology Care",
      author: "Dr. Palak Sharmeel Gandhi",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      excerpt: "Learn why annual dermatological screenings are crucial for early detection of skin issues and maintaining long-term skin health."
    },
    {
      id: "blog-2",
      title: "How Microneedling Can Transform Your Skin After 35",
      date: "June 12, 2026",
      category: "Aesthetic Breakthroughs",
      author: "Dr. Palak Sharmeel Gandhi",
      image: "https://images.unsplash.com/photo-1512290900676-26c2a6a095ae?auto=format&fit=crop&w=800&q=80",
      excerpt: "Discover how controlled micro-injuries can stimulate natural collagen production for tighter, smoother, and younger-looking skin."
    },
    {
      id: "blog-3",
      title: "Advances in Laser Hair Reduction: What You Need to Know",
      date: "July 3, 2026",
      category: "Laser Tech",
      author: "Dr. Palak Sharmeel Gandhi",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      excerpt: "A comprehensive guide to the latest laser technologies for safe, effective, and virtually painless permanent hair removal."
    }
  ],
  faqs: [
    {
      question: "What treatments does SkinSpree Clinic specialize in?",
      answer: "SkinSpree Clinic specializes in medical and cosmetic dermatology including Acne & Scar treatment, Pigmentation & Brightening, Anti-Aging Botox & Fillers, Laser Hair Reduction, Hair Fall & Trichology, and HydraFacials."
    },
    {
      question: "Who is the lead doctor at SkinSpree Clinic?",
      answer: "SkinSpree Clinic is led by Dr. Palak Sharmeel Gandhi (Dr. Palak Mehta Gandhi), a Medical and Cosmetic Dermatologist with MBBS from Smt. N.H.L. Municipal Medical College, Ahmedabad (Reg: G-41873) and 11+ years of healthcare experience."
    },
    {
      question: "Where are SkinSpree Clinic locations situated in Ahmedabad?",
      answer: "We have two locations: Location 1 at A/5, Shivalik Business Center, Rajpath Club Lane, Bodakdev (10:00 AM - 5:00 PM), and Location 2 at C-4, Shivani Apartments, Opp. Azad Society,  (05:00 PM - 07:00 PM)."
    },
    {
      question: "How do I book an appointment or inquire on WhatsApp?",
      answer: "You can book directly via our online booking widget, call us at +91 7265060006, or send a message on WhatsApp at +91 78258 29458."
    }
  ],
  appointments: [],
  contacts: [],
  subscribers: []
};

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: "OK", service: "SkinSpree Clinic API", timestamp: new Date() });
});

app.get('/api/doctors', (req, res) => {
  res.json({ success: true, count: DB.doctors.length, data: DB.doctors });
});

app.get('/api/services', (req, res) => {
  res.json({ success: true, count: DB.services.length, data: DB.services });
});

app.get('/api/blogs', (req, res) => {
  res.json({ success: true, count: DB.blogs.length, data: DB.blogs });
});

app.get('/api/faqs', (req, res) => {
  res.json({ success: true, count: DB.faqs.length, data: DB.faqs });
});

app.post('/api/appointments', (req, res) => {
  const { name, email, phone, location, service, doctor, date, notes } = req.body;
  if (!name || !phone || !service) {
    return res.status(400).json({ success: false, message: "Please provide your name, phone number, and selected treatment." });
  }
  const newAppointment = {
    id: `apt-${Date.now()}`,
    name,
    email: email || "N/A",
    phone,
    location: location || "Bodakdev, Ahmedabad",
    service,
    doctor: doctor || "Dr. Palak Sharmeel Gandhi",
    date: date || new Date().toISOString().split('T')[0],
    notes: notes || "",
    status: "Confirmed",
    createdAt: new Date()
  };
  DB.appointments.push(newAppointment);
  res.status(201).json({
    success: true,
    message: `Your appointment for ${service} has been successfully scheduled with Dr. Palak Sharmeel Gandhi at SkinSpree Clinic (${newAppointment.location})!`,
    appointment: newAppointment
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ success: false, message: "Name and message are required." });
  }
  const inquiry = { id: `inq-${Date.now()}`, name, email, phone, message, createdAt: new Date() };
  DB.contacts.push(inquiry);
  res.status(201).json({ success: true, message: "Thank you for contacting SkinSpree Clinic. Our team will reach out to you shortly!" });
});

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: "Please enter a valid email address." });
  }
  DB.subscribers.push({ email, createdAt: new Date() });
  res.status(200).json({ success: true, message: "Thank you for subscribing to SkinSpree Clinic newsletter!" });
});

app.listen(PORT, () => {
  console.log(`SkinSpree Clinic Server running on port ${PORT}`);
});
