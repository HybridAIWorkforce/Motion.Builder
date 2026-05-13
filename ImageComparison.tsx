
import React, { useState } from 'react';
import { SectionProps } from '../types';

const ImageComparison: React.FC<SectionProps> = ({ title, subtitle, intensity = 50 }) => {
  const [position, setPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const offset = ((x - container.left) / container.width) * 100;
    setPosition(Math.min(Math.max(offset, 0), 100));
  };

  return (
    <section className="py-40 px-10 relative bg-black/20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
          <div className="flex-1">
             <div className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-2 mb-8 glass">
                <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em]">Comparative Analysis</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[0.9] mb-8">
               {title || 'See the Intelligence'}
             </h2>
             <p className="text-xl text-slate-400 font-medium leading-relaxed">
               {subtitle || 'Visualize the leap from manual recruiting chaos to autonomous kinetic efficiency.'}
             </p>
          </div>

          <div 
            className="flex-1 relative aspect-video glass rounded-[40px] overflow-hidden cursor-ew-resize select-none touch-none border-indigo-500/20"
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
          >
            {/* "After" Image / Content (The AI side) */}
            <div className="absolute inset-0 kinetic-gradient flex items-center justify-center">
              <div className="text-center p-12">
                 <div className="bg-white/10 backdrop-blur-3xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 font-black">AI</div>
                    <h4 className="text-2xl font-bold text-white mb-2">Kinetic Efficiency</h4>
                    <p className="text-white/70 text-sm">Autonomous matching, real-time engagement, zero-latency workflows.</p>
                 </div>
              </div>
            </div>

            {/* "Before" Image / Content (The Manual side) */}
            <div 
              className="absolute inset-0 bg-slate-900 flex items-center justify-center border-r-2 border-white"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <div className="text-center p-12">
                 <div className="bg-slate-800/80 rounded-3xl p-8 border border-white/5 grayscale">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">OLD</div>
                    <h4 className="text-2xl font-bold text-slate-400 mb-2">Manual Chaos</h4>
                    <p className="text-slate-500 text-sm">Spreadsheets, missed emails, ghosting, and expensive time gaps.</p>
                 </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white z-20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              style={{ left: `${position}%` }}
            >
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl relative">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-4 bg-indigo-600 rounded-full"></div>
                    <div className="w-0.5 h-4 bg-indigo-600 rounded-full"></div>
                  </div>
               </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
              <span className="glass px-4 py-2 rounded-xl text-[10px] font-black uppercase text-white/50 tracking-widest">Manual</span>
            </div>
            <div className="absolute bottom-6 right-6 z-30 pointer-events-none">
              <span className="bg-indigo-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase text-white tracking-widest">Kinetic AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageComparison;
