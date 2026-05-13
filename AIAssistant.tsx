
import React, { useState, useRef, useEffect } from 'react';
import { explainAnimation, fetchMotionTemplates } from '../services/geminiService';
import { ChatMessage, SectionProps } from '../types';

const AIAssistant: React.FC<SectionProps> = ({ title, accentColor, context }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [templates, setTemplates] = useState<{name: string, description: string}[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const accentHex = accentColor?.includes('indigo') ? '#6366f1' : accentColor?.includes('purple') ? '#a855f7' : accentColor?.includes('pink') ? '#ec4899' : '#6366f1';

  const suggestions = [
    "How should I ease a landing page hero?",
    "Best duration for micro-interactions?",
    "Make my marquee feel more premium",
    "Animation accessibility best practices"
  ];

  useEffect(() => {
    const loadTemplates = async () => {
      const data = await fetchMotionTemplates();
      setTemplates(data);
    };
    loadTemplates();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (customInput?: string) => {
    const query = customInput || input;
    if (!query.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    if (!customInput) setInput('');
    setIsLoading(true);

    try {
      const explanation = await explainAnimation("Motion Canvas Site", query, context);
      setMessages(prev => [...prev, { role: 'assistant', content: explanation }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered a glitch in the motion matrix. Try again?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast here
  };

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Templates Sidebar */}
      <div className="w-full md:w-64 glass rounded-3xl p-6 border-white/10 hidden lg:block">
        <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-6">Backend Templates</h4>
        <div className="space-y-4">
          {templates.map((t, idx) => (
            <div key={idx} className="group cursor-pointer">
              <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{t.name}</p>
              <p className="text-[10px] text-slate-500 leading-tight mt-1">{t.description}</p>
            </div>
          ))}
          {templates.length === 0 && <p className="text-xs text-slate-600 italic">Fetching presets...</p>}
        </div>
      </div>

      <div className="flex-1 glass rounded-[32px] overflow-hidden shadow-2xl border-white/5 flex flex-col relative group/chat">
        {/* Chat Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none group-hover/chat:bg-indigo-500/10 transition-colors duration-1000"></div>

        <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900/40 to-purple-950/40 p-10 border-b border-white/5 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-5">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center animate-pulse shadow-lg"
              style={{ backgroundColor: accentHex, boxShadow: `0 10px 30px -10px ${accentHex}cc` }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold tracking-tight text-white">{title || 'Motion Concierge'}</h3>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em]">Contextually Aware AI</p>
              </div>
            </div>
          </div>
          {context && context.length > 0 && (
            <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-indigo-300 uppercase tracking-widest backdrop-blur-md">
              Synchronized: {context.length} sections
            </div>
          )}
        </div>

        <div ref={scrollRef} className="h-[450px] overflow-y-auto p-8 space-y-6 scroll-smooth bg-slate-900/50 custom-scrollbar">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-block p-4 bg-indigo-500/10 rounded-2xl mb-6">
                <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">How can I help you build?</h4>
              <p className="text-slate-500 italic text-sm mb-8">I can analyze your full canvas and suggest optimizations.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg mx-auto">
                {suggestions.map((s, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSend(s)}
                    className="text-left px-4 py-3 glass rounded-xl text-xs text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all border border-white/5"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`relative group max-w-[85%] rounded-2xl p-5 ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white/5 text-slate-200 border border-white/10 rounded-tl-none'
              }`}>
                {msg.content}
                {msg.role === 'assistant' && (
                  <button 
                    onClick={() => copyToClipboard(msg.content)}
                    className="absolute top-2 right-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:text-indigo-400"
                    title="Copy response"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  </button>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 p-5 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                <span className="text-xs text-indigo-400 font-mono italic">Analyzing site context...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-8 bg-slate-950/80 border-t border-white/10">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me to optimize your motion..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <span className="text-[10px] text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/10">ESC to clear</span>
              </div>
            </div>
            <button 
              onClick={() => handleSend()}
              disabled={isLoading}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              {isLoading ? 'Thinking' : 'Send'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AIOverlay: React.FC<{ context: any[] }> = ({ context }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (customInput?: string) => {
    const query = customInput || input;
    if (!query.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    if (!input) setInput('');
    setIsLoading(true);

    try {
      const explanation = await explainAnimation("Motion Builder Global Context", query, context);
      setMessages(prev => [...prev, { role: 'assistant', content: explanation }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered a glitch. Try again?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 kinetic-gradient rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)] z-[100] hover:scale-110 active:scale-95 transition-all group"
      >
        <div className="absolute -inset-2 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        )}
      </button>

      {/* Global Assistant Panel */}
      <div className={`fixed bottom-32 right-8 w-[450px] max-h-[70vh] glass rounded-[32px] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100] flex flex-col overflow-hidden transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="p-6 bg-indigo-950/40 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
             </div>
             <div>
               <h4 className="text-sm font-bold text-white">Motion Builder AI</h4>
               <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Global Concierge</p>
             </div>
          </div>
          <div className="bg-emerald-500/10 text-emerald-400 text-[9px] px-2 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
            SYNCED
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-900/50 custom-scrollbar">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <p className="text-sm text-slate-300 font-medium mb-4">I'm watching your canvas progress.</p>
              <div className="space-y-2">
                {["Suggest improvements for my Hero", "How to fix the layout rhythm?", "Optimize these animations"].map((s, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSend(s)}
                    className="block w-full text-left px-4 py-3 glass rounded-xl text-xs text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-2xl max-w-[90%] text-xs ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 w-fit">
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          )}
        </div>

        <div className="p-6 bg-slate-950/80 border-t border-white/5">
          <div className="flex gap-3">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about the builder..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition-all"
            />
            <button 
              onClick={() => handleSend()}
              disabled={isLoading}
              className="p-3 bg-indigo-600 rounded-xl text-white hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-600/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
