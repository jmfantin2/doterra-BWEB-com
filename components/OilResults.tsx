'use client';

import { useIndications } from '@/contexts/IndicationsContext';
import { useVendor } from '@/contexts/VendorContext';
import { indications, oils } from '@/lib/';
import Image from 'next/image';

const OilResults = () => {
  const { indications: selectedIndications } = useIndications();
  const { vendorId } = useVendor();

  // Identifica os óleos recomendados com base nas indicações selecionadas
  let filteredOils = new Set<string>();
  const starTags: Record<string, string[]> = {}; // Armazena tags de destaque

  if (selectedIndications.length === 0) {
    filteredOils = new Set(Object.keys(oils)); // Se nada for selecionado, mostrar todos os óleos
  } else {
    const possibleOils = new Set<string>();

    selectedIndications.forEach((indication) => {
      if (indications[indication]) {
        const { standardOils, starOils } = indications[indication];

        standardOils.forEach((oil) => possibleOils.add(oil));

        starOils.forEach((oil) => {
          possibleOils.add(oil);
          if (!starTags[oil]) {
            starTags[oil] = [];
          }
          starTags[oil].push(indications[indication].displayName);
        });
      }
    });

    // Filtragem exclusiva: só mostra óleos que cobrem 100% das indicações
    filteredOils = new Set(
      [...possibleOils].filter((oilKey) =>
        selectedIndications.every(
          (indication) =>
            indications[indication]?.standardOils.includes(oilKey) ||
            indications[indication]?.starOils.includes(oilKey)
        )
      )
    );
  }

  return (
    <main className="w-full">
      <h2 className="text-xl font-semibold text-justify text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-violet-600 text-gray-800">
        Óleos Essenciais Recomendados
      </h2>
      {filteredOils.size > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {[...filteredOils].map((oilKey) => {
            const oil = oils[oilKey];

            return (
              <div
                key={oilKey}
                className="relative flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white"
              >
                {starTags[oilKey] && starTags[oilKey].length > 0 && (
                  <div className="absolute -top-2 -right-2 flex flex-col space-y-1">
                    {starTags[oilKey].map((indication, index) => (
                      <div
                        key={index}
                        className="bg-yellow-400 text-xs px-2 py-1 rounded-md shadow-md"
                      >
                        ⭐️ {indication}
                      </div>
                    ))}
                  </div>
                )}

                <Image
                  src={oil.img}
                  alt={oil.displayName}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <p className="mt-2 font-medium">{oil.displayName}</p>
                <a
                  //href={oil.buyUrl}
                  href={`https://beta-doterra.myvoffice.com/ShoppingCart/index.cfm?retail=1&OwnerID=${vendorId}&country=BRA&lng=pt_bra`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-blue-500 hover:underline"
                >
                  Comprar
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-600 max-w-[300] text-justify">
          Nenhum óleo atende exclusivamente a todas as indicações selecionadas.
        </p>
      )}
    </main>
  );
};

export default OilResults;
