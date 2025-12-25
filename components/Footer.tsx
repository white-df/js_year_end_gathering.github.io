import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 text-center px-6 relative z-10">
      
      {/* Credits Section */}
      <div className="mb-16 flex flex-col items-center gap-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Host</p>
          <p className="serif-font text-xl text-stone-200">Dana Kim</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Head Chef</p>
          <p className="serif-font text-xl text-stone-200">Jongsoo Kim</p>
        </div>
      </div>

      <div className="h-px w-12 bg-stone-800 mx-auto mb-8"></div>
      
      <p className="serif-font text-base text-stone-500 italic">
        Eat well, feel better.
      </p>
    </footer>
  );
};