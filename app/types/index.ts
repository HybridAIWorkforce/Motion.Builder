export interface SectionProps {
  title?: string;
  subtitle?: string;
  accentColor?: string;
  intensity?: number;
  isEditable?: boolean;
  context?: string;
  items?: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
}

export interface MotionTemplate {
  name: string;
  description: string;
  category: string;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  darkMode: boolean;
}

export type SectionType = 
  | 'hero' 
  | 'capabilities' 
  | 'bento' 
  | 'testimonials' 
  | 'comparison' 
  | 'impact' 
  | 'thinking' 
  | 'gallery' 
  | 'marquee' 
  | 'assistant';

export interface SectionSettings {
  title?: string;
  subtitle?: string;
  accentColor?: string;
  intensity?: number;
  items?: string[];
  isEditable?: boolean;
  context?: string;
}

export interface BuiltSection {
  id: string;
  type: SectionType;
  settings: SectionSettings;
}
