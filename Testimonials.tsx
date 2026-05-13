
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionProps } from '../types';

const defaultTestimonials = [
  { name: 'Sarah Chen', role: 'Director of Talent', company: 'TechFlow', content: 'The kinetic workflows transformed our hiring speed. We went from months to days for critical engineering roles.' },
  { name: 'Marcus Thorne', role: 'Head of Recruiting', company: 'GlobalLogistics', content: 'Finally, an AI system that understands the nuance of human potential. The results speak for themselves.' },
  { name: 'Elena Rodriguez', role: 'CEO', company: 'ScaleUp', content: 'Our candidate engagement tripled in the first 30 days. This is the future of recruitment architecture.' }
];

const Testimonials: React.FC<SectionProps> = ({ title, subtitle, accentColor, intensity = 50 }) => {
  const [index, setIndex] = useState(0);
  const items = defaultTestimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 6000 - (intensity * 40));
    return () => clearInterval(timer);
  }, [intensity, items.length]);

  return (
    <section className="py-40 px-10 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
           <div className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-2 mb-8 shadow-lg backdrop-blur-md">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-[10px] font-black text-emerald-300 uppercase tracking-[0.3em]">Verified Results</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[0.9] mb-8">
            {title || 'Real Success Stories'}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            {subtitle || 'Hear from the leaders reshaping their industries with kinetic intelligence.'}
          </p>
        </div>

        <div className="relative h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute glass rounded-[48px] p-16 max-w-3xl border-indigo-500/20 shadow-2xl"
            >
              <div className="relative">
                <svg className="absolute -top-10 -left-10 w-20 h-20 text-indigo-500/10" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8h6l-2.286 9h-4L12 16H6V8h4zm14 0v8h6l-2.286 9h-4L26 16h-6V8h4z"/></svg>
                <p className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed mb-10 relative z-10">
                  "{items[index].content}"
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl kinetic-gradient p-px">
                     <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center font-bold text-2xl text-indigo-400 font-display">
                        {items[index].name[0]}
                     </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{items[index].name}</h4>
                    <p className="text-indigo-400 font-black uppercase text-[10px] tracking-widest">{items[index].role} @ {items[index].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-12 bg-indigo-500' : 'w-3 bg-white/10 hover:bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
