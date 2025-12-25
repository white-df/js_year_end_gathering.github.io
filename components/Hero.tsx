import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6">
      
      {/* Decorative blurred glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-700/20 rounded-full blur-[80px] z-0"></div>

      <div className="relative z-10 space-y-8 max-w-3xl fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="space-y-2">
          {/* Date Information */}
          <p className="text-amber-200/60 serif-font text-lg italic">2025.12.26</p>
          {/* Title Reverted to Year-End Gathering */}
          <h1 className="text-4xl md:text-6xl font-light text-stone-100 serif-font leading-tight">
            Year-End <br/> Gathering
          </h1>
        </div>
        
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent mx-auto"></div>
        
        <p className="text-stone-300/80 font-light text-sm md:text-base leading-loose mx-auto font-sans tracking-wide break-keep whitespace-pre-line">
          올 한 해도 정말 고생 많으셨습니다.{"\n"}
          건강하고 따뜻한 음식과 함께,{"\n"}
          올해 고생한 자신에게 잔잔한 위로를 건네시길 바랍니다.{"\n"}
          2026년에도 여러분이 걷는 길이 꽃길이기를 바랍니다.
        </p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-10 flex flex-col items-center gap-2 fade-in-up" style={{ animationDelay: '1.4s' }}>
        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Menu</span>
        <ChevronDown className="w-4 h-4 text-stone-500 animate-bounce" />
      </div>
    </section>
  );
};