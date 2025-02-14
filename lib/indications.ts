// lib/indications.ts
//import { Oil } from "./oils";

export type Indication = {
  id: string;
  displayName: string;
  standardOils: string[]; // Lista de óleos recomendados (standard)
  starOils: string[]; // Lista de óleos "destaque" (star)
};

// Mapeamento das indicações e óleos recomendados
export const indications: Record<string, Indication> = {
  vertigem: {
    id: 'vertigem',
    displayName: 'Vertigem',
    standardOils: ['ginger', 'zengest'],
    starOils: [],
  },
  enjoo: {
    id: 'enjoo',
    displayName: 'Enjôo',
    standardOils: ['ginger', 'zengest'],
    starOils: [],
  },
  enjooDeViagem: {
    id: 'enjooDeViagem',
    displayName: 'Enjôo de Viagem',
    standardOils: ['ginger', 'zengest'],
    starOils: ['ginger'],
  },
  insonia: {
    id: 'insonia',
    displayName: 'Insônia',
    standardOils: ['fennel', 'zengest'],
    starOils: ['fennel'],
  },
  cicatriz: {
    id: 'cicatriz',
    displayName: 'Cicatriz',
    standardOils: ['fennel', 'ginger'],
    starOils: ['ginger'],
  },
};
