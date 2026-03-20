import React from 'react';
import { BotAvatar } from './BotAvatar';

export interface ChatMessageProps {
  type: 'ai' | 'user';
  message: string;
  timestamp: string;
  isFirstInGroup?: boolean;
  isLastInGroup?: boolean;
  imageUrl?: string;
  isResultCard?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ 
  type, 
  message, 
  timestamp, 
  isFirstInGroup = true, 
  isLastInGroup = true, 
  imageUrl, 
  isResultCard 
}) => {
  if (type === 'ai') {
    return (
      <div className="flex gap-2.5 sm:gap-3 items-end px-4 sm:px-6 max-w-4xl mx-auto" style={{ paddingTop: isFirstInGroup ? '8px' : '2px', paddingBottom: isLastInGroup ? '8px' : '2px' }}>
        {isLastInGroup ? (
          <BotAvatar />
        ) : (
          <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 relative">
            <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-rose-300/40 to-transparent dark:from-rose-400/30" />
          </div>
        )}
        <div className="flex flex-col gap-1 max-w-[80%] sm:max-w-[75%]">
          {isResultCard ? (
            <div className="inline-block bg-gradient-to-br from-white to-orange-50/40 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-sm rounded-2xl rounded-bl-md px-4 sm:px-5 py-4 sm:py-5 shadow-sm border border-amber-200/40 dark:border-slate-700/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-amber-200/50 dark:border-slate-700/50">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Analysis Complete
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Your skin health score
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-amber-800 dark:text-amber-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                      78
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                      / 100
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { label: 'Hydration', value: 85 },
                    { label: 'Texture', value: 72 },
                    { label: 'Pigmentation', value: 68 },
                    { label: 'Radiance', value: 80 }
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {metric.label}
                        </span>
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {metric.value}%
                        </span>
                      </div>
                      <div className="h-2 bg-amber-100/60 dark:bg-slate-800/60 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-amber-600 dark:bg-amber-500 rounded-full transition-all duration-500"
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-2 px-4 py-2.5 bg-amber-700 dark:bg-amber-600 text-white text-sm font-medium rounded-xl shadow-sm hover:bg-amber-800 dark:hover:bg-amber-700 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Get Recommendations →
                </button>
              </div>
            </div>
          ) : (
            <div className="inline-block bg-gradient-to-br from-white to-orange-50/40 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-sm rounded-2xl rounded-bl-md px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-[0_1px_3px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-amber-200/40 dark:border-slate-700/50">
              <p className="text-[13px] sm:text-sm text-slate-700 dark:text-slate-100 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {message}
              </p>
            </div>
          )}
          {isLastInGroup && (
            <span className="text-[10px] text-amber-700/50 dark:text-slate-500 ml-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              {timestamp}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2.5 sm:gap-3 items-end justify-end px-4 sm:px-6 py-2 max-w-4xl mx-auto">
      <div className="flex flex-col gap-1 items-end max-w-[80%] sm:max-w-[75%]">
        {imageUrl ? (
          <div className="inline-block bg-amber-700 dark:bg-amber-600 rounded-2xl rounded-br-md p-1.5 shadow-sm border border-amber-600/30 dark:border-amber-500/40">
            <img 
              src={imageUrl} 
              alt="Uploaded" 
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl"
            />
          </div>
        ) : (
          <div className="inline-block bg-amber-700 dark:bg-amber-600 rounded-2xl rounded-br-md px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-sm border border-amber-600/30 dark:border-amber-500/40">
            <p className="text-[13px] sm:text-sm text-white leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              {message}
            </p>
          </div>
        )}
        <span className="text-[10px] text-amber-700/50 dark:text-slate-500 mr-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
          {timestamp}
        </span>
      </div>
    </div>
  );
}