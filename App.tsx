
import React, { useState } from 'react';
import { ViewState } from './types';
import { EXPERT_NAME, EXPERT_PHOTOS, WHATSAPP_URL, INSTAGRAM_URL } from './constants';
import Quiz from './components/Quiz';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.INITIAL);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleQuizFinish = (answers: string[]) => {
    setQuizAnswers(answers);
    setView(ViewState.RESULT);
  };

  const getWhatsAppMessageWithResults = () => {
    const text = encodeURIComponent(`Olá Dra. Camila, finalizei meu teste no site e gostaria de agendar uma consulta. Meus objetivos: ${quizAnswers.join(', ')}`);
    return `${WHATSAPP_URL}?text=${text}`;
  };

  const getDirectWhatsAppMessage = () => {
    const text = encodeURIComponent(`Olá Dra. Camila, conheci seu trabalho pelo site e gostaria de conversar sobre um procedimento.`);
    return `${WHATSAPP_URL}?text=${text}`;
  };

  if (view === ViewState.INITIAL) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col md:flex-row bg-[#fcfbf9] overflow-hidden">
        
        {/* Foto da Dra. Camila - Máxima Visibilidade e Foco Braço a Cabeça */}
        <div className="relative w-full h-[65vh] md:h-full md:w-1/2 overflow-hidden order-1 md:order-2">
          <div className="absolute inset-0 animate-breathe">
            <img 
              src={EXPERT_PHOTOS.main} 
              alt={EXPERT_NAME} 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          {/* Overlay minimalista na base para transição limpa para o fundo de conteúdo */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fcfbf9] to-transparent md:hidden"></div>
        </div>
        
        {/* Conteúdo e Botões */}
        <div className="relative z-10 w-full h-[35vh] md:h-full md:w-1/2 flex items-center justify-center p-6 md:p-12 order-2 md:order-1 bg-[#fcfbf9]">
          <div className="w-full max-w-md text-center md:text-left space-y-8 md:space-y-16 animate-soft-flash">
            
            <div className="space-y-2 md:space-y-6">
               <h1 className="signature text-5xl md:text-8xl text-[#2d1e16]">
                 {EXPERT_NAME}
               </h1>
               <div className="h-[1px] w-12 md:w-20 bg-[#c2a382] mx-auto md:mx-0"></div>
               <p className="text-[#2d1e16]/60 tracking-[0.3em] uppercase text-[8px] md:text-[11px] font-black">
                 Biomedicina Estética Avançada
               </p>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-6">
              <button 
                onClick={() => setView(ViewState.QUIZ)}
                className="group relative w-full py-5 md:py-7 bg-[#c2a382] text-white rounded-2xl text-sm md:text-lg font-bold shadow-[0_20px_40px_rgba(194,163,130,0.4)] transition-all active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 shimmer-effect pointer-events-none"></div>
                <span className="relative z-10 tracking-tight">INICIAR AVALIAÇÃO EXCLUSIVA</span>
                <div className="absolute inset-0 bg-[#2d1e16] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <button 
                  onClick={() => setView(ViewState.SITE)}
                  className="py-4 bg-[#2d1e16]/5 text-[#2d1e16] border border-[#2d1e16]/10 rounded-2xl text-[9px] font-bold tracking-[0.1em] uppercase hover:bg-[#2d1e16]/10 transition-all"
                >
                  Ver Portfólio
                </button>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-2xl text-[9px] font-bold tracking-[0.1em] uppercase hover:bg-[#25D366]/20 transition-all text-center"
                >
                  Falar Agora
                </a>
              </div>
            </div>

            <div className="hidden md:block pt-12">
               <p className="text-[#2d1e16]/30 text-[9px] font-bold uppercase tracking-[0.5em]">
                 Técnica • Naturalidade • Segurança
               </p>
            </div>
          </div>
        </div>

      </div>
    );
  }

  if (view === ViewState.QUIZ) {
    return <Quiz onFinish={handleQuizFinish} onGoToSite={() => setView(ViewState.SITE)} />;
  }

  if (view === ViewState.RESULT) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#fcfbf9] flex flex-col items-center justify-center overflow-y-auto px-6 py-8">
        <div className="w-full max-w-md space-y-6 md:space-y-8 text-center">
           <div className="relative inline-block">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-[#c2a382] overflow-hidden shadow-2xl mx-auto ring-8 ring-[#2d1e16]/5">
                <img src={EXPERT_PHOTOS.main} alt={EXPERT_NAME} className="w-full h-full object-cover object-top scale-125" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#2d1e16] text-[#c2a382] text-[8px] px-4 py-1.5 rounded-full whitespace-nowrap uppercase tracking-[0.2em] font-black shadow-lg">
                Compatibilidade Detectada
              </div>
           </div>
           
           <div className="space-y-2">
             <h2 className="text-2xl md:text-3xl font-bold text-[#2d1e16] tracking-tight">Perfil <span className="text-[#c2a382]">Aprovado</span>.</h2>
             <p className="text-xs md:text-sm text-[#2d1e16]/60 leading-relaxed font-light max-w-[280px] mx-auto">
               Dra. Camila Rufino analisou suas respostas. Seu foco em <strong className="text-[#2d1e16]">naturalidade</strong> está alinhado ao nosso método.
             </p>
           </div>

           <div className="flex flex-col gap-3 max-w-xs mx-auto w-full">
              <a 
                href={getWhatsAppMessageWithResults()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full py-5 bg-[#2d1e16] text-white rounded-xl text-xs font-bold shadow-xl hover:bg-[#c2a382] transition-all active:scale-95 flex flex-col items-center gap-0.5 overflow-hidden"
              >
                <div className="absolute inset-0 shimmer-effect pointer-events-none opacity-30"></div>
                <span className="relative z-10 uppercase tracking-wide">Agendar com meus Resultados</span>
                <span className="relative z-10 text-[7px] font-normal opacity-50 uppercase tracking-[0.2em]">Prioridade na Agenda</span>
              </a>

              <a 
                href={getDirectWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 border border-[#2d1e16]/10 text-[#2d1e16] rounded-xl text-xs font-bold hover:border-[#c2a382] hover:text-[#c2a382] transition-all flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Falar com a Dra. Camila</span>
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              
              <button 
                onClick={() => setView(ViewState.SITE)}
                className="w-full py-1 text-[#2d1e16]/30 text-[9px] font-black tracking-[0.2em] uppercase hover:text-[#c2a382] transition-all"
              >
                Acessar Site Principal
              </button>
           </div>
        </div>
      </div>
    );
  }

  return <LandingPage />;
};

export default App;
