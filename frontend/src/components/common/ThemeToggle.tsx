import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 dark:bg-slate-800/80 border border-amber-200/60 dark:border-slate-700/60 hover:bg-amber-200/80 dark:hover:bg-slate-700/80 transition-all duration-300 shadow-sm hover:shadow-md group"
      aria-label="Toggle theme"
    >
      <div className="relative w-9 h-5 bg-amber-200/50 dark:bg-slate-700 rounded-full transition-colors duration-300">
        <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-gradient-to-br from-amber-400 to-rose-400 dark:from-slate-300 dark:to-slate-400 rounded-full shadow-sm transition-transform duration-300 ${isDark ? 'translate-x-4' : 'translate-x-0'}`} />
      </div>
      <span className="text-[10px] sm:text-xs font-medium text-amber-800/80 dark:text-slate-300 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
        {isDark ? 'Dark' : 'Light'}
      </span>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-300 to-rose-300 dark:from-slate-600 dark:to-slate-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
    </button>
  );
}