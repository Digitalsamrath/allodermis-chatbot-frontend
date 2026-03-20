export interface Message {
  id: string;
  type: 'ai' | 'user';
  message: string;
  timestamp: string;
  imageUrl?: string;
  isResultCard?: boolean;
}

export type InputMode = 'text' | 'pills' | 'upload' | 'complete';
