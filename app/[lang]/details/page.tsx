// app/[lang]/details/page.tsx

const dict = {
  pt: {
    title: "DETALHES DO EVENTO",
    whatIsTitle: "O que é?",
    whatIsText: "O UFV Innovation Hackathon é um encontro focado em tecnologia e na resolução de problemas reais. Convidamos engenheiros, cientistas de dados e estudantes apaixonados por inovação para aprender, criar e colaborar lado a lado com especialistas da indústria. Espere workshops técnicos aprofundados, palestrantes renomados e atividades envolventes durante todo o evento.",
    whoWeAreTitle: "Quem somos?",
    whoWeAreText: "Conectamos o legado de inovação da UFV com o poder da computação em nuvem e ferramentas de dados de ponta. Nosso objetivo é criar um ambiente onde a mágica acontece: a intersecção entre sólido conhecimento acadêmico e tecnologias líderes de mercado.",
    whatWillYouDoTitle: "O que você fará?",
    whatWillYouDoText: "Liberte sua criatividade e resolva problemas do mundo real. Você terá 20 horas para testar a plataforma, superar seus limites e sonhar com novos recursos. Tudo isso com suporte total para transformar suas ideias em realidade.",
    reqTitle: "Requisitos",
    reqItems: [
      "Experiência em desenvolvimento de software ou ciência de dados.",
      "Disponibilidade total durante o evento.",
      "Abertura para colaboração multidisciplinar.",
      "Tamanho da equipe: 4 pessoas.",
      "Vagas extremamente limitadas (50 participantes)."
    ],
    prizesTitle: "Premiação",
    prizesData: [
      { place: "1º", value: "01 iPad potente - use para trabalho e lazer, pois ninguém é de ferro", color: "bg-yellow-500" },
      { place: "2º", value: "01 apple watch para você acompanhar seus exercícios", color: "bg-gray-400" },
      { place: "3º", value: "01 conjunto de lego para exercitar a mente", color: "bg-orange-700" }
    ],
    placeLabel: "Lugar"
  },
  en: {
    title: "EVENT DETAILS",
    whatIsTitle: "What is it?",
    whatIsText: "The UFV Innovation Hackathon is a gathering focused on technology and solving real-world problems. We invite engineers, data scientists, and students passionate about innovation to learn, create, and collaborate side-by-side with industry experts. Expect deep technical workshops, renowned guest speakers, and engaging activities throughout the event.",
    whoWeAreTitle: "Who we are?",
    whoWeAreText: "We bridge UFV's legacy of innovation with the power of cloud computing and cutting-edge data tools. Our goal is to create an environment where the magic happens: the intersection between solid academic knowledge and market-leading technologies.",
    whatWillYouDoTitle: "What will you do?",
    whatWillYouDoText: "Unleash your creativity and solve real-world problems. You will have 20 hours to test the platform, push your boundaries, and dream about new features. All of this with full support to turn your ideas into reality.",
    reqTitle: "Requirements",
    reqItems: [
      "Experience in software development or data science.",
      "Full availability during the event.",
      "Openness to multidisciplinary collaboration.",
      "Team size: 4 people.",
      "Extremely limited spots (50 participants)."
    ],
    prizesTitle: "Premiação",
    prizesData: [
     { place: "1st", value: "01 powerful iPad - for work and leisure, because you need some downtime", color: "bg-yellow-500" },
      { place: "2nd", value: "01 Apple Watch to keep track of your workouts", color: "bg-gray-400" },
      { place: "3rd", value: "01 LEGO set to exercise your mind", color: "bg-orange-700" }
    ],
    placeLabel: "Place"
  }
};

export default async function DetailsPage({ params }: { params: { lang: 'pt' | 'en' } }) {
  const { lang } = await params;
  const t = dict[lang] || dict.en; // Default para inglês ou português conforme preferir

  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-12 border-b-2 border-black pb-4">
        {t.title}
      </h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest">{t.whatIsTitle}</h2>
          <p className="leading-relaxed text-justify">{t.whatIsText}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest">{t.whoWeAreTitle}</h2>
          <p className="leading-relaxed text-justify">{t.whoWeAreText}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest">{t.whatWillYouDoTitle}</h2>
          <p className="leading-relaxed text-justify">{t.whatWillYouDoText}</p>
        </section>

      <section className="border-t border-black pt-8">
  <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-center">{t.prizesTitle}</h2>
  
  {/* Container do Pódio */}
  <div className="flex flex-row items-end justify-center gap-2 h-[450px] md:h-[400px] border-b-2 border-black pb-2">
    
    {/* 2º LUGAR */}
    <div className="flex flex-col items-center w-1/3 h-2/3 order-1 gap-2">
      <span className="font-bold text-black uppercase tracking-widest">{t.prizesData[1].place} {t.placeLabel}</span>
      <div className={`${t.prizesData[1].color} text-black p-4 w-full h-full flex items-center justify-center text-center font-mono`}>
        <span className="text-sm font-medium">{t.prizesData[1].value}</span>
      </div>
    </div>

    {/* 1º LUGAR */}
    <div className="flex flex-col items-center w-1/3 h-full order-2 gap-2">
      <span className="font-bold text-black uppercase tracking-widest">{t.prizesData[0].place} {t.placeLabel}</span>
      <div className={`${t.prizesData[0].color} text-black p-4 w-full h-full flex items-center justify-center text-center font-mono`}>
        <span className="text-base">{t.prizesData[0].value}</span>
      </div>
    </div>

    {/* 3º LUGAR */}
    <div className="flex flex-col items-center w-1/3 h-1/3 order-3 gap-2">
      <span className="font-bold text-black uppercase tracking-widest">{t.prizesData[2].place} {t.placeLabel}</span>
      <div className={`${t.prizesData[2].color} text-black p-4 w-full h-full flex items-center justify-center text-center font-mono`}>
        <span className="text-xs font-medium">{t.prizesData[2].value}</span>
      </div>
    </div>

  </div>
</section>
      </div>
    </main>
  );
}