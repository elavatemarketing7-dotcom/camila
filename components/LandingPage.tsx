
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
      {/* Premium Navigation - Compact & Functional */}
      <nav className="sticky top-0 z-50 glass border-b border-[#2d1e16]/5">
        <div className="max-w-7xl mx-auto">
          {/* Main Nav Bar */}
          <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-5">
            <div className="flex flex-col">
              <h1 className="signature text-2xl md:text-3xl font-bold text-[#2d1e16] cursor-pointer" onClick={() => scrollToSection('home')}>
                {EXPERT_NAME}
              </h1>
              <button 
                onClick={() => scrollToSection('location')}
                className="flex lg:hidden items-center gap-1 text-[7px] font-bold uppercase tracking-[0.2em] text-[#c2a382] active:opacity-60 transition-opacity"
              >
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                Contagem - MG
              </button>
            </div>

            {/* Desktop Menu */}
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
              className="bg-[#c2a382] text-white px-5 py-2.5 md:px-8 md:py-3 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#2d1e16] transition-all shadow-lg active:scale-95"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Quick Menu - Compact Horizontal Scroll */}
          <div className="lg:hidden border-t border-[#2d1e16]/5 overflow-x-auto no-scrollbar flex items-center justify-center gap-6 px-4 py-2 bg-white/50">
            {menuItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.1em] text-[#2d1e16]/60 active:text-[#c2a382]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#2d1e16]">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT_PHOTOS.main} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-top opacity-100 scale-100 animate-in fade-in duration-1000" 
          />
          <div className="absolute inset-0 bg-black/30 md:bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="space-y-4 md:space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
               <span className="w-1 h-1 rounded-full bg-[#c2a382] animate-pulse"></span>
               <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white">Atendimento Premium Exclusivo</span>
            </div>
            
            <h2 className="text-5xl md:text-9xl font-bold text-white leading-none tracking-tighter drop-shadow-2xl">
              <span className="text-white">Realce sua</span> <br/>
              <span className="italic text-[#c2a382] font-normal signature text-6xl md:text-9xl block mt-2 drop-shadow-xl">essência</span>
            </h2>
            
            <p className="text-base md:text-2xl text-white/90 leading-relaxed font-medium md:font-light drop-shadow-md max-w-lg mx-auto md:mx-0">
              Dra. <span className="font-bold text-white">{EXPERT_NAME}</span>. Biomedicina Estética com foco em naturalidade e resultados que renovam sua autoconfiança.
            </p>
            
            <div className="flex flex-col gap-4 pt-4 items-center md:items-start">
              <a 
                href={WHATSAPP_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-10 py-5 bg-[#c2a382] text-white rounded-full text-base font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                Agendar via WhatsApp
              </a>
              
              <button 
                onClick={() => scrollToSection('location')}
                className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white"
              >
                <svg className="w-3 h-3 text-[#c2a382]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                Ver Localização em Contagem
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Video Section */}
      <section className="py-20 md:py-32 px-6 bg-[#fcfbf9]">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative group max-w-sm mx-auto w-full">
                 <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] md:aspect-video bg-black relative">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                 </div>
              </div>
              <div className="space-y-6 md:space-y-10">
                 <div className="space-y-3">
                    <span className="text-[#c2a382] font-black tracking-[0.3em] uppercase text-[10px]">Propósito</span>
                    <h2 className="text-3xl md:text-6xl font-bold leading-tight">Onde a ciência encontra a <span className="text-[#c2a382]">sensibilidade</span>.</h2>
                 </div>
                 <p className="text-lg md:text-xl text-[#2d1e16]/60 leading-relaxed font-light">Cada técnica é aplicada com precisão para que sua beleza seja realçada de forma autêntica e harmônica.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {t: "Individual", d: "Cada face merece um plano exclusivo."},
                      {t: "Excelência", d: "Equipamentos certificados e as melhores marcas."}
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-[#2d1e16]/5">
                         <div className="w-8 h-8 rounded-xl bg-[#c2a382]/10 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 text-[#c2a382]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                         </div>
                         <div>
                            <h4 className="font-bold text-[#2d1e16] text-sm">{item.t}</h4>
                            <p className="text-[#2d1e16]/50 text-xs">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Expert Section */}
      <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
              <div className="w-full lg:w-2/5 max-w-md mx-auto relative">
                 <img src={EXPERT_PHOTOS.authority1} alt="Dra. Camila Rufino" className="w-full rounded-[2rem] shadow-2xl" />
                 <div className="absolute -bottom-4 -left-4 bg-[#2d1e16] p-4 md:p-6 rounded-2xl shadow-2xl">
                    <p className="text-2xl font-bold text-[#c2a382]">Premium</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-white/50">Cuidado Especializado</p>
                 </div>
              </div>
              <div className="w-full lg:w-3/5 space-y-6 md:space-y-12">
                 <div className="space-y-4">
                    <h2 className="text-4xl md:text-7xl font-bold text-[#2d1e16] tracking-tighter italic">Dra. Camila Rufino</h2>
                    <h3 className="text-base font-bold tracking-[0.3em] uppercase text-[#c2a382]">Biomedicina Estética de Coração</h3>
                 </div>
                 <div className="space-y-6 text-base md:text-xl text-[#2d1e16]/70 leading-relaxed font-light">
                    <p>A estética deve ser um caminho para a libertação. Minha missão é devolver a você o prazer de se olhar no espelho.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                       <div className="p-5 border border-[#2d1e16]/5 rounded-2xl">
                         <p className="text-[10px] font-black uppercase tracking-widest text-[#2d1e16] mb-1">Especialidade</p>
                         <p className="text-sm text-[#2d1e16]/50">Harmonização e Saúde Tecidual</p>
                       </div>
                       <div className="p-5 border border-[#2d1e16]/5 rounded-2xl">
                         <p className="text-[10px] font-black uppercase tracking-widest text-[#2d1e16] mb-1">Compromisso</p>
                         <p className="text-sm text-[#2d1e16]/50">Transformar vidas através da autoestima</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 md:py-32 bg-[#fcfbf9]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24 gap-4">
              <div className="space-y-2">
                 <span className="text-[#c2a382] font-black tracking-[0.3em] uppercase text-[9px]">Resultados Reais</span>
                 <h2 className="text-4xl md:text-7xl font-bold tracking-tight">Transformações.</h2>
              </div>
              <p className="max-w-xs text-[#2d1e16]/50 text-xs font-light leading-relaxed">Ética e naturalidade em cada detalhe do nosso portfólio.</p>
           </div>
           <Gallery items={GALLERY_DATA} />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
           <div className="bg-[#fcfbf9] rounded-[2.5rem] p-8 md:p-20 overflow-hidden relative shadow-xl border border-[#2d1e16]/5">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                 <div className="space-y-8">
                    <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Onde nos <span className="text-[#c2a382]">encontrar</span>.</h2>
                    <div className="space-y-6">
                       <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm">
                          <div className="w-10 h-10 shrink-0 bg-[#c2a382]/10 rounded-xl flex items-center justify-center text-[#c2a382]">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.0503 4.05025C6.9056 2.19495 9.9056 2.19495 11.7609 4.05025L10 5.81115L8.23909 4.05025ZM10 11.0001C11.1046 11.0001 12 10.1046 12 9.00006C12 7.89549 11.1046 7.00006 10 7.00006C8.89543 7.00006 8 7.89549 8 9.00006C8 10.1046 8.89543 11.0001 10 11.0001Z" clipRule="evenodd"></path><path d="M10 18.9L5.0503 13.9503C3.19495 12.0949 3.19495 9.09495 5.0503 7.23964L10 12.1893L14.9497 7.23964C16.805 9.09495 16.805 12.0949 14.9497 13.9503L10 18.9Z"></path></svg>
                          </div>
                          <div>
                             <p className="font-bold text-[#2d1e16] text-base">Unidade Contagem</p>
                             <p className="text-[#2d1e16]/50 text-sm leading-tight">Bairro Água Branca - MG</p>
                          </div>
                       </div>
                       <div className="flex gap-3">
                          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-4 bg-[#2d1e16] text-white rounded-xl font-bold uppercase tracking-widest text-[9px] hover:bg-[#c2a382] transition-all">
                             Google Maps
                          </a>
                          <a href={WAZE_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-4 bg-[#33ccff] text-white rounded-xl font-bold uppercase tracking-widest text-[9px] hover:bg-[#2d1e16] transition-all">
                             Waze
                          </a>
                       </div>
                    </div>
                 </div>
                 <div className="h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 cursor-pointer" onClick={() => window.open(MAPS_URL, '_blank')}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15004.881024840474!2d-44.0311617!3d-19.9315396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzUzLjUiUyA0NMKwMDEnNTIuMiJX!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr" className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000 contrast-125" allowFullScreen loading="lazy"></iframe>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer - Final Section */}
      <footer className="relative z-40 bg-[#2d1e16] text-white py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
           <h2 className="signature text-4xl">{EXPERT_NAME}</h2>
           
           <div className="flex flex-col gap-2 items-center">
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40">Biomedicina I Estética de Coração 💚</p>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#c2a382] hover:opacity-100 active:opacity-60 transition-opacity"
              >
                Bairro Água Branca, Contagem
              </button>
           </div>

           <div className="flex gap-8 items-center text-[10px] font-bold tracking-[0.3em] uppercase">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#c2a382] transition-colors py-2"
              >
                Instagram
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#c2a382] transition-colors py-2"
              >
                WhatsApp
              </a>
           </div>

           <div className="pt-8 border-t border-white/5 w-full text-[8px] text-white/20 uppercase tracking-widest font-bold">
             © {new Date().getFullYear()} Camila Rufino. Crafted with Excellence.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
