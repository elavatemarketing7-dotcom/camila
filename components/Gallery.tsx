
import React, { useState } from 'react';
import { GalleryItem } from '../types';

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(items[0].category);

  const activeImages = items.find(cat => cat.category === activeCategory)?.images || [];

  return (
    <div className="w-full space-y-12">
      {/* Category Selector - Horizontal Scroll on Mobile */}
      <div className="sticky top-24 z-30 py-4 bg-[#fcfbf9]/80 backdrop-blur-sm -mx-6 px-6 border-b border-[#2d1e16]/5 overflow-x-auto scrollbar-hide flex gap-3 no-scrollbar">
        {items.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat.category)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === cat.category
                ? 'bg-[#2d1e16] text-[#c2a382] border-[#2d1e16] shadow-lg scale-105'
                : 'bg-white text-[#2d1e16]/50 border-[#2d1e16]/10 hover:border-[#c2a382] hover:text-[#c2a382]'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeImages.map((img, imgIdx) => (
          <div 
            key={imgIdx}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white border border-[#2d1e16]/5"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img} 
              alt={`${activeCategory} ${imgIdx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Overlay on hover - now correctly contained within its parent */}
            <div className="absolute inset-0 bg-[#2d1e16]/0 group-hover:bg-[#2d1e16]/10 transition-colors duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {activeImages.length === 0 && (
        <div className="py-20 text-center text-[#2d1e16]/30 font-light italic">
          Nenhuma imagem cadastrada para esta categoria.
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-[#2d1e16]/95 flex items-center justify-center p-4 cursor-pointer backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300">
             <img 
               src={selectedImage} 
               alt="Fullscreen" 
               className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10" 
             />
             <button className="absolute top-4 right-4 text-white/50 hover:text-white text-4xl transition-colors">&times;</button>
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-widest font-bold">
               {activeCategory}
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
