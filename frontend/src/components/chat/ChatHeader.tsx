import logo from '../../assets/36a8dc8b42e8a059e69a8d3e7cbda8efb40a4658.png';
import { ThemeToggle } from '../common/ThemeToggle';

import React, { useState } from 'react';

export interface ChatHeaderProps {}

export const ChatHeader: React.FC<ChatHeaderProps> = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f5ebe0]/95 dark:bg-[#1a1d23]/95 border-b border-amber-200/50 dark:border-slate-700/40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 relative">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <img src={logo} alt="Allodermis Logo" className="h-7 sm:h-9 w-auto flex-shrink-0" />
          <h1 className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 dark:text-slate-100" style={{ fontFamily: "'Playfair Display', serif" }}>
            Allodermis Skin and Hair Analysis
          </h1>
        </div>
        <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}