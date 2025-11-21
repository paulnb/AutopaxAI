import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm text-slate-300 font-medium">Next-Gen Voice Intelligence</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
          Automate Calls with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-blue-500">Human-Like AI</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Deploy autonomous voice agents that verify leads, schedule appointments, and handle complex inquiries across industries. Zero latency. 100% conversational.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-950 transition-all duration-200 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 hover:bg-brand-50 hover:scale-105"
          >
            Try Live Demo
            <PhoneCall className="ml-2 h-5 w-5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <div className="absolute -inset-3 rounded-full bg-white/20 blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-200" />
          </button>

          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-slate-600"
          >
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-center text-slate-500">
          <div className="flex flex-col items-center">
            <ShieldCheck className="h-6 w-6 mb-2 text-brand-500" />
            <span className="text-sm font-medium">Fraud Detection</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="h-6 w-6 mb-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium">&lt;500ms Latency</span>
          </div>
           <div className="flex flex-col items-center">
            <svg className="h-6 w-6 mb-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">24/7 Availability</span>
          </div>
           <div className="flex flex-col items-center">
            <svg className="h-6 w-6 mb-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-sm font-medium">Multi-Industry</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;