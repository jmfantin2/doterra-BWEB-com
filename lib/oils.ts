// lib/oils.ts
export type Oil = {
  id: string;
  img: string;
  displayName: string;
  buyUrl: string;
};

// Lista de óleos essenciais disponíveis
export const oils: Record<string, Oil> = {
  ginger: {
    id: 'ginger',
    img: '/images/oils/ginger.png',
    displayName: 'Gengibre',
    buyUrl: 'https://example.com/ginger',
  },
  fennel: {
    id: 'fennel',
    img: '/images/oils/fennel.png',
    displayName: 'Erva-doce',
    buyUrl: 'https://example.com/fennel',
  },
  zengest: {
    id: 'zengest',
    img: '/images/oils/zengest.png',
    displayName: 'ZenGest',
    buyUrl: 'https://example.com/zengest',
  },
};
