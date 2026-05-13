
import React from 'react';
import { BuiltSection, SectionSettings } from '../types';

interface PropertyEditorProps {
  section: BuiltSection | null;
  onUpdate: (id: string, newSettings: SectionSettings) => void;
  onClose: () => void;
}

const PropertyEditor: React.FC<PropertyEditorProps> = ({ section, onUpdate, onClose }) => {
  if (!section) return null;

  const handleChange = (key: keyof SectionSettings, value: any) => {
    onUpdate(section.id, { ...section.settings, [key]: value });
  };

  return (
    <div className="w-80 h-full glass border-l border-white/5 flex flex-col p-8 overflow-y-auto animate-in slide-in-from-right duration-500 z-40 relative">
      <div className="flex justify-between items-center mb-10">
        <div className="flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white tracking-tight">Configuration</h3>
          <span className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase opacity-70">Adjust kinetic settings</span>
        </div>
        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center glass rounded-xl text-slate-500 hover:text-white transition-all hover:bg-white/10">✕</button>
      </div>

      <div className="space-y-8">
        {/* Common Field: Title */}
        {section.settings.title !== undefined && (
          <div className="space-y-3">
            <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest block">Headline Message</label>
            <input 
              type="text" 
              value={section.settings.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-3 text-sm focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all placeholder:text-slate-700"
            />
          </div>
        )}

        {/* Common Field: Subtitle */}
        {section.settings.subtitle !== undefined && (
          <div className="space-y-3">
            <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest block">Supportive Copy</label>
            <textarea 
              rows={4}
              value={section.settings.subtitle}
              onChange={(e) => handleChange('subtitle', e.target.value)}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-3 text-sm focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all resize-none placeholder:text-slate-700 leading-relaxed"
            />
          </div>
        )}

        {/* Color Picker (Tailwind Presets) */}
        <div className="space-y-3">
          <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest block">Core Aesthetic</label>
          <div className="flex flex-wrap gap-3">
            {['indigo-500', 'purple-500', 'pink-500', 'emerald-500', 'sky-500', 'amber-500'].map((color) => (
              <button
                key={color}
                onClick={() => handleChange('accentColor', color)}
                className={`w-9 h-9 rounded-[14px] border-2 transition-all duration-300 relative group overflow-hidden ${section.settings.accentColor === color ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'}`}
                style={{ background: color.includes('indigo') ? '#6366f1' : color.includes('purple') ? '#a855f7' : color.includes('pink') ? '#ec4899' : color.includes('emerald') ? '#10b981' : color.includes('sky') ? '#0ea5e9' : '#f59e0b' }}
              >
                {section.settings.accentColor === color && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/20">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Marquee Specific: Items */}
        {section.type === 'marquee' && (
          <div className="space-y-3">
            <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest block">Ticker Items (CSV)</label>
            <input 
              type="text" 
              value={section.settings.items?.join(', ')}
              onChange={(e) => handleChange('items', e.target.value.split(',').map(i => i.trim()))}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-3 text-sm focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all placeholder:text-slate-700"
              placeholder="ELEGANCE, SPEED, MOTION"
            />
          </div>
        )}

        {/* Animation Intensity */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Kinetic Power</label>
            <div className="px-2 py-0.5 bg-indigo-500/10 rounded border border-indigo-500/20">
               <span className="text-[10px] font-mono text-indigo-400 font-black">{section.settings.intensity || 50}%</span>
            </div>
          </div>
          <div className="relative group/range">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={section.settings.intensity || 50}
              onChange={(e) => handleChange('intensity', parseInt(e.target.value))}
              className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer outline-none transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)] [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:transition-transform"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-indigo-500 rounded-full pointer-events-none" style={{ width: `${section.settings.intensity || 50}%` }}></div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-10 border-t border-white/5">
        <div className="flex items-center gap-3 opacity-40">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Session autosaved in realtime.</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyEditor;
