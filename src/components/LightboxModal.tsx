import React from 'react';
import { GalleryItem } from '../types';
import { X } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full glass-panel bg-[#121212] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center border border-white/20 hover:bg-[#8B0000] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[75vh] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-6 space-y-2">
          <span className="text-xs uppercase font-bold text-[#D4AF37]">
            {item.category}
          </span>
          <h3 className="text-2xl font-bold font-cinzel text-white">
            {item.title}
          </h3>
          <p className="text-xs text-[#F5F5F5]/80">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
