'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// Definição do tipo para os sintomas
type SymptomsContextType = {
  symptoms: string[];
  toggleSymptom: (symptom: string) => void;
  clearSymptoms: () => void;
};

// Criando o contexto com um valor padrão
const SymptomsContext = createContext<SymptomsContextType | undefined>(
  undefined
);

export const SymptomsProvider = ({ children }: { children: ReactNode }) => {
  const [symptoms, setSymptoms] = useState<string[]>([]);

  // Função para alternar o estado de um sintoma (adicionar/remover)
  const toggleSymptom = (symptom: string) => {
    setSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((s) => s !== symptom)
        : [...prevSymptoms, symptom]
    );
  };

  // Função para limpar todos os sintomas
  const clearSymptoms = () => setSymptoms([]);

  return (
    <SymptomsContext.Provider
      value={{ symptoms, toggleSymptom, clearSymptoms }}
    >
      {children}
    </SymptomsContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useSymptoms = () => {
  const context = useContext(SymptomsContext);
  if (!context) {
    throw new Error('useSymptoms deve ser usado dentro de um SymptomsProvider');
  }
  return context;
};
