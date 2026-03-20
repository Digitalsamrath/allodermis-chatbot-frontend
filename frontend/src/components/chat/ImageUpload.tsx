import React, { useRef } from 'react';
import { ImagePlus, X } from 'lucide-react';
import { Button } from '../ui/button';

interface ImageUploadProps {
  onUpload: (file: File) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-amber-200 dark:border-slate-700 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-all hover:border-amber-400 dark:hover:border-slate-500 m-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-slate-700 flex items-center justify-center mb-3">
        <ImagePlus className="w-8 h-8 text-amber-500/80 mb-2" />
      </div>
      <h3 className="text-lg font-medium text-amber-900 dark:text-slate-100 mb-1">Upload Photo</h3>
      <p className="text-sm text-amber-700/70 dark:text-slate-400 text-center mb-4">
        Please upload a clear photo of the affected area for analysis.
      </p>
      <Button 
        onClick={handleClick}
        className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
      >
        Select Image
      </Button>
    </div>
  );
};
