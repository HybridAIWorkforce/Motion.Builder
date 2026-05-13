
import React from 'react';
import { motion } from 'motion/react';
import { SectionProps } from '../types';

const BentoGrid: React.FC<SectionProps> = ({ title, subtitle, intensity = 50 }) => {
  return (
    <section className="py-40 px-10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col items-center text-center max-w-3xl mx-auto">
           <div className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-2 mb-8 glass">
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em]">Advanced Infrastructure</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tighter leading-tight">
            {title || 'High Fidelity Architecture'}
          </h2>
          <p className="text-xl text-slate-400 font-medium">
            {subtitle || 'Built for organizations that demand precision and fluid scalability.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 min-h-[800px]">
          {/* Main Large Bento */}
          <div className="md:col-span-2 md:row-span-2 glass rounded-[48px] p-12 border-indigo-500/10 relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-700">
             <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
             <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                   <div className="w-16 h-16 rounded-2xl kinetic-gradient flex items-center justify-center mb-8">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                   </div>
                   <h3 className="text-4xl font-display font-bold text-white mb-6">Always-On Intelligence</h3>
                   <p className="text-xl text-slate-400 leading-relaxed max-w-md">Our continuous learning models adapt to your industry nuances in real-time, delivering 99.9% prediction accuracy for cultural fit.</p>
                </div>
                <div className="mt-12 p-8 bg-black/40 rounded-3xl border border-white/5">
                   <div className="flex items-end gap-1 mb-2">
                      <div className="w-full h-8 bg-indigo-500/40 rounded-t"></div>
                      <div className="w-full h-24 bg-indigo-500 rounded-t animate-pulse"></div>
                      <div className="w-full h-16 bg-indigo-500/60 rounded-t"></div>
                      <div className="w-full h-32 bg-indigo-500 rounded-t"></div>
                   </div>
                   <span className="text-[10px] font-black text-indigo-400 tracking-[0.2em] uppercase">Real-time Performance Metrics</span>
                </div>
             </div>
          </div>

          {/* Medium Horizontal */}
          <div className="md:col-span-2 glass rounded-[48px] p-10 border-purple-500/10 hover:border-purple-500/40 transition-all duration-700 group overflow-hidden">
             <div className="flex gap-10 items-center h-full">
                <div className="flex-1">
                   <h3 className="text-2xl font-bold text-white mb-4">Unified Data Hub</h3>
                   <p className="text-slate-400 font-medium">Connect every siloed data point into a single source of truth for your entire hiring lifecycle.</p>
                </div>
                <div className="w-32 h-32 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin transition-all group-hover:scale-110" style={{ animationDuration: '3s' }}></div>
             </div>
          </div>

          {/* Small 1 */}
          <div className="glass rounded-[48px] p-10 border-pink-500/10 hover:border-pink-500/40 transition-all duration-700 text-center flex flex-col items-center justify-center">
             <div className="w-12 h-12 bg-pink-500/10 text-pink-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
             </div>
             <h4 className="text-xl font-bold text-white mb-2">Secure PII</h4>
             <p className="text-xs text-slate-500 tracking-wider font-bold">MIL-SPEC PRIVACY</p>
          </div>

          {/* Small 2 */}
          <div className="glass rounded-[48px] p-10 border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-700 flex flex-col justify-center">
             <div className="text-4xl font-display font-black text-emerald-500 mb-2">85%</div>
             <h4 className="text-lg font-bold text-white">Efficiency Gain</h4>
             <p className="text-xs text-slate-500 font-medium">vs Manual Processes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
