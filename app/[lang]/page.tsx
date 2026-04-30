import Image from 'next/image';

const dict = {
  pt: {
    organizedBy: "Organizado por",
    title: "UFV Hackathon 2026",
    subtitle: "Inovação na intersecção de dados, tecnologia e melhoramento genético.",
    detailsTitle: "Resumindo pra você",
    location: "LOCAL: IDATA - UFV - Brasil",
    date: "DATA: 26 a 28 de junho, 2026",
    prizes: "PRÊMIOS PARA OS 1ºS, 2ºS E 3ºS LUGARES.",
    prizess: "Oportunidade de ganhar apple watches ⌚, legos 🧱, ipads 💻 e mais!",
    prize1: "",
    prize2: "",
    prize3: "",
    partners: "Parceiros",
    history1: "Em 2026, a UFV celebra seu centenário de excelência e pioneirismo. Em perfeita sintonia, o Programa de Pós-Graduação em Genética e Melhoramento completa 50 anos — meio século de sucessos seguidos dedicados à história desta universidade. Tem até logo comemorativa, olha só!",
    history2: "Para celebrar este marco, propomos um desafio que olha para o futuro: o UFV Hackathon 2026. É o momento de unir o nosso legado acadêmico com a agilidade da tecnologia para solucionar os desafios da próxima geração."
  },
  en: {
    organizedBy: "Organized by",
    title: "UFV Hackathon 2026",
    subtitle: "Unleashing innovation at the intersection of data, technology, and plant breeding.",
    detailsTitle: "To make lon story short",
    location: "LOCATION: IDATA - UFV - Brazil",
    date: "DATE: May 26th to  28th, 2026",
    prizes: "PRIZE June FOR 1ºS, 2ºS AND 3ºS PLACES.",
    prizess: "Opportunity to win apple watches ⌚, legos 🧱 , ipads 💻 and more!",
    prize1: "",
    prize2: "",
    prize3: "",
    partners: "Partners",
    history1: "In 2026, the Federal University of Viçosa (UFV) celebrates its century of excellence and pioneering spirit. In perfect harmony, the Graduate Program in Genetics and Breeding marks its 50th anniversary—a half-century of dedication, accompanying half of this university's history with cutting-edge science. We even have a commemorative logo, check it out!",
    history2: "To commemorate this milestone, we propose a challenge that looks ahead: the UFV Hackathon 2026. It is time to unite our academic legacy with the agility of technology to solve the challenges of the next generation."

  }
};

export default async function Home({ params }: { params: { lang: 'pt' | 'en' } }) {
  // Await nos params para o App Router moderno
  const { lang } = await params;
  const t = dict[lang] || dict.pt;

  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12">


      {/* Container Hero */}
      <section className="border border-black mb-12 bg-gray-50">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-black">

          <div className="relative w-full md:w-2/3 h-60 md:h-80 overflow-hidden">
            <Image
              src="/logos/logo-hackaton.webp"
              alt="UFV Hackathon 2026 Visual"
              fill
              sizes='(max-width: 768px) 100vw, 66vw'
              className="object-cover"
              priority
            />
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col justify-center bg-white">
            <h3 className="text-xs font-mono uppercase tracking-widest text-center mb-6 border-b border-black pb-2">
              {t.organizedBy}
            </h3>

            <div className="grid grid-cols-3 gap-4 items-start justify-items-center">
              {[
                { id: "kogdias1", role: "Prof. UFV", name: "Kaio Olimpio Dias", linkedin: "https://www.linkedin.com/in/kaio-olimpio-19729a66/" },
                { id: "lb", role: "Prof. UFV", name: "Leonardo Bhering", linkedin: "https://www.linkedin.com/in/leonardo-bhering-aa504338/" },
                { id: "mt", role: "Head of Outreach BAYER", name: "Masha Trenhaile", linkedin: "https://www.linkedin.com/in/masha-trenhaile-60111a6/" },
              ].map((person) => (
                <div key={person.id} className="flex flex-col items-center text-center gap-2">
                  {/* Imagem */}
                  <div className="relative w-16 h-16">
                    <a href={person.linkedin} className='relative block w-full h-full' rel='noopener noreferrer' target='_blank'>
                      <Image
                        src={`/${person.id}.webp`}
                        alt={person.name}
                        fill
                        sizes="64px"
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </a>
                  </div>
                  {/* Texto */}
                  <div className="text-[10px] leading-tight w-20">
                    <strong>{person.role}</strong>
                    <p>{person.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='mb-6 text-justify flex flex-col'>
        <span className='mb-6'>{t.history1}</span>
        <div className='flex justify-evenly'>
          <div className='relative w-36 h-36'>
            <Image
              src="/logos/logo-ppggm.webp"
              alt='Logo comemorativo 50 anos PPGGM'
              fill
              sizes='144px'
              style={{ objectFit: 'contain' }}
            >

            </Image>
          </div>
          <div className='relative w-36 h-36'>
            <Image
              src="/logos/logo-ufv-100-2.png"
              alt='Logo comemorativo 100 anos UFV'
              fill
              sizes='144px'
              style={{ objectFit: 'contain' }}
            >

            </Image>
          </div>
        </div>
        <span className='mb-4 mt-4'>{t.history2}</span>

      </section>

      {/* Resumo */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div>
          <h1 className="md:text-4xl text-xl font-bold mb-4 uppercase tracking-widest font-mono">{t.title}</h1>
          <p className="text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        <div className="border-l border-black pl-8 font-mono">
          <h2 className="font-bold mb-3 uppercase tracking-wider text-sm  pb-1 inline-block">
            {t.detailsTitle}
          </h2>
          <ul className="space-y-3 text-sm">
            <li><span >📍 {t.location}</span></li>
            <li><span >📅 {t.date}</span></li>
            <li><span >🏆 {t.prizes}</span></li>
            <li className='bg-red-200 p-2 border'><span className='bg-red-2'>{t.prizess}</span></li>
          </ul>
          <div className="flex items-end justify-between gap-2 h-32 mt-4 border-black pb-1">

            {/* 2º Lugar */}
            <div className="flex flex-col items-center flex-1">
              <span className="text-[10px] text-center leading-tight mb-1">{t.prize2}</span>
              <div className="w-full bg-gray-200 border border-black h-16 flex items-center justify-center">
                <span className="font-bold">2º</span>
              </div>
            </div>

            {/* 1º Lugar */}
            <div className="flex flex-col items-center flex-1">
              <span className="text-[10px] font-bold text-center leading-tight mb-1">{t.prize1}</span>
              <div className="w-full bg-yellow-400 border border-black h-26 flex items-center justify-center">
                <span className="font-bold text-lg">1º</span>
              </div>
            </div>

            {/* 3º Lugar */}
            <div className="flex flex-col items-center flex-1">
              <span className="text-[10px] text-center leading-tight mb-1">{t.prize3}</span>
              <div className="w-full bg-orange-200 border border-black h-10 flex items-center justify-center">
                <span className="font-bold">3º</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partners */}
      <section className='mt-15 flex flex-col w-full justify-between items-center'>
        <span className='mb-4 font-bold uppercase text-xl'>{t.partners}</span>
        <div className="flex flex-col md:flex-row justify-evenly flex-grow ">
          {["ppg", "ppggm", "tecnoparq", "genmelhor", "ccb", "cca"].map((logoNum) => (
            <div key={logoNum} className="relative w-24 h-24">
              <Image
                src={`/logos/logo-${logoNum}.webp`}
                alt={`Sponsor Logo ${logoNum}`}
                fill
                sizes='96px'
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}