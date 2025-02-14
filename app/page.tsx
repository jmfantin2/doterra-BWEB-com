'use client';
import IndicationBubbles from '@/components/IndicationBubbles';
import OilResults from '@/components/OilResults';
import VendorHeader from '@/components/VendorHeader';

export default function Home() {
  return (
    <>
      <VendorHeader />
      <main className="bg-base-200 w-full flex flex-col gap-6 px-4 py-8 items-center">
        <IndicationBubbles />
        <OilResults />
      </main>
    </>
  );
}
