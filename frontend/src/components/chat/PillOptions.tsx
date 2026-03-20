interface PillOptionsProps {
  options: string[];
  onSelect: (option: string) => void;
}

export function PillOptions({ options, onSelect }: PillOptionsProps) {
  return (
    <div className="sticky bottom-0 z-40 bg-gradient-to-t from-[#f5ebe0]/95 dark:from-[#1a1d23]/95 via-[#f5ebe0]/85 dark:via-[#1a1d23]/80 to-transparent backdrop-blur-sm pt-4 sm:pt-6 pb-4 sm:pb-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white dark:bg-slate-800 text-amber-900 dark:text-amber-200 text-[13px] sm:text-sm font-medium shadow-sm border border-amber-300/40 dark:border-slate-600 hover:bg-amber-50 dark:hover:bg-slate-700 hover:border-amber-400/60 dark:hover:border-slate-500 active:scale-95 transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}