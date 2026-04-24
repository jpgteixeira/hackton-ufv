// app/[lang]/map-location/page.tsx
import Image from 'next/image';

const dict = {
  pt: {
    title: "LOCALIZAÇÃO",
    description: "O Hackathon acontecerá no centro IDATA na Universidade Federal de Viçosa, Viçosa-MG.",
    altText: "Mapa de Viçosa apontando para a UFV",
    hotelsTitle: "Hotéis Sugeridos:",
    hotelsList: "X, Y, Z",
    mustDoTitle: "O que fazer:",
    mustDoText: "Comer tropeiro no Restaurante Castelo Branco, blablabla."
  },
  en: {
    title: "LOCATION",
    description: "The Hackathon will take place at the IDATA center at the Federal University of Viçosa, Viçosa-MG.",
    altText: "Map of Viçosa pointing to UFV",
    hotelsTitle: "Suggested Hotels:",
    hotelsList: "X, Y, Z",
    mustDoTitle: "Must do:",
    mustDoText: "Eat 'tropeiro' at Castelo Branco Restaurant, blablabla."
  }
};

export default async function MapPage({ params }: { params: { lang: 'pt' | 'en' } }) {
  const { lang } = await params;
  const t = dict[lang] || dict.en;

  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-8 uppercase tracking-widest border-b-2 border-black pb-4">
        {t.title}
      </h1>

      <div className="space-y-6">
        <p className="leading-relaxed">
          {t.description}
        </p>

        {/* Link para o mapa */}
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
          <div className="w-full h-96 bg-gray-200 border border-black flex items-center justify-center relative overflow-hidden group cursor-pointer">
             <Image
               src="/ufv-campus-estatico.png"
               alt={t.altText}
               fill
               style={{ objectFit: 'cover' }}
               className='opacity-90 transition-opacity group-hover:opacity-100'
               priority
             />
          </div>
        </a>

        <div className="mt-6 space-y-2">
            <p className="leading-relaxed">
                <span className="font-bold">{t.hotelsTitle}</span> {t.hotelsList}
            </p>
            <p className="leading-relaxed">
                <span className="font-bold">{t.mustDoTitle}</span> {t.mustDoText}
            </p>
        </div>
      </div>
    </main>
  );
}