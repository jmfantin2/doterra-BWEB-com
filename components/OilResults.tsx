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

// Mapeamento de quais óleos tratam quais sintomas
const oilRecommendations: Record<string, string[]> = {
  vertigem: ['ginger', 'zengest'],
  enjoo: ['ginger', 'zengest'],
  enjooDeViagem: ['ginger', 'zengest'],
  insonia: ['fennel'],
  cicatriz: ['ginger'],
};

const OilResults = () => {
  const { symptoms } = useSymptoms();

  // Se nenhum sintoma estiver marcado, exibe todos os óleos disponíveis
  let filteredOils: string[];

  if (symptoms.length === 0) {
    filteredOils = Object.keys(oils);
  } else {
    // Obtém a lista de óleos que tratam pelo menos um sintoma selecionado
    const possibleOils = new Set<string>();
    symptoms.forEach((symptom) => {
      if (oilRecommendations[symptom]) {
        oilRecommendations[symptom].forEach((oil) => possibleOils.add(oil));
      }
    });

    // Agora filtramos apenas os óleos que cobrem 100% dos sintomas selecionados (exclusividade)
    filteredOils = [...possibleOils].filter((oilKey) =>
      symptoms.every((symptom) => oilRecommendations[symptom]?.includes(oilKey))
    );
  }

  return (
    <div className="w-full max-w-lg mt-8">
      <h2 className="text-xl font-semibold text-gray-800">
        Óleos Essenciais Recomendados
      </h2>
      {filteredOils.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {filteredOils.map((oilKey) => {
            const oil = oils[oilKey];

            return (
              <div
                key={oilKey}
                className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white"
              >
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
