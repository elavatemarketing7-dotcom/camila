
import React from 'react';
import { EXPERT_NAME, EXPERT_PHOTOS, VIDEO_URL, WHATSAPP_URL, INSTAGRAM_URL, GALLERY_DATA, MAPS_URL, WAZE_URL } from '../constants';
import Gallery from './Gallery';

const LandingPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { label: "Início", id: "home" },
    { label: "O Método", id: "about" },
    { label: "Resultados", id: "results" },
    { label: "Localização", id: "location" }
  ];

  return (
    <div className="relative text-[#2d1e16] bg-[#fcfbf9]">
      {/* Premium Navigation */}
      <nav className="sticky top-0 z-[100] glass border-b border-[#2d1e16]/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-5">
            <div className="flex flex-col">
              <h1 className="signature text-2xl md:text-3xl font-bold text-[#2d1e16] cursor-pointer" onClick={() => scrollToSection('home')}>
                {EXPERT_NAME}
              </h1>
              <button 
                onClick={() => scrollToSection('location')}
                className="flex lg:hidden items-center gap-1 text-[7px] font-bold uppercase tracking-[0.2em] text-[#c2a382]"
              >
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                Contagem - MG
              </button>
            </div>

            <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2d1e16]/60">
              {menuItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-[#c2a382] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <a 
              href={WHATSAPP_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c2a382] text-white px-5 py-2.5 md:px-8 md:py-3 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-lg active:scale-95"
            >
              Agendar
            </a>
          </div>

          <div className="lg:hidden border-t border-[#2d1e16]/5 overflow-x-auto no-scrollbar flex items-center justify-center gap-6 px-4 py-2 bg-white/50">
            {menuItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.1em] text-[#2d1e16]/60"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <header id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#2d1e16]">
        <div className="absolute inset-0 z-0">
          <img src={EXPERT_PHOTOS.main} alt={EXPERT_NAME} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d1e16] via-transparent to-transparent opacity-80"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-5xl md:text-9xl font-bold text-white leading-none tracking-tighter">
              Realce sua <br/>
              <span className="italic text-[#c2a382] font-normal signature text-6xl md:text-9xl block mt-2">essência</span>
            </h2>
            <p className="text-base md:text-2xl text-white/90 leading-relaxed max-w-lg">
              Dra. <span className="font-bold">{EXPERT_NAME}</span>. Biomedicina Estética com foco em naturalidade e resultados reais.
            </p>
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#c2a382] text-white rounded-full text-base font-bold text-center shadow-2xl">
                Agendar Agora
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="results" className="py-20 bg-[#fcfbf9] relative z-10">
        <div className="max-w-7xl mx-auto px-4">
           <div className="mb-12">
              <span className="text-[#c2a382] font-black tracking-[0.3em] uppercase text-[9px]">Resultados Reais</span>
              <h2 className="text-4xl font-bold">Transformações</h2>
           </div>
           <Gallery items={GALLERY_DATA} />
        </div>
      </section>

      <section id="location" className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-[#fcfbf9] rounded-[2.5rem] p-8 md:p-20 shadow-xl border border-[#2d1e16]/5 grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                 <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Onde nos encontrar</h2>
                 <div className="flex gap-3">
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-4 bg-[#2d1e16] text-white rounded-xl font-bold text-[9px] uppercase tracking-widest">Google Maps</a>
                    <a href={WAZE_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-4 bg-[#33ccff] text-white rounded-xl font-bold text-[9px] uppercase tracking-widest">Waze</a>
                 </div>
              </div>
              <div className="h-[300px] rounded-[2rem] overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.2202562101186!2d-44.0337366!3d-19.930434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzQ5LjYiUyA0NMKwMDInMDEuNCJX!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr" className="w-full h-full border-0 grayscale"></iframe>
              </div>
           </div>
        </div>
      </section>

      <footer className="relative z-[50] bg-[#2d1e16] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
           <h2 className="signature text-4xl">{EXPERT_NAME}</h2>
           
           <div className="flex flex-col gap-2 items-center">
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40 italic">Biomedicina I Estética de Coração 💚</p>
              <button onClick={() => scrollToSection('location')} className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#c2a382]">
                Bairro Água Branca, Contagem
              </button>
           </div>

           <div className="flex gap-10 items-center justify-center mt-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[#c2a382] transition-colors py-2 border-b border-white/10"
              >
                Instagram
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[#c2a382] transition-colors py-2 border-b border-white/10"
              >
                WhatsApp
              </a>
           </div>

           <div className="pt-8 border-t border-white/5 w-full text-[8px] text-white/20 uppercase tracking-widest font-bold">
             © {new Date().getFullYear()} Camila Rufino. Todos os direitos reservados.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;