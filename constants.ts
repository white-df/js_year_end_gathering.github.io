import { MenuCategoryData, SectionType } from './types';

export const MENU_DATA: MenuCategoryData[] = [
  {
    id: SectionType.STARTER,
    title: 'Starter',
    subtitle: 'Pour Commencer',
    items: [
      {
        id: 's1',
        name: 'Broccolini Gratin',
        koreanName: '브로콜리 치즈 구이',
        description: '브로콜리를 짓눌러 부드러운 식감을 살리고, 모짜렐라 치즈와 페페론치노를 더해 고소함과 매콤함의 밸런스를 맞춘 요리입니다.',
        detail: '',
        imageSeed: 101
      },
      {
        id: 's2',
        name: 'Hasselback King Oyster Mushroom',
        koreanName: '새송이버섯 구이',
        description: '아코디언처럼 칼집을 낸 새송이버섯 사이에 애호박, 베이컨, 모짜렐라 치즈를 채워 버섯의 육즙과 부재료의 조화를 이끌어낸 오븐 구이입니다.',
        detail: '',
        imageSeed: 201
      }
    ]
  },
  {
    id: SectionType.MAIN,
    title: 'Main',
    subtitle: 'Plats Principaux',
    items: [
      {
        id: 'm1',
        name: 'King Oyster Mushroom Jeon',
        koreanName: '새송이버섯전',
        description: '얇게 저민 새송이버섯에 계란 옷을 입혀 노릇하게 구워내, 바삭함과 버섯 특유의 쫄깃한 식감을 살린 요리입니다.',
        detail: '',
        imageSeed: 102
      },
      {
        id: 'm2',
        name: 'Tofu with Kimchi',
        koreanName: '두부김치',
        description: '맛있게 볶아낸 김치와 돼지고기의 풍미를 따뜻한 두부와 함께 곁들여 즐기는 요리입니다.',
        detail: '',
        imageSeed: 202
      },
      {
        id: 'm3',
        name: 'Mushroom Hot Pot',
        koreanName: '버섯 전골',
        description: '7가지 버섯(새송이, 느타리, 양송이, 표고, 팽이, 만가닥, 노루궁뎅이)과 차돌박이, 신선한 채소를 넣어 깊게 끓여낸 전골 요리입니다.',
        detail: '',
        imageSeed: 203
      }
    ]
  },
  {
    id: SectionType.DESSERT,
    title: 'Dessert',
    subtitle: 'Douceurs',
    items: [
      {
        id: 'd1',
        name: 'Semi-Dried Persimmon',
        koreanName: '반건시 (다크 초콜렛을 곁들인)',
        description: '달콤한 곶감에 진한 다크 초콜릿을 입히고 말돈 소금을 곁들여 단짠의 조화를 살린 디저트입니다.',
        detail: '',
        imageSeed: 301
      }
    ]
  }
];