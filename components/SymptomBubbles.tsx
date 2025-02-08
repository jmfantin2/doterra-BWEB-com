'use client';
import { useState } from 'react';
import { useSymptoms } from '@/contexts/SymptomsContext';

const symptoms = [
  { display: 'Vertigem', data: 'vertigem' },
  { display: 'Enjôo', data: 'enjoo' },
  { display: 'Enjôo de Viagem', data: 'enjooDeViagem' },
  { display: 'Insônia', data: 'insonia' },
  { display: 'Cicatriz', data: 'cicatriz' },
];

const SymptomBubbles = () => {
  const { symptoms: selectedSymptoms, toggleSymptom } = useSymptoms();
  const [search, setSearch] = useState('');

  // Filtra os sintomas com base no input do usuário
  const filteredSymptoms = symptoms.filter(
    (symptom) =>
      symptom.display.toLowerCase().includes(search.toLowerCase()) ||
      symptom.data.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-lg flex flex-col items-center sm:items-start">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Pesquisar sintomas..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />

      {/* Lista de sintomas filtrados */}
      <div
        className={`flex flex-wrap gap-2 w-full ${
          filteredSymptoms.length === 0 ? 'hidden' : ''
        }`}
      >
        {filteredSymptoms.map((symptom) => {
          const isActive = selectedSymptoms.includes(symptom.data);

          return (
            <button
              key={symptom.data}
              className={`px-4 py-2 rounded-full border transition ${
                isActive
                  ? 'bg-blue-500 text-white border-blue-600'
                  : 'bg-gray-200 text-gray-800 border-gray-300'
              }`}
              onClick={() => toggleSymptom(symptom.data)}
            >
              {symptom.display}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SymptomBubbles;
