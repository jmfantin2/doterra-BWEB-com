// lib/categories.ts
export type Category = {
  id: string;
  displayName: string;
  indications: string[]; // Lista de IDs das indicações pertencentes à categoria
};

// Categorias para agrupar indicações
export const categories: Record<string, Category> = {
  'digestivo': {
    id: 'digestivo',
    displayName: 'Sistema Digestivo',
    indications: ['enjoo', 'enjooDeViagem'],
  },
  'sono': {
    id: 'sono',
    displayName: 'Sono e Relaxamento',
    indications: ['insonia'],
  },
  'pele': {
    id: 'pele',
    displayName: 'Saúde da Pele',
    indications: ['cicatriz'],
  },
  'equilibrio': {
    id: 'equilibrio',
    displayName: 'Equilíbrio e Bem-estar',
    indications: ['vertigem'],
  },
};
