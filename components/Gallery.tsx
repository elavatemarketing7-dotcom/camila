
import React, { useState } from 'react';
import { GalleryItem } from '../types';

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(items[0].category);

  const activeImages = items.find(cat => cat.category === activeCategory)?.images || [];

  const handleImageClick = (e: React.MouseEvent, img: string) => {
    e.stopPropagation();
    setSelectedImage(img);
  };

  const closeLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <div className="w-full space-y-12">
      {/* Category Selector */}
      <div className="sticky top-24 z-30 py-4 bg-[#fcfbf9]/80 backdrop-blur-sm -mx-6 px-6 border-b border-[#2d1e16]/5 overflow-x-auto no-scrollbar flex gap-3">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {activeImages.map((img, imgIdx) => (
          <div 
            key={imgIdx}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group bg-white border border-[#2d1e16]/5"
            onClick={(e) => handleImageClick(e, img)}
          >
            <img 
              src={img} 
              alt={`${activeCategory} ${imgIdx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#2d1e16]/0 group-hover:bg-[#2d1e16]/5 transition-colors duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Lightbox - Só renderiza se houver uma imagem selecionada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-[#2d1e16]/95 flex items-center justify-center p-4 cursor-pointer backdrop-blur-md"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300">
             <img 
               src={selectedImage} 
               alt="Fullscreen" 
               className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" 
               onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar na imagem em si
             />
             <button 
               onClick={closeLightbox}
               className="absolute top-4 right-4 text-white/70 hover:text-white text-5xl transition-colors p-4"
             >
               &times;
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;