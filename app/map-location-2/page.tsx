"use client"
import dynamic from 'next/dynamic';

// Carrega o mapa apenas no lado do cliente
const MapWithNoSSR = dynamic(() => import('@/components/MapLeaflet'), {
  ssr: false,
});

export default function InteractiveMapPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8"> Find us!</h1>
      <div className="border border-black">
        <MapWithNoSSR />
      </div>
      <p className="mt-4 text-sm">Map provided by OpenStreetMap.</p>
       <p className="mt-4 text-sm">If you may, here <a className='underline text-red-600' href="https://www.google.com/maps/place/IDATA+(Instituto+de+Intelig%C3%AAncia+Artificial+e+Computacional+da+UFV)/@-20.7634586,-42.867701,19.45z/data=!4m6!3m5!1s0xa3670070baab53:0xc9a40db9f3c3d615!8m2!3d-20.7635062!4d-42.867663!16s%2Fg%2F11y6ptlzln?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D">is the link for google maps</a>.</p>
    </main>
  );
}