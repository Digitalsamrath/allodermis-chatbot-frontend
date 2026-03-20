import { Send } from 'lucide-react';
import { useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <div className="sticky bottom-0 z-40 bg-gradient-to-t from-[#f5ebe0]/95 dark:from-[#1a1d23]/95 via-[#f5ebe0]/85 dark:via-[#1a1d23]/80 to-transparent backdrop-blur-sm pt-4 sm:pt-6 pb-4 sm:pb-6">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center gap-2 bg-white dark:bg-slate-900/60 rounded-2xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_2px_12px_rgba(0,0,0,0.4)] border border-amber-200/60 dark:border-slate-700/60 p-1.5 sm:p-2 transition-all duration-200 focus-within:shadow-[inset_0_2px_8px_rgba(0,0,0,0.06),_0_0_0_3px_rgba(251,146,60,0.15)] dark:focus-within:shadow-[inset_0_2px_12px_rgba(0,0,0,0.4),_0_0_0_3px_rgba(251,146,60,0.2)] focus-within:border-amber-400/80 dark:focus-within:border-amber-500/60">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-1 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 placeholder:italic focus:outline-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="group relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-rose-400 to-amber-400 dark:from-rose-500 dark:to-amber-500 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 dark:focus:ring-offset-[#1a1d23]"
            aria-label="Send message"
          >
            <Send className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
            <div className="absolute -inset-1 bg-gradient-to-br from-rose-400 to-amber-400 dark:from-rose-500 dark:to-amber-500 rounded-xl opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-200 -z-10" />
          </button>
        </div>
      </form>
    </div>
  );
}