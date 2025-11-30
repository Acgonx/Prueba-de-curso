import type { ReactNode } from 'react';

export interface Lesson {
  id: number;
  title: string;
  content: ReactNode;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  content: React.ReactNode;
}
