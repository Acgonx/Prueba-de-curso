import type { ReactNode } from 'react';

export interface Lesson {
  id: number;
  title: string;
  // FIX: Use ReactNode for JSX content to resolve the "Cannot find namespace 'JSX'" error.
  content: ReactNode;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}
