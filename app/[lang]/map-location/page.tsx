// app/[lang]/map-location/page.tsx
import Image from 'next/image';

const dict = {
  pt: {
    title: "LOCALIZAÇÃO",
    description: "O Hackathon acontecerá no centro IDATA na Universidade Federal de Viçosa, Viçosa-MG.",
    description2: "Endereço: Avenida Ph Rolfs, s/n – Viçosa/MG – CEP: 36570-900 (ao lado da Agência do Banco do Brasil)",
    altText: "Mapa de Viçosa apontando para a UFV",
    hotelsTitle: "Hotéis Sugeridos:",
    hotelsList: "Alfa Hotel, Bristol Viçosa Hotel, Hotel Central e outros.",
    mustDoTitle: "O que fazer:",
    mustDoText: "Coma um feijão tropeiro no Restaurante Castelo Branco. Se você quiser algo mais jovial, dê um pulo na Rua Santa Rita e, claro, passe algum tempo apreciando a beleza da UFV."
  },
  en: {
    title: "LOCATION",
    description: "The Hackathon will take place at the IDATA center at the Federal University of Viçosa, Viçosa-MG.",
    description2: "Adress: Avenida Ph Rolfs – Viçosa,MG – CEP: 36570-900 near Banco do Brasil Branch",
    altText: "Map of Viçosa pointing to UFV",
    hotelsTitle: "Suggested Hotels: ",
    hotelsList: "Alfa Hotel, Bristol Viçosa Hotel, Hotel Central and others.",
    mustDoTitle: "Must do:",
    mustDoText: "Be sure to try the 'tropeiro' at Castelo Branco Restaurant. If you're looking for a younger vibe, head over to Santa Rita Street, and definitely take some time to enjoy the beautiful UFV campus."
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
        <p className="leading-relaxed"> {t.description2} </p>
       

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