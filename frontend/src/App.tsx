import React, { useState, useEffect, useRef } from 'react';
import { ChatHeader } from './components/chat/ChatHeader';
import { ChatMessage } from './components/chat/ChatMessage';
import { ChatInput } from './components/chat/ChatInput';
import { PillOptions } from './components/chat/PillOptions';
import { ImageUpload } from './components/chat/ImageUpload';
import { Message, InputMode } from './types/chat';

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      message: "Hi! I'm Allodermis, your personal skin and hair health assistant.",
      timestamp: '02:00 pm'
    },
    {
      id: '2',
      type: 'ai',
      message: 'May I know your name?',
      timestamp: '02:00 pm'
    }
  ]);

  const [inputMode, setInputMode] = useState<InputMode>('text');
  const [conversationStep, setConversationStep] = useState(0);
  const [userName, setUserName] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const addMessage = (message: Message) => {
    setMessages((prev: Message[]) => [...prev, message]);
  };

  const addBotMessage = (text: string) => {
    setTimeout(() => {
      addMessage({
        id: Date.now().toString(),
        type: 'ai',
        message: text,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      });
    }, 800);
  };

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      message,
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
    addMessage(newMessage);

    // Handle name input
    if (conversationStep === 0) {
      setUserName(message);
      setConversationStep(1);
      addBotMessage(`Nice to meet you ${message}! How do you identify?`);
      setTimeout(() => setInputMode('pills'), 1000);
    }
  };

  const handlePillSelect = (option: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      message: option,
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };
    addMessage(newMessage);

    if (conversationStep === 1) {
      // After gender selection
      setConversationStep(2);
      addBotMessage('What would you like to analyze today?');
      setTimeout(() => setInputMode('pills'), 1000);
    } else if (conversationStep === 2) {
      // After analysis type selection
      setConversationStep(3);
      addBotMessage('What is your primary skin concern?');
      setTimeout(() => setInputMode('pills'), 1000);
    } else if (conversationStep === 3) {
      // After skin concern selection
      setConversationStep(4);
      addBotMessage('How would you describe your skin type?');
      setTimeout(() => setInputMode('pills'), 1000);
    } else if (conversationStep === 4) {
      // After skin type selection
      setConversationStep(5);
      addBotMessage('Please upload a clear photo of your skin in natural lighting.');
      setTimeout(() => setInputMode('upload'), 1000);
    }
  };

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      message: '',
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      imageUrl
    };
    addMessage(newMessage);
    
    // Show analysis result
    setConversationStep(6);
    setInputMode('complete');
    setTimeout(() => {
      addMessage({
        id: (Date.now() + 1).toString(),
        type: 'ai',
        message: '',
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        isResultCard: true
      });
    }, 2000);
  };

  const getCurrentPillOptions = () => {
    if (conversationStep === 1) return ['Male', 'Female', 'Other'];
    if (conversationStep === 2) return ['Skin Analysis', 'Hair Analysis', 'Both'];
    if (conversationStep === 3) return ['Acne', 'Pigmentation', 'Wrinkles', 'Dryness'];
    if (conversationStep === 4) return ['Oily', 'Dry', 'Combination', 'Normal'];
    return [];
  };

  // Group consecutive AI messages
  const getMessageGrouping = (index: number) => {
    const currentMsg = messages[index];
    const prevMsg = messages[index - 1];
    const nextMsg = messages[index + 1];

    if (currentMsg.type === 'ai') {
      const isFirstInGroup = !prevMsg || prevMsg.type !== 'ai';
      const isLastInGroup = !nextMsg || nextMsg.type !== 'ai';
      return { isFirstInGroup, isLastInGroup };
    }

    return { isFirstInGroup: true, isLastInGroup: true };
  };

  return (
    <div className="h-screen flex flex-col bg-[#f5ebe0] dark:bg-[#1a1d23] transition-colors duration-300">
      {/* Light mode texture overlays - linen texture */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(139,99,76,0.25)_1px,_transparent_0)] bg-[size:20px_20px] dark:opacity-0 pointer-events-none"></div>
      
      {/* Light mode linen texture */}
      <div className="fixed inset-0 opacity-[0.35] dark:opacity-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='linenFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23linenFilter)' opacity='0.5'/%3E%3C/svg%3E")`
      }}></div>
      
      {/* Light mode gradient accents */}
      <div className="fixed inset-0 bg-gradient-to-br from-amber-100/30 via-transparent to-rose-100/20 dark:opacity-0 pointer-events-none"></div>
      
      {/* Dark mode texture overlays */}
      <div className="fixed inset-0 opacity-0 dark:opacity-100 bg-[radial-gradient(circle_at_1px_1px,_rgba(148,163,184,0.25)_1px,_transparent_0)] bg-[size:20px_20px] pointer-events-none"></div>
      
      {/* Dark mode paper texture */}
      <div className="fixed inset-0 opacity-0 dark:opacity-[0.15] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)'/%3E%3C/svg%3E")`
      }}></div>
      
      {/* Dark mode metallic overlay */}
      <div className="fixed inset-0 bg-transparent dark:bg-[radial-gradient(ellipse_at_top,_rgba(100,116,139,0.2)_0%,_transparent_50%),_radial-gradient(ellipse_at_bottom,_rgba(30,41,59,0.25)_0%,_transparent_50%)] pointer-events-none opacity-0 dark:opacity-100"></div>
      
      <ChatHeader />
      
      <div className="relative flex-1 overflow-y-auto" ref={chatContainerRef}>
        {/* Centered watermark illustration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg 
            width="280" 
            height="280" 
            viewBox="0 0 280 280" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-[0.04] dark:opacity-[0.03]"
          >
            {/* Minimalist botanical face silhouette */}
            <circle cx="140" cy="110" r="85" fill="currentColor" className="text-amber-900 dark:text-slate-400" />
            <ellipse cx="118" cy="100" rx="8" ry="12" fill="currentColor" className="text-amber-800 dark:text-slate-300" />
            <ellipse cx="162" cy="100" rx="8" ry="12" fill="currentColor" className="text-amber-800 dark:text-slate-300" />
            <path d="M120 130 Q140 145 160 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-amber-800 dark:text-slate-300" fill="none" />
            {/* Botanical leaves */}
            <path d="M70 60 Q50 40 45 15 Q70 25 80 50 Q75 55 70 60 Z" fill="currentColor" className="text-amber-900 dark:text-slate-400" opacity="0.6" />
            <path d="M210 60 Q230 40 235 15 Q210 25 200 50 Q205 55 210 60 Z" fill="currentColor" className="text-amber-900 dark:text-slate-400" opacity="0.6" />
            <path d="M140 200 Q120 240 100 270 Q130 250 140 220 Q150 250 180 270 Q160 240 140 200 Z" fill="currentColor" className="text-amber-900 dark:text-slate-400" opacity="0.5" />
          </svg>
        </div>

        <div className="py-4 sm:py-6">
          {messages.map((msg: Message, index: number) => {
            const { isFirstInGroup, isLastInGroup } = getMessageGrouping(index);
            return (
              <ChatMessage
                key={msg.id}
                type={msg.type}
                message={msg.message}
                timestamp={msg.timestamp}
                isFirstInGroup={isFirstInGroup}
                isLastInGroup={isLastInGroup}
                imageUrl={msg.imageUrl}
                isResultCard={msg.isResultCard}
              />
            );
          })}
        </div>
      </div>

      {inputMode === 'text' && <ChatInput onSend={handleSendMessage} />}
      {inputMode === 'pills' && <PillOptions options={getCurrentPillOptions()} onSelect={handlePillSelect} />}
      {inputMode === 'upload' && <ImageUpload onUpload={handleImageUpload} />}
    </div>
  );
}