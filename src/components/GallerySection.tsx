import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/mockData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Camera, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryItem['category']>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: GalleryItem['category'][] = ['All', 'Training', 'Competitions', 'Graduations', 'Youth'];

  const filteredItems = GALLERY_DATA.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
            <Camera className="w-3.5 h-3.5" />
            Dojo Visual Archive
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            Photo & Moment <span className="gold-gradient-text">Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#F5F5F5]/70">
            Capturing intense training moments, championship victories, and sacred graduation ceremonies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#8B0000] to-[#5E0000] text-white border-[#D4AF37] shadow-lg'
                  : 'bg-black/60 text-[#F5F5F5]/70 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 cursor-pointer group relative h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-[0.85]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-base font-bold font-cinzel text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </section>
  );
};
