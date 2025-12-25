import React from 'react';
import { MenuCategoryData } from '../types';
import { MenuItem } from './MenuItem';

interface MenuSectionProps {
  category: MenuCategoryData;
  index: number;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  return (
    <section className="py-16 px-6 flex flex-col items-center fade-in-up">
      <div className="mb-12 text-center">
        <h2 className="serif-font text-xl text-amber-600/80 italic mb-2">
          {category.title}
        </h2>
        {/* We can uncomment this if we want French subtitles back, but keep it minimal for now */}
        {/* <p className="text-xs uppercase tracking-widest text-stone-600">{category.subtitle}</p> */}
      </div>

      <div className="w-full max-w-lg mx-auto space-y-4">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};