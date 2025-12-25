import React from 'react';
import { MenuItemData } from '../types';

interface MenuItemProps {
  item: MenuItemData;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="mb-14 last:mb-0 text-center relative group px-4">
      {/* English Name */}
      <h3 className="serif-font text-2xl md:text-3xl text-stone-100 group-hover:text-amber-200 transition-colors duration-500 cursor-default leading-tight mb-1">
        {item.name}
      </h3>
      
      {/* Korean Name */}
      <p className="font-serif text-lg text-amber-600/80 mb-4 italic">
        {item.koreanName}
      </p>
      
      {/* Description */}
      <p className="font-sans text-stone-400 text-sm md:text-base leading-relaxed break-keep whitespace-pre-line max-w-md mx-auto">
        {item.description}
      </p>

      {/* Optional: Subtle decorative element on hover */}
      <div className="h-px w-0 bg-amber-500/30 mx-auto mt-6 transition-all duration-700 group-hover:w-16"></div>
    </div>
  );
};