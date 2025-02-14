'use client';

import { useState } from 'react';
import { useIndications } from '@/contexts/IndicationsContext';
import { indications, categories } from '@/lib';

const IndicationBubbles = () => {
  const {
    indications: selectedIndications,
    toggleIndication,
    selectedCategory,
    setCategory,
  } = useIndications();
  const [search, setSearch] = useState('');

  // Filtra as indicações com base no input do usuário e na categoria selecionada
  const filteredIndications = Object.values(indications).filter(
    (indication) =>
      (selectedCategory === null ||
        categories[selectedCategory].indications.includes(indication.id)) &&
      (indication.displayName.toLowerCase().includes(search.toLowerCase()) ||
        indication.id.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="w-full flex flex-col items-center sm:items-start">
      <section className="flex flex-col md:flex-row w-full gap-2 py-4">
        <select
          className="w-full p-2 border rounded-md font-mono"
          onChange={(e) => setCategory(e.target.value || null)}
        >
          <option value="">Categorias</option>
          {Object.values(categories).map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.displayName}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2  border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder:text-black font-mono"
        />
      </section>

      <div className="flex flex-wrap gap-2 w-full">
        {filteredIndications.map((indication) => (
          <button
            key={indication.id}
            className={`px-4 py-2 rounded-full bg-gradient-to-br border transition ${
              selectedIndications.includes(indication.id)
                ? ' from-blue-500 to-violet-500 text-white'
                : 'from-gray-200 to-slate-300 text-gray-800'
            }`}
            onClick={() => toggleIndication(indication.id)}
          >
            {indication.displayName}
          </button>
        ))}
      </div>
    </main>
  );
};

export default IndicationBubbles;
