import SymptomBubbles from '@/components/SymptomBubbles';

export default function Home() {
  return (
    <main className="flex flex-col gap-6 px-4 py-8 items-center sm:items-start sm:max-w-xl lg:max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 text-center sm:text-left">
        Selecione seus sintomas
      </h1>
      <p className="text-gray-600 text-sm text-center sm:text-left">
        Clique nos sintomas abaixo para adicioná-los ou removê-los.
      </p>
      <SymptomBubbles />
    </main>
  );
}
