
import React from 'react';
import { SectionType } from '../types';

interface SidebarProps {
  onAdd: (type: SectionType) => void;
}

const BuilderSidebar: React.FC<SidebarProps> = ({ onAdd }) => {
  const templates: { type: SectionType; label: string; desc: string }[] = [
    { type: 'hero', label: 'Hero Header', desc: 'Animated background with big text' },
    { type: 'capabilities', label: 'Platform Grid', desc: 'Interactive feature cards' },
    { type: 'bento', label: 'Bento Showcase', desc: 'High-fidelity non-uniform grid' },
    { type: 'testimonials', label: 'Social Proof', desc: 'Kinetic testimonial carousel' },
    { type: 'comparison', label: 'Before/After', desc: 'Interactive manual vs AI slider' },
    { type: 'impact', label: 'ROI Impact', desc: 'Performance metric audit table' },
    { type: 'thinking', label: 'Thinking Levels', desc: 'Part 1 & 2 paradigm split' },
    { type: 'gallery', label: 'Visual Gallery', desc: 'Showcase of motion principles' },
    { type: 'marquee', label: 'Dynamic Marquee', desc: 'Infinite scrolling typography' },
    { type: 'assistant', label: 'AI Concierge', desc: 'Interactive chat interface' },
  ];

  return (
    <div className="w-80 h-full glass border-r border-white/5 flex flex-col p-8 overflow-y-auto z-40 relative">
      <div className="mb-12">
        <h2 className="text-2xl font-display font-bold text-white mb-2">Component Lab</h2>
        <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em] leading-tight opacity-70">Kinetic blocks for your stack</p>
      </div>

      <div className="space-y-5">
        {templates.map((t) => (
          <div 
            key={t.type}
            className="group relative p-6 rounded-[24px] border border-white/5 bg-white/5 hover:border-indigo-500/40 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer overflow-hidden"
            onClick={() => onAdd(t.type)}
          >
            {/* Hover Glow Effect */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex justify-between items-center mb-3 relative z-10">
              <span className="text-base font-bold text-slate-100 group-hover:text-white transition-colors">{t.label}</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-indigo-600/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium transition-colors group-hover:text-slate-400 relative z-10">{t.desc}</p>
            
            {/* Progress line indicator on hover */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-indigo-500 transition-all duration-700 w-0 group-hover:w-full"></div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-10">
        <div className="p-5 rounded-2xl bg-indigo-600/5 border border-indigo-600/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-20">
            <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <p className="text-[11px] text-indigo-300 font-bold leading-relaxed relative z-10">
            <span className="text-white">PRO TIP:</span> Use the Export tool to generate standalone code for any CSS-capable environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuilderSidebar;
