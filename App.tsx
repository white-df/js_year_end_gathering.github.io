import React from 'react';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { MENU_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative z-10 selection:bg-amber-900/30">
      
      {/* Fixed Sticky Header with Glassmorphism - Height reduced */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex justify-center bg-stone-900/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <span className="font-serif italic text-xs md:text-sm text-amber-500/80 tracking-widest uppercase">
          Year of Warmth
        </span>
      </header>

      <main>
        <Hero />
        
        <div className="relative z-10 pb-20">
          {MENU_DATA.map((category, index) => (
            <div key={category.id} id={`section-${index}`}>
               <MenuSection category={category} index={index} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;