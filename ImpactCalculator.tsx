
import React from 'react';
import { SectionProps } from '../types';

const ImpactCalculator: React.FC<SectionProps> = ({ title, subtitle }) => {
  const stats = [
    { label: 'Time-to-Hire', before: '42 Days', after: '9 Days', impact: '-78%', color: 'text-emerald-500' },
    { label: 'Cost-per-Hire', before: '$4.2k', after: '$1.1k', impact: '-73%', color: 'text-indigo-500' },
    { label: 'App Completion', before: '12%', after: '68%', impact: '+460%', color: 'text-purple-500' },
    { label: 'Team Capacity', before: '3x Active', after: '12x Active', impact: '+300%', color: 'text-pink-500' },
  ];

  return (
    <section className="py-40 px-10 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
           <div className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-2 mb-8 glass">
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em]">Estimated Annual Impact</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[0.9] mb-8">
            {title || 'Measured Conversion'}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            {subtitle || 'Stop guessing. Use real architecture to drive exponential growth across every recruitment metric.'}
          </p>
        </div>

        <div className="glass rounded-[48px] overflow-hidden border-white/10 shadow-3xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-10 text-[10px] uppercase font-black text-slate-500 tracking-[0.2em]">Metric Performance</th>
                <th className="p-10 text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] text-center">Legacy Process</th>
                <th className="p-10 text-[10px] uppercase font-black text-indigo-400 tracking-[0.2em] text-center">Kinetic System</th>
                <th className="p-10 text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] text-right">Net Impact</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((stat, i) => (
                <tr key={i} className="group border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                  <td className="p-10">
                    <span className="text-2xl font-bold text-white">{stat.label}</span>
                  </td>
                  <td className="p-10 text-center">
                    <span className="text-xl font-medium text-slate-500 line-through decoration-red-500/50">{stat.before}</span>
                  </td>
                  <td className="p-10 text-center">
                    <div className="inline-flex items-center justify-center glass px-6 py-3 rounded-2xl border-indigo-500/20">
                       <span className="text-2xl font-black text-white">{stat.after}</span>
                    </div>
                  </td>
                  <td className="p-10 text-right">
                    <span className={`text-3xl font-black ${stat.color} tracking-tighter`}>{stat.impact}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-10 bg-indigo-600/10 flex items-center justify-between">
             <p className="text-sm font-medium text-indigo-300">Based on aggregate data from over 500 active kinetic deployments.</p>
             <button className="text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                Download Audit Report
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculator;
