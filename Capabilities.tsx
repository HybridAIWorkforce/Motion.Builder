
import React, { useState } from 'react';
import { SectionProps } from '../types';

const Capabilities: React.FC<SectionProps> = ({ title, subtitle, accentColor, intensity = 50, isEditable }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const accentClass = accentColor ? `from-${accentColor.replace('-500', '-400')} via-indigo-400 to-purple-400` : 'from-sky-400 via-indigo-400 to-purple-400';
  const animationDuration = 10 - (intensity / 15);

  const capabilitySnippet = `<!-- MOTION.BUILDER Kinetic Core -->
<style>
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 5s ease infinite;
  }
</style>

<!-- Kinetic Feature Header -->
<h2 class="text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-[0.9]">
  ${title || 'Intelligent features'}
  <span class="bg-clip-text text-transparent bg-gradient-to-r ${accentClass} animate-gradient-x block">
    for the kinetic future
  </span>
</h2>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(capabilitySnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`py-32 px-10 relative overflow-hidden ${isEditable ? 'group/canvas transition-all' : ''}`}>
      {/* Background kinetic decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      {/* Editor Controls */}
      {isEditable && (
        <div className="absolute top-12 right-12 z-20 opacity-0 group-hover/canvas:opacity-100 transition-opacity translate-y-2 group-hover/canvas:translate-y-0 duration-500">
          <button 
            onClick={() => setShowCode(!showCode)}
            className="btn-ghost flex items-center gap-2 group/btn"
          >
            <svg className="w-4 h-4 text-indigo-400 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            {showCode ? 'Back to Editor' : 'Export Component'}
          </button>
        </div>
      )}

      {/* Code Viewer Panel */}
      {showCode && (
        <div className="absolute inset-0 z-50 bg-[#020617]/98 backdrop-blur-3xl flex flex-col p-16 animate-in fade-in duration-700">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h4 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">Kinetic Architecture</h4>
              <p className="text-slate-400 font-medium">Standalone integration module for production.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={handleCopy} className={`btn-primary !py-3 ${copied ? 'bg-emerald-500 border-emerald-500' : ''}`}>
                {copied ? 'SNIPPET COPIED' : 'COPY MODULE'}
              </button>
              <button onClick={() => setShowCode(false)} className="btn-ghost">CLOSE</button>
            </div>
          </div>
          <div className="flex-1 bg-black/60 rounded-[32px] p-10 font-mono text-sm text-indigo-300/80 overflow-auto border border-white/5 shadow-inner">
            <code className="block leading-relaxed">{capabilitySnippet}</code>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-28">
           <div className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-2 mb-10 shadow-lg backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em]">System Capabilities</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight font-display leading-[0.95] mb-10">
            {title || 'Intelligent features for the'}
            <span 
              className={`bg-clip-text text-transparent bg-gradient-to-r ${accentClass} animate-gradient-x block mt-4`}
              style={{ animationDuration: `${animationDuration}s` }}
            >
              kinetic future
            </span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-slate-400 leading-relaxed max-w-2xl mx-auto opacity-80">
            {subtitle || 'Next-generation motion blocks engineered to drive conversion and elevate your interactive presence.'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Kinetic Intel */}
          <div className="group glass rounded-[40px] p-10 hover:border-indigo-500/50 transition-all duration-700 relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            {/* Branded Visual Icon */}
            <div className="w-16 h-16 rounded-2xl kinetic-gradient flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/20 group-hover:scale-110 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                <path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Kinetic Intelligence</h3>
            <p className="text-slate-400 font-medium leading-relaxed opacity-80 flex-1">
              Autonomous motion logic that adapts to user intent, creating a seamless bridge between interaction and conversion.
            </p>
            
            <div className="mt-10 h-px w-1/4 bg-white/10 group-hover:w-full transition-all duration-1000"></div>
          </div>

          {/* Card 2: Adaptive Flows */}
          <div className="group glass rounded-[40px] p-10 hover:border-purple-500/50 transition-all duration-700 relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="w-16 h-16 rounded-2xl kinetic-gradient !from-purple-600 !to-indigo-600 flex items-center justify-center mb-8 shadow-xl shadow-purple-500/20 group-hover:rotate-6 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Adaptive Workflows</h3>
            <p className="text-slate-400 font-medium leading-relaxed opacity-80 flex-1">
              State-aware components that evolve based on site history, ensuring every user journey is optimized for retention.
            </p>
             <div className="mt-10 h-px w-1/4 bg-white/10 group-hover:w-full transition-all duration-1000"></div>
          </div>

          {/* Card 3: Global Scale */}
          <div className="group glass rounded-[40px] p-10 hover:border-pink-500/50 transition-all duration-700 relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="w-16 h-16 rounded-2xl kinetic-gradient !from-pink-600 !to-purple-600 flex items-center justify-center mb-8 shadow-xl shadow-pink-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Kinetic Portability</h3>
            <p className="text-slate-400 font-medium leading-relaxed opacity-80 flex-1">
              Engineered for versatility, our blocks integrate seamlessly into any production environment with zero overhead.
            </p>
             <div className="mt-10 h-px w-1/4 bg-white/10 group-hover:w-full transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
