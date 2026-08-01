import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Data Store for demonstration (MongoDB fallback)
const DB = {
  doctors: [
    {
      id: "doc-1",
      name: "Dr. John Smith",
      specialty: "Senior Dermatologist & Laser Specialist",
      qualification: "MD, FAAD (15+ Yrs Exp)",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      bio: "Pioneer in advanced laser resurfacing and non-invasive facial rejuvenation treatments."
    },
    {
      id: "doc-2",
      name: "Dr. Sarah Johnson",
      specialty: "Cosmetic & Aesthetics Surgeon",
      qualification: "MBBS, MD Dermatology",
      image: "https://images.unsplash.com/photo-1594824813566-7885a3964506?auto=format&fit=crop&w=600&q=80",
      rating: 5.0,
      bio: "Expert in anti-aging treatments, dermal fillers, and personalized skincare protocols."
    },
    {
      id: "doc-3",
      name: "Dr. Michael Lee",
      specialty: "Pediatric & Clinical Dermatologist",
      qualification: "MD, Pediatric Skin Specialist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      bio: "Dedicated to treating eczema, acne, psoriasis, and sensitive skin conditions across all ages."
    },
    {
      id: "doc-4",
      name: "Dr. Emily Davis",
      specialty: "Trichologist & Scalp Expert",
      qualification: "DNB Dermatology, Hair Restoration",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      bio: "Specializing in PRP hair restoration, scalp therapy, and advanced acne scar care."
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Acne & Scar Rejuvenation",
      category: "Dermatology",
      icon: "Sparkles",
      description: "Customized chemical peels, microneedling, and fractional laser therapy to eliminate stubborn acne scars and blemishes.",
      price: "$120"
    },
    {
      id: "srv-2",
      title: "Laser & Anti-Aging Therapy",
      category: "Aesthetics",
      icon: "Zap",
      description: "FDA-approved laser skin tightening, HIFU, and collagen boost therapies for youthful, firm, glowing skin.",
      price: "$250"
    },
    {
      id: "srv-3",
      title: "Comprehensive Skin Checkup",
      category: "Clinical",
      icon: "Stethoscope",
      description: "Full body mole scanning, digital dermoscopy, and diagnostic skin health evaluation by certified dermatologists.",
      price: "$95"
    },
    {
      id: "srv-4",
      title: "Pigmentation & Brightening",
      category: "Aesthetics",
      icon: "Sun",
      description: "Targeted laser melasma removal, glutathione therapy, and hyperpigmentation correction for an even skin tone.",
      price: "$180"
    },
    {
      id: "srv-5",
      title: "Hair & Scalp Restoration",
      category: "Trichology",
      icon: "Feather",
      description: "Advanced PRP growth factor therapy, mesotherapy, and scalp detox treatments to curb hair loss and stimulate growth.",
      price: "$210"
    },
    {
      id: "srv-6",
      title: "24/7 Emergency Skincare Support",
      category: "Emergency",
      icon: "ShieldAlert",
      description: "Immediate triage for severe allergic skin reactions, chemical burns, acute rashes, and flare-ups.",
      price: "$150"
    }
  ],
  blogs: [
    {
      id: "blog-1",
      title: "Understanding the Importance of Regular Health & Skin Checkups",
      date: "January 15, 2026",
      category: "Skincare Advice",
      author: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      excerpt: "Preventative dermatology can catch skin lesions early and boost your natural radiance. Learn why yearly dermatological scans matter."
    },
    {
      id: "blog-2",
      title: "How to Manage Stress & Prevent Hormonal Acne Breakouts",
      date: "January 24, 2026",
      category: "Wellness",
      author: "Dr. John Smith",
      image: "https://images.unsplash.com/photo-1512290900676-26c2a6a095ae?auto=format&fit=crop&w=800&q=80",
      excerpt: "Cortisol spikes directly influence sebum production. Discover science-backed stress reduction techniques for clearer skin."
    },
    {
      id: "blog-3",
      title: "New Advances in Laser Aesthetics: What You Need to Know",
      date: "February 01, 2026",
      category: "Technology",
      author: "Dr. Emily Davis",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      excerpt: "Explore the latest non-ablative laser innovations that deliver dramatic skin renewal with zero downtime."
    }
  ],
  faqs: [
    {
      question: "What treatments does SkinSpree Clinic specialize in?",
      answer: "SkinSpree Clinic specializes in medical dermatology, aesthetic skin rejuvenation, laser scar removal, anti-aging therapies, pigmentation correction, and hair restoration."
    },
    {
      question: "How do I book an appointment with a dermatologist?",
      answer: "You can easily book an appointment online using our interactive booking button on the website, or call our 24/7 helpline at +1 (555) 864-4444."
    },
    {
      question: "Are laser skin treatments safe for sensitive skin?",
      answer: "Yes! We use medical-grade, FDA-cleared cooling lasers tailored precisely to your specific Fitzpatrick skin type and sensitivity profile after a patch test."
    },
    {
      question: "Where is SkinSpree Clinic located?",
      answer: "Our main flagship clinic is located at 350 5th Ave, New York, NY 10118. We offer both in-clinic visits and virtual tele-dermatology consultations."
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
  const { name, email, phone, service, doctor, date, notes } = req.body;
  if (!name || !email || !phone || !service) {
    return res.status(400).json({ success: false, message: "Please provide all required fields." });
  }
  const newAppointment = {
    id: `apt-${Date.now()}`,
    name,
    email,
    phone,
    service,
    doctor: doctor || "First Available Specialist",
    date: date || new Date().toISOString().split('T')[0],
    notes: notes || "",
    status: "Confirmed",
    createdAt: new Date()
  };
  DB.appointments.push(newAppointment);
  res.status(201).json({
    success: true,
    message: "Your appointment has been successfully scheduled with SkinSpree Clinic!",
    appointment: newAppointment
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email, and message are required." });
  }
  const inquiry = { id: `inq-${Date.now()}`, name, email, message, createdAt: new Date() };
  DB.contacts.push(inquiry);
  res.status(201).json({ success: true, message: "Thank you! Our clinic team will get back to you shortly." });
});

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: "Valid email address required." });
  }
  DB.subscribers.push({ email, createdAt: new Date() });
  res.status(200).json({ success: true, message: "Subscribed successfully to SkinSpree Clinic updates!" });
});

app.listen(PORT, () => {
  console.log(`SkinSpree Clinic Server running on port ${PORT}`);
});
