import { MotionTemplate } from '../types';

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export async function explainAnimation(
  componentName: string,
  query: string,
  context?: string
): Promise<string> {
  // Mock implementation for development
  // In production, this would call the Gemini API
  
  const responses: Record<string, string> = {
    'ease': 'For landing page heroes, use cubic-bezier(0.25, 0.46, 0.45, 0.94) for smooth, professional deceleration. Consider staggering entrance animations by 100-150ms for visual hierarchy.',
    'duration': 'Micro-interactions should be 200-300ms. Page transitions work best at 400-600ms. Avoid animations longer than 1s as they feel sluggish.',
    'marquee': 'To make a marquee feel premium: 1) Use smooth easing (ease-in-out), 2) Add subtle blur on edges, 3) Implement pause-on-hover, 4) Use high-quality spacing and typography.',
    'accessibility': 'Always respect prefers-reduced-motion. Provide skip animations option. Ensure focus states are visible. Keep animations subtle for cognitive accessibility.',
  };

  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('ease')) return responses.ease;
  if (lowerQuery.includes('duration')) return responses.duration;
  if (lowerQuery.includes('marquee')) return responses.marquee;
  if (lowerQuery.includes('accessibility')) return responses.accessibility;

  return `Based on your question about "${query}" for ${componentName}: Consider the animation's purpose, timing, and user context. Use easing functions that match the brand personality—smooth for professional, bouncy for playful.`;
}

export async function fetchMotionTemplates(): Promise<MotionTemplate[]> {
  // Mock implementation
  return [
    { name: 'Fade In Up', description: 'Smooth opacity and translate Y entrance', category: 'entrance' },
    { name: 'Scale In', description: 'Scale from 0.95 to 1 with fade', category: 'entrance' },
    { name: 'Stagger Children', description: 'Sequential animation of list items', category: 'list' },
    { name: 'Parallax Scroll', description: 'Depth effect on scroll', category: 'scroll' },
    { name: 'Hover Lift', description: 'Subtle Y translation on hover', category: 'interaction' },
  ];
}

export async function generateAnimationCode(
  description: string,
  framework: 'framer-motion' | 'css' | 'gsap' = 'framer-motion'
): Promise<string> {
  // Mock implementation
  if (framework === 'framer-motion') {
    return `
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  Content here
</motion.div>`;
  }
  
  return '/* Animation code generation not implemented for this framework */';
}
