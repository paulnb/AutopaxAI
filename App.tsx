import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoForm from './components/DemoForm';
import CalBooking from './components/CalBooking';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DemoForm />
        <CalBooking />
      </main>
      <Footer />
    </div>
  );
};

export default App;