export function BotAvatar() {
  return (
    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-rose-300/90 to-terracotta-400/90 dark:from-rose-400/80 dark:to-amber-500/80 flex items-center justify-center shadow-sm flex-shrink-0">
      <svg 
        width="18" 
        height="20" 
        viewBox="0 0 18 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 sm:w-[18px] sm:h-5"
      >
        {/* Organic leaf/drop shape */}
        <path 
          d="M9 0C9 0 0 4 0 12C0 16.4183 4.02944 20 9 20C13.9706 20 18 16.4183 18 12C18 4 9 0 9 0Z" 
          fill="white"
          fillOpacity="0.95"
        />
        <path 
          d="M9 3C9 3 4.5 6 4.5 11.5C4.5 14.5376 6.51472 17 9 17C11.4853 17 13.5 14.5376 13.5 11.5C13.5 6 9 3 9 3Z" 
          fill="white"
          fillOpacity="0.4"
        />
      </svg>
    </div>
  );
}
