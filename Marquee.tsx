
import React from 'react';
import { SectionProps } from '../types';

const Marquee: React.FC<SectionProps> = ({ items, intensity = 50, isEditable }) => {
  const displayItems = items && items.length > 0 ? items : ["ELEGANCE", "PERFORMANCE", "INTUITION"];
  const duration = 40 - (intensity / 100) * 35; // 40s to 5s duration based on intensity

  return (
    <div className={`py-40 overflow-hidden bg-black/20 border-y border-white/5 relative group/marquee ${isEditable ? 'hover:bg-black/40 transition-all duration-1000' : ''}`}>
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-20 w-px bg-white/5"></div>
      <div className="absolute inset-y-0 right-20 w-px bg-white/5"></div>

      <div 
        className="flex whitespace-nowrap animate-slide select-none"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...displayItems, ...displayItems, ...displayItems, ...displayItems].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span 
              className="text-8xl md:text-[12rem] font-display font-black mx-16 text-transparent transition-all duration-1000 group-hover/marquee:tracking-widest"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.08)' }}
            >
              {item}
            </span>
            <div className="w-4 h-4 rounded-full kinetic-gradient opacity-20"></div>
          </div>
        ))}
      </div>
      
      {/* Top and Bottom glass overlays for depth */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
    </div>
  );
};

export default Marquee;
