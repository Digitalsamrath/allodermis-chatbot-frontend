interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-orange-100/60 dark:bg-slate-800/40 h-0.5 relative">
      <div 
        className="h-full bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 dark:from-rose-500 dark:via-amber-500 dark:to-rose-500 transition-all duration-500 ease-out shadow-[0_0_8px_rgba(251,146,60,0.4)]"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <p className="text-[11px] text-amber-700/70 dark:text-amber-300/60 font-medium tracking-wide">
          Step {currentStep} of {totalSteps}
        </p>
      </div>
    </div>
  );
}
