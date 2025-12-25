export interface MenuItemData {
  id: string;
  name: string;
  koreanName: string;
  description: string;
  detail: string;
  imageSeed: number; // For picsum randomness stability
}

export interface MenuCategoryData {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItemData[];
}

export enum SectionType {
  STARTER = 'STARTER',
  MAIN = 'MAIN',
  DESSERT = 'DESSERT'
}