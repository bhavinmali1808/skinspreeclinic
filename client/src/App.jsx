import React, { useState } from 'react';
import useScrollAnimation from './hooks/useScrollAnimation';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Doctors from './components/Doctors';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import Newsletter from './components/Newsletter';
import ContactFooter from './components/ContactFooter';
import AppointmentModal from './components/AppointmentModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  // Initialize scroll up and down intersection animations
  useScrollAnimation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main style={{ flex: 1 }}>
        <Hero onOpenBooking={() => setBookingOpen(true)} />
        <FeaturesBar />
        <AboutUs onOpenBooking={() => setBookingOpen(true)} />
        <Services onOpenBooking={() => setBookingOpen(true)} />
        <Doctors onOpenBooking={() => setBookingOpen(true)} />
        <HowItWorks />
        <Testimonials />
        <BlogSection />
        <FAQSection />
        <Newsletter />
      </main>
      <ContactFooter />
      <AppointmentModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      
      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />
    </div>
  );
}
