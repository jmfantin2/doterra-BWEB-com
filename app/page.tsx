'use client';
import SymptomBubbles from '@/components/SymptomBubbles';
import OilResults from '@/components/OilResults';
import VendorHeader from '@/components/VendorHeader';

export default function Home() {
  return (
    <>
      <VendorHeader />
      <main className="bg-base-200 w-full flex flex-col gap-6 px-4 py-8 items-center mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 text-center sm:text-left">
          Selecione seus sintomas
        </h1>
        <p className="text-gray-600 text-sm text-center sm:text-left">
          Clique nos sintomas abaixo para adicioná-los ou removê-los.
        </p>
        <SymptomBubbles />
        <OilResults />
      </main>
    </>
  );
}
