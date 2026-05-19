import React from 'react';
import { SectionProps } from '@/types';

const Hero: React.FC<SectionProps> = ({ title, subtitle, accentColor, intensity = 50, isEditable }) => {
  const accentHex = accentColor?.includes('indigo') ? '#6366f1' : accentColor?.includes('purple') ? '#a855f7' : accentColor?.includes('pink') ? '#ec4899' : accentColor?.includes('emerald') ? '#10b981' : accentColor?.includes('sky') ? '#0ea5e9' : '#f59e0b';
  
  // Convert intensity (0-100) to animation duration (higher intensity = faster animation)
  const duration = 15 - (intensity / 10); 

  return (
    <div className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617] ${isEditable ? 'group/hero transition-all' : ''}`}>
      {/* Background Kinetic Elements */}
      <div 
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob" 
        style={{ backgroundColor: accentHex, animationDuration: `${duration}s` }}
      ></div>
      <div 
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000" 
        style={{ backgroundColor: accentHex, animationDuration: `${duration * 1.5}s` }}
      ></div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none brightness-50"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass border-white/5 mb-8 animate-in slide-in-from-top duration-1000">
           <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
           <span className="text-[10px] font-black tracking-[0.3em] text-indigo-300 uppercase">Version 2.1 Kinetic Core</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-display font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 leading-[0.9] tracking-tighter">
          {title || 'Designing the Kinetic Future'}
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-400 font-medium mb-12 max-w-3xl mx-auto leading-tight opacity-80">
          {subtitle || 'High-fidelity motion components engineered for the next era of interactive experiences.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn-primary !px-10 !py-4 !text-lg">
            Start Building
          </button>
          <button className="btn-ghost !px-10 !py-4 !text-lg group/btn flex items-center gap-2">
            View Documentation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent"></div>
    </div>
  );
};

export default Hero;
