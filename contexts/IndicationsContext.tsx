'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type IndicationsContextType = {
  indications: string[];
  selectedCategory: string | null;
  toggleIndication: (indication: string) => void;
  clearIndications: () => void;
  setCategory: (category: string | null) => void;
};

// Criando o contexto com um valor padrão
const IndicationsContext = createContext<IndicationsContextType | undefined>(
  undefined
);

export const IndicationsProvider = ({ children }: { children: ReactNode }) => {
  const [indications, setIndications] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Alterna a indicação selecionada (adiciona ou remove)
  const toggleIndication = (indication: string) => {
    setIndications((prev) =>
      prev.includes(indication)
        ? prev.filter((i) => i !== indication)
        : [...prev, indication]
    );
  };

  // Limpa todas as indicações selecionadas
  const clearIndications = () => setIndications([]);

  // Define a categoria selecionada (ou remove o filtro)
  const setCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <IndicationsContext.Provider
      value={{
        indications,
        selectedCategory,
        toggleIndication,
        clearIndications,
        setCategory,
      }}
    >
      {children}
    </IndicationsContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useIndications = () => {
  const context = useContext(IndicationsContext);
  if (!context) {
    throw new Error(
      'useIndications deve ser usado dentro de um IndicationsProvider'
    );
  }
  return context;
};
