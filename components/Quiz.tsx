
import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, EXPERT_NAME, EXPERT_PHOTOS } from '../constants';

interface QuizProps {
  onFinish: (answers: string[]) => void;
  onGoToSite: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onGoToSite }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleOptionClick = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsAnalyzing(true);
    }
  };

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            onFinish(answers);
            return 100;
          }
          return prev + 1.5;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing, answers, onFinish]);

  if (isAnalyzing) {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center bg-[#fcfbf9] p-4 text-center">
        <div className="w-full max-w-sm space-y-10 animate-in fade-in zoom-in duration-700">
           <div className="relative flex justify-center">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-[#c2a382] overflow-hidden shadow-2xl ring-8 ring-[#2d1e16]/5 transition-transform duration-1000">
              <img 
                src={EXPERT_PHOTOS.main} 
                alt={EXPERT_NAME} 
                className="w-full h-full object-cover object-top scale-125" 
              />
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#2d1e16] tracking-tight">Analisando Perfil</h2>
            <p className="text-sm text-[#2d1e16]/50 font-light max-w-[220px] mx-auto italic">Cruzando seus objetivos com nossos protocolos exclusivos...</p>
          </div>
          <div className="space-y-4 max-w-xs mx-auto">
             <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-[#c2a382] h-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(194,163,130,0.5)]" 
                  style={{ width: `${progress}%` }}
                ></div>
             </div>
             <p className="text-[#c2a382] text-[10px] font-black tracking-[0.3em] uppercase">{Math.round(progress)}% Concluído</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const totalSteps = QUIZ_QUESTIONS.length;
  const stepPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="fixed inset-0 z-[110] bg-[#2d1e16]/90 flex items-center justify-center backdrop-blur-sm p-4">
      <div className="bg-[#fcfbf9] w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl relative flex flex-col premium-shadow border border-white/20">
        
        {/* Progress Bar Top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100/50">
           <div 
              className="bg-[#c2a382] h-full transition-all duration-500" 
              style={{ width: `${stepPercentage}%` }}
            ></div>
        </div>

        {/* Compact Header */}
        <div className="px-6 pt-6 pb-2 text-center">
          <div className="flex justify-between items-center mb-4">
             <button onClick={onGoToSite} className="text-[#2d1e16]/20 hover:text-[#c2a382] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
             </button>
             <span className="text-[9px] font-black tracking-widest uppercase text-[#c2a382] bg-[#c2a382]/5 px-3 py-1 rounded-full">Etapa {currentStep + 1} / {totalSteps}</span>
             <div className="w-5"></div>
          </div>
          
          <div className="relative flex justify-center mb-3">
            <div className="w-16 h-16 rounded-full border border-[#c2a382] overflow-hidden shadow-md ring-4 ring-[#2d1e16]/5">
              <img 
                src={EXPERT_PHOTOS.main} 
                alt={EXPERT_NAME} 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </div>
          
          <p className="signature text-xl text-[#c2a382] leading-none mb-4">{EXPERT_NAME}</p>
        </div>

        {/* Compact Question Body */}
        <div className="px-6 pb-6 flex flex-col">
          <h2 className="text-xl font-bold text-[#2d1e16] text-center mb-6 leading-tight">
            {currentQuestion.text}
          </h2>
          <div className="grid grid-cols-1 gap-2.5 w-full">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className="w-full py-3.5 px-6 rounded-xl border border-[#2d1e16]/5 bg-white text-sm font-semibold text-[#2d1e16] shadow-sm hover:border-[#c2a382] hover:bg-[#c2a382]/5 active:scale-[0.97] transition-all duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Footer */}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 text-center">
           <button 
             onClick={onGoToSite}
             className="text-[#6b7280] text-[9px] font-bold tracking-[0.2em] uppercase hover:text-[#c2a382] transition-all"
           >
             Pular avaliação
           </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
