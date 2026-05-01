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
    reqTitle: "Requisitos (não obrigatórios)",
    reqItems: [
      "Experiência em desenvolvimento de software ou ciência de dados.",
      "Disponibilidade total durante o evento.",
      "Abertura para colaboração multidisciplinar.",
      "Tamanho da equipe: 5 pessoas por grupo.",
      "Vagas extremamente limitadas - 50 participantes (10 grupos)."
    ],
    // --- NOVO: DICIONÁRIO DO CRONOGRAMA EM PT ---
    scheduleTitle: "Programação",
    fridayTitle: "Sexta-feira (26/06)",
    fridayEvents: [
      { time: "16h00", desc: "Abertura (Kickoff)" },
      { time: "17h00", desc: "Fala dos administradores sobre a relação de valor universidade-empresa" },
      { time: "19h00", desc: "Apresentação do conjunto de dados e introdução básica ao melhoramento" },
      { time: "20h00", desc: "Jantar" },
      { time: "21h00", desc: "Fechamento do local" }
    ],
    saturdayTitle: "Sábado (27/06)",
    saturdayEvents: [
      { time: "09h00 - 21h00", desc: "Café da manhã e sessões de trabalho durante todo o dia" },
      { time: "12h00", desc: "Almoço com painel de discussão sobre mercado e currículos" },
      { time: "20h00", desc: "Jantar" }
    ],
    sundayTitle: "Domingo (28/06)",
    sundayEvents: [
      { time: "09h00", desc: "Café da manhã e prazo final de envio de projetos" },
      { time: "11h00", desc: "Apresentação das equipes e avaliação" },
      { time: "12h00", desc: "Almoço" },
      { time: "13h30", desc: "Encerramento e Premiação" }
    ],
    // ------------------------------------------
    prizesTitle: "Premiação",
    prizesDescription: "Prêmios diversos que, com certeza, contribuirão com o seu dia a dia, seja no trabalho ou na diversão. Serão diferentes tipos de LEGO®, Apple Watches, iPads e muito mais!",
    prizesData: [
      { place: "1º", value: "", color: "bg-yellow-500" },
      { place: "2º", value: "", color: "bg-gray-400" },
      { place: "3º", value: "0", color: "bg-orange-700" }
    ],
    placeLabel: "Lugar"
  },
  en: {
    title: "EVENT DETAILS",
    whatIsTitle: "What is a Hackathon?",
    whatIsText: "The UFV Innovation Hackathon is a gathering focused on technology and solving real-world problems. We invite engineers, data scientists, and students who are passionate about innovation, creation, and collaboration to work side by side with company experts. Participants can expect deep technical workshops, renowned guest speakers, and engaging activities throughout the event.",
    whoWeAreTitle: "Who are we?",
    whoWeAreText: "We bridge UFV's legacy of innovation with the power of cloud computing and cutting-edge data tools. Our goal is to create an environment where the magic happens: the intersection between solid academic knowledge and market-leading technologies.",
    whatWillYouDoTitle: "What will you do?",
    whatWillYouDoText: "Unleash your creativity and solve real-world problems. You will have 20 hours to test the platform, push your boundaries, and dream about new features. All of this with full support to turn your ideas into reality.",
    reqTitle: "Nice-to-have",
    reqItems: [
      "Experience in software development or data science.",
      "Full availability during the event.",
      "Openness to multidisciplinary collaboration.",
      "Team size: 5 people.",
      "Extremely limited spots - 50 participants (10 groups total)."
    ],
    // --- NOVO: DICIONÁRIO DO CRONOGRAMA EM EN ---
    scheduleTitle: "Schedule",
    fridayTitle: "Friday (06/26)",
    fridayEvents: [
      { time: "4:00 PM", desc: "Kickoff" },
      { time: "5:00 PM", desc: "Administrators from universities speak about the value relationship" },
      { time: "7:00 PM", desc: "Introduce the data set and basic intro to breeding" },
      { time: "8:00 PM", desc: "Dinner" },
      { time: "9:00 PM", desc: "Facility out" }
    ],
    saturdayTitle: "Saturday (06/27)",
    saturdayEvents: [
      { time: "9:00 AM - 9:00 PM", desc: "Breakfast and All-day work sessions" },
      { time: "12:00 PM", desc: "Lunch time lecture (panel discussion) on industry jobs, resumes" },
      { time: "8:00 PM", desc: "Dinner" }
    ],
    sundayTitle: "Sunday (06/28)",
    sundayEvents: [
      { time: "9:00 AM", desc: "Breakfast and Project Submission Deadline" },
      { time: "11:00 AM", desc: "Team Presentations & Judging" },
      { time: "12:00 PM", desc: "LUNCH" },
      { time: "1:30 PM", desc: "Event Wrap-up and Awards" }
    ],
    // ------------------------------------------
    prizesTitle: "Prizes",
    prizesDescription: "Amazing prizes that will upgrade your daily routine, from work to play! Prizes include LEGO® sets, Apple Watches, iPads, and more.",
    prizesData: [
      { place: "1st", value: "", color: "bg-yellow-500" },
      { place: "2nd", value: "", color: "bg-gray-400" },
      { place: "3rd", value: "", color: "bg-orange-700" }
    ],
    placeLabel: "Place"
  }
};

export default async function DetailsPage({ params }: { params: { lang: 'pt' | 'en' } }) {
  const { lang } = await params;
  const t = dict[lang] || dict.en;

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
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest">{t.whatWillYouDoTitle}</h2>
          <p className="leading-relaxed text-justify">{t.whatWillYouDoText}</p>
        </section>

        {/* --- SESSÃO DO CRONOGRAMA --- */}
        <section className="border-t border-black pt-8">
          <h2 className="text-xl font-bold mb-8 uppercase tracking-widest">{t.scheduleTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SEXTA */}
            <div className="bg-white border border-black p-4 shadow-sm">
              <h3 className="font-bold text-lg border-b border-black pb-2 mb-4 uppercase text-red-600">{t.fridayTitle}</h3>
              <ul className="space-y-4">
                {t.fridayEvents.map((event, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-mono font-bold text-sm">{event.time}</span>
                    <span className="text-sm text-gray-700 leading-snug">{event.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SÁBADO */}
            <div className="bg-white border border-black p-4 shadow-sm">
              <h3 className="font-bold text-lg border-b border-black pb-2 mb-4 uppercase text-red-600">{t.saturdayTitle}</h3>
              <ul className="space-y-4">
                {t.saturdayEvents.map((event, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-mono font-bold text-sm">{event.time}</span>
                    <span className="text-sm text-gray-700 leading-snug">{event.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DOMINGO */}
            <div className="bg-white border border-black p-4 shadow-sm">
              <h3 className="font-bold text-lg border-b border-black pb-2 mb-4 uppercase text-red-600">{t.sundayTitle}</h3>
              <ul className="space-y-4">
                {t.sundayEvents.map((event, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-mono font-bold text-sm">{event.time}</span>
                    <span className="text-sm text-gray-700 leading-snug">{event.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
        {/* ------------------------------ */}

        <section className="border-t border-black pt-8">
          <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-center">{t.prizesTitle}</h2>
          <p className="leading-relaxed text-justify text-center mb-6">{t.prizesDescription}</p>

          <div className="flex flex-row items-end justify-center gap-2 h-[450px] md:h-[400px] border-b-2 border-black pb-2">
            <div className="flex flex-col items-center w-1/3 h-2/3 order-1 gap-2">
              <span className="font-bold text-black uppercase tracking-widest">{t.prizesData[1].place} {t.placeLabel}</span>
              <div className={`${t.prizesData[1].color} text-black p-4 w-full h-full flex items-center justify-center text-center font-mono`}>
                <span className="text-sm font-medium">{t.prizesData[1].value}</span>
              </div>
            </div>

            <div className="flex flex-col items-center w-1/3 h-full order-2 gap-2">
              <span className="font-bold text-black uppercase tracking-widest">{t.prizesData[0].place} {t.placeLabel}</span>
              <div className={`${t.prizesData[0].color} text-black p-4 w-full h-full flex items-center justify-center text-center font-mono`}>
                <span className="text-base">{t.prizesData[0].value}</span>
              </div>
            </div>

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