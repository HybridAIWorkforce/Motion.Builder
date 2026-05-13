
import React, { useState } from 'react';
import { SectionProps } from '../types';

interface CardProps {
  title: string;
  category: string;
  effectClass: string;
  color: string;
  snippet: string;
  intensity: number;
}

const AnimationCard: React.FC<CardProps> = ({ title, category, effectClass, color, snippet, intensity }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const blurAmt = Math.max(0, 20 - (intensity / 5)); 
  const scaleAmt = 1 + (intensity / 1000); 

  return (
    <div 
      className={`relative h-[360px] glass rounded-[32px] overflow-hidden cursor-pointer group transition-all duration-700 ${isHovered ? 'border-white/20 shadow-2xl' : ''}`}
      style={{ transform: isHovered ? `translateY(-10px) scale(${scaleAmt})` : 'translateY(0) scale(1)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background Glow */}
      <div 
        className={`absolute inset-0 opacity-5 transition-opacity duration-1000 ${isHovered ? 'opacity-20' : ''} ${color}`}
        style={{ filter: 'blur(60px)' }}
      ></div>
      
      {/* Content Area */}
      <div className={`absolute inset-0 flex flex-col p-10 transition-transform duration-700 ${showCode ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div 
          className={`flex-1 w-full rounded-[24px] flex items-center justify-center transition-all duration-1000 ${effectClass} bg-white/[0.02] border border-white/5 shadow-inner`}
          style={{ filter: effectClass.includes('blur') ? `blur(${blurAmt}px)` : 'none' }}
        >
          <div className="text-center p-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-3 block opacity-70">{category}</span>
            <h3 className="text-3xl font-display font-bold text-white tracking-tight">{title}</h3>
          </div>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); setShowCode(true); }}
          className="mt-6 text-[10px] font-black text-slate-500 hover:text-indigo-400 transition-colors flex items-center gap-2 uppercase tracking-widest"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          Inspect Logic
        </button>
      </div>

      {/* Code Viewer Area */}
      <div className={`absolute inset-0 bg-[#020617]/95 p-10 flex flex-col transition-all duration-700 ${showCode ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Kinetic Snippet</span>
          <button onClick={() => setShowCode(false)} className="w-8 h-8 flex items-center justify-center glass rounded-xl text-slate-500 hover:text-white transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-black/40 p-6 rounded-2xl border border-white/5 shadow-inner mb-6">
          <pre className="text-[11px] font-mono text-indigo-100/70 leading-relaxed uppercase tracking-tighter">
            {snippet}
          </pre>
        </div>
        <button 
          onClick={handleCopy}
          className={`w-full py-4 rounded-[18px] font-bold text-xs transition-all ${copied ? 'bg-emerald-500 text-white' : 'btn-primary'}`}
        >
          {copied ? 'SNIPPET COPIED' : 'COPY REUSABLE CODE'}
        </button>
      </div>

      <div className={`absolute bottom-0 left-0 h-1.5 kinetic-gradient transition-all duration-1000 ${isHovered ? 'w-full' : 'w-0'}`}></div>
    </div>
  );
};

const AnimationGallery: React.FC<SectionProps> = ({ title, subtitle, intensity = 50 }) => {
  return (
    <section id="gallery" className="py-40 px-10 max-w-[1400px] mx-auto relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mb-24 flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-2 mb-8 shadow-lg backdrop-blur-md">
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em]">Curated Principle Library</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tighter leading-tight">
          {title || 'The Motion Collection'}
        </h2>
        <p className="text-xl md:text-2xl font-medium text-slate-400 leading-relaxed opacity-70">
          {subtitle || 'Each block represents a core animation principle engineered for modern interactive storytelling.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimationCard 
          intensity={intensity}
          title="Parallax Hover" 
          category="Interaction" 
          color="bg-indigo-600"
          effectClass="group-hover:rotate-x-12 group-hover:rotate-y-12 transition-transform"
          snippet={`<div className="group h-64 overflow-hidden border border-white/10 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20">
  <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:rotate-x-12 group-hover:rotate-y-12">
    <h3>Parallax Effect</h3>
  </div>
</div>`}
        />
        <AnimationCard 
          intensity={intensity}
          title="Elastic Scale" 
          category="Feedback" 
          color="bg-pink-600"
          effectClass="group-hover:scale-110 group-active:scale-90 duration-300 ease-in-out" 
          snippet={`<button className="h-64 w-full border border-white/10 rounded-3xl transition-all duration-300 ease-in-out hover:scale-110 active:scale-90">
  Elastic Feedback
</button>`}
        />
        <AnimationCard 
          intensity={intensity}
          title="Magnetic Pull" 
          category="Cursor" 
          color="bg-cyan-600"
          effectClass="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" 
          snippet={`<div className="group transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2">
  Magnetic Element
</div>`}
        />
        <AnimationCard 
          intensity={intensity}
          title="Ghost Reveal" 
          category="Entrance" 
          color="bg-emerald-600"
          effectClass="opacity-40 group-hover:opacity-100 transition-opacity duration-700" 
          snippet={`<div className="opacity-40 hover:opacity-100 transition-opacity duration-700">
  Content Reveal
</div>`}
        />
        <AnimationCard 
          intensity={intensity}
          title="Liquid Blur" 
          category="Visual" 
          color="bg-orange-600"
          effectClass="blur-md group-hover:blur-0 transition-all duration-500" 
          snippet={`<div className="blur-md hover:blur-0 transition-all duration-500">
  Liquid Unblur
</div>`}
        />
        <AnimationCard 
          intensity={intensity}
          title="Staggered Float" 
          category="Motion" 
          color="bg-violet-600"
          effectClass="animate-bounce group-hover:animate-pulse" 
          snippet={`<div className="animate-bounce hover:animate-pulse">
  Dynamic Motion
</div>`}
        />
      </div>
    </section>
  );
};

export default AnimationGallery;
