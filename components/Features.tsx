import React from 'react';
import { Bot, GitBranch, Calendar, Lock, BarChart3, Smartphone } from 'lucide-react';

const features = [
  {
    title: "Autonomous Voice Agents",
    description: "Agents that sound indistinguishable from humans. They pause, listen, and handle interruptions naturally.",
    icon: Bot,
    color: "text-brand-400"
  },
  {
    title: "Smart Workflows",
    description: "Connects seamlessly with your CRM. Lead triggers form submission -> Call initiated -> CRM updated.",
    icon: GitBranch,
    color: "text-blue-400"
  },
  {
    title: "Instant Scheduling",
    description: "The AI accesses your calendar in real-time to book appointments while on the call with the client.",
    icon: Calendar,
    color: "text-purple-400"
  },
  {
    title: "Scam & Fraud Filter",
    description: "Advanced verification logic to identify bots and scammers, saving your team valuable time.",
    icon: Lock,
    color: "text-red-400"
  },
  {
    title: "Analytics & Insights",
    description: "Get detailed transcripts, sentiment analysis, and call success metrics immediately after hang-up.",
    icon: BarChart3,
    color: "text-yellow-400"
  },
  {
    title: "Industry Specific",
    description: "Pre-trained models for Retail, HVAC, Real Estate, Restaurants, and Accounting firms.",
    icon: Smartphone,
    color: "text-green-400"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More Than Just a <span className="text-brand-400">Phone Call</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our robust infrastructure handles the entire lifecycle of a voice interaction, from trigger to settlement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-brand-900/20"
            >
              <div className={`h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;