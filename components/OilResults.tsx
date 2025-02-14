'use client';
import { useSymptoms } from '@/contexts/SymptomsContext';
import Image from 'next/image';

// Definição do tipo para os óleos essenciais
type Oil = {
  img: string;
  displayName: string;
  buyUrl: string;
};

// Lista de óleos essenciais disponíveis
const oils: Record<string, Oil> = {
  ginger: {
    img: '/images/oils/ginger.png',
    displayName: 'Gengibre',
    buyUrl: 'about:blank',
  },
  fennel: {
    img: '/images/oils/fennel.png',
    displayName: 'Erva-doce',
    buyUrl: 'about:blank',
  },
  zengest: {
    img: '/images/oils/zengest.png',
    displayName: 'ZenGest',
    buyUrl: 'about:blank',
  },
};

// Mapeamento de sintomas e seus nomes de exibição
const symptomNames: Record<string, string> = {
  vertigem: 'Vertigem',
  enjoo: 'Enjôo',
  enjooDeViagem: 'Enjôo de Viagem',
  insonia: 'Insônia',
  cicatriz: 'Cicatriz',
};

// Mapeamento de óleos recomendados (standard e star)
const oilRecommendations: Record<
  string,
  { standard: string[]; star: string[] }
> = {
  vertigem: { standard: ['ginger', 'zengest'], star: [] },
  enjoo: { standard: ['ginger', 'zengest'], star: [] },
  enjooDeViagem: { standard: ['ginger', 'zengest'], star: ['ginger'] },
  insonia: { standard: ['fennel', 'zengest'], star: ['fennel'] },
  cicatriz: { standard: ['fennel', 'ginger'], star: ['ginger'] },
};

const OilResults = () => {
  const { symptoms } = useSymptoms();

  // Inicializa as variáveis no escopo superior para evitar erro de escopo
  let filteredOils: Set<string> = new Set();
  const starTags: Record<string, string[]> = {}; // Associar óleos "star" aos sintomas

  if (symptoms.length === 0) {
    filteredOils = new Set(Object.keys(oils)); // Exibe todos os óleos
  } else {
    const possibleOils = new Set<string>();

    symptoms.forEach((symptom) => {
      if (oilRecommendations[symptom]) {
        const { standard, star } = oilRecommendations[symptom];

        // Adiciona os óleos "standard"
        standard.forEach((oil) => possibleOils.add(oil));

        // Adiciona os óleos "star" e associa o sintoma correspondente à tag
        star.forEach((oil) => {
          possibleOils.add(oil);
          if (!starTags[oil]) {
            starTags[oil] = [];
          }
          starTags[oil].push(symptomNames[symptom]); // Usa o nome de exibição correto
        });
      }
    });

    // Filtragem exclusiva: um óleo só aparece se cobrir 100% dos sintomas selecionados
    filteredOils = new Set(
      [...possibleOils].filter((oilKey) =>
        symptoms.every(
          (symptom) =>
            oilRecommendations[symptom]?.standard.includes(oilKey) ||
            oilRecommendations[symptom]?.star.includes(oilKey)
        )
      )
    );
  }

  return (
    <div className="w-full max-w-lg mt-8">
      <h2 className="text-xl font-semibold text-gray-800">
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
                {/* Tag de destaque para óleos "star" */}
                {starTags[oilKey] && starTags[oilKey].length > 0 && (
                  <div className="absolute -top-2 -right-2 flex flex-col space-y-1">
                    {starTags[oilKey].map((symptom, index) => (
                      <div
                        key={index}
                        className="bg-yellow-400 text-xs px-2 py-1 rounded-md shadow-md"
                      >
                        ⭐️ {symptom}
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
                  href={oil.buyUrl}
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
        <p className="text-gray-600 mt-4">
          Nenhum óleo atende exclusivamente a todos os sintomas selecionados.
        </p>
      )}
    </div>
  );
};

export default OilResults;
