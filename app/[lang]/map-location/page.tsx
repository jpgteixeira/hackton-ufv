// app/[lang]/map-location/page.tsx
import Image from 'next/image';

const dict = {
  pt: {
    title: "LOCALIZAÇÃO",
    description: "O Hackathon acontecerá no centro IDATA na Universidade Federal de Viçosa, Viçosa-MG.",
    description2: "Rua da Agrônomia, s/n – Viçosa/MG – CEP: 36570-900 (ao lado da Agência do Banco do Brasil)",
    titleDescription2:"Endereço:",
    altText: "Mapa de Viçosa apontando para a UFV",
    hotelsTitle: "Hotéis Sugeridos:",
    hotelsList: "Alfa Hotel, Bristol Viçosa Hotel, Hotel Central e outros.",
    mustDoTitle: "O que fazer:",
    mustDoText: "Coma um feijão tropeiro no Restaurante Castelo Branco. Se você quiser algo mais jovial, dê um pulo na Rua Santa Rita e, claro, passe algum tempo apreciando a beleza da UFV."
  },
  en: {
    title: "LOCATION",
    description: "The Hackathon will take place at the IDATA center at the Federal University of Viçosa, Viçosa-MG.",
    description2: "Rua da Agrônomia, – Viçosa,MG – CEP: 36570-900 next to Banco do Brasil Branch",
    titleDescription2:"Address:",
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
       

        {/* Link para o mapa */}
          <div className="w-full h-96 bg-gray-200 border border-black flex items-center justify-center relative overflow-hidden group cursor-pointer">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14922.705242559914!2d-42.87121447141114!3d-20.763909769960602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3670070baab53%3A0xc9a40db9f3c3d615!2sIDATA%20(Instituto%20de%20Intelig%C3%AAncia%20Artificial%20e%20Computacional%20da%20UFV)!5e0!3m2!1sen!2sbr!4v1777748054539!5m2!1sen!2sbr" width="600" height="450" ></iframe>

          </div>
        


        <div className="mt-6 space-y-2">
          <p className="leading-relaxed">
            <span className="font-bold">{t.titleDescription2}</span> {t.description2}
          </p>

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