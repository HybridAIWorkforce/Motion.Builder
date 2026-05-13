
import React from 'react';
import { SectionProps } from '../types';

const ThinkingLevels: React.FC<SectionProps> = ({ title, subtitle }) => {
  return (
    <section className="py-40 px-10 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-32 flex flex-col items-center text-center max-w-3xl mx-auto">
           <div className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-2 mb-8 glass">
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em]">The Paradigm Shift</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tighter leading-tight">
            {title || 'Two Levels of Thinking'}
          </h2>
          <p className="text-xl text-slate-400 font-medium">
            Understanding the distinction between assisted automation and autonomous intelligence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Part 1 */}
          <div className="flex-1 glass rounded-[56px] p-16 border-white/10 relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-700">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
             <div className="relative z-10">
                <span className="text-indigo-500 font-black text-6xl font-display opacity-20 mb-6 block">01</span>
                <h3 className="text-4xl font-display font-bold text-white mb-8">Part 1: The Hybrid AI Workforce</h3>
                <p className="text-xl text-slate-400 leading-relaxed mb-10">AI acts as a co-pilot, augmenting human recruiters by handling massive sourcing queues and initial screenings, allowing the human to focus on closing and relationship building.</p>
                <ul className="space-y-4">
                   {['Instant Candidate Filtering', 'Automated Interview Scheduling', 'Personalized Email Sequences'].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-white font-bold text-sm">
                         <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                         {item}
                      </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Part 2 */}
          <div className="flex-1 glass rounded-[56px] p-16 border-white/10 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-700">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
             <div className="relative z-10">
                <span className="text-purple-500 font-black text-6xl font-display opacity-20 mb-6 block">02</span>
                <h3 className="text-4xl font-display font-bold text-white mb-8">Part 2: Autonomous AI Workforce</h3>
                <p className="text-xl text-slate-400 leading-relaxed mb-10">The system functions as a self-correcting entity. AI Agents collaborate to manage entire departments including lead gen, engagement, and onboarding with zero human intervention.</p>
                <ul className="space-y-4">
                   {['Self-Optimizing Ad Spend', 'Autonomous Social Engagement', 'End-to-End Onboarding Flux'].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-white font-bold text-sm">
                         <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                         {item}
                      </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThinkingLevels;
