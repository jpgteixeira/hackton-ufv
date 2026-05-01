// app/[lang]/join/page.tsx

const dict = {
  pt: {
    title: "INSCRIÇÃO & CONTEÚDO",
    restrictedArea: "Área Restrita!",
    accessButton: "ACESSAR CONTEÚDO",
    registrationInformation:"Devido ao número limitado de vagas, realizaremos um processo de seleção. Solicitamos que responda às perguntas com cuidado, pois o seu perfil e motivação serão fundamentais para a nossa avaliação.",
    registrationInformationTitle:"IMPORTANTE"

  },
  en: {
    title: "REGISTRATION & CONTENT",
    restrictedArea: "Restricted Area!",
    accessButton: "ACCESS CONTENT",
    registrationInformation:"Positions are limited and subject to a selection process. Please provide thoughtful responses, as they will be considered in our evaluation of candidates.",
    registrationInformationTitle:"IMPORTANT"
  }
};

export default async function JoinPage({ params }: { params: { lang: 'pt' | 'en' } }) {
  const { lang } = await params;
  const t = dict[lang] || dict.en;

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 uppercase tracking-widest border-b border-black pb-4">
        {t.title}
      </h1>
      <div className="p-4 mb-8 text-justify bg-red-200 border border-black">
        <p className="font-bold text-center text-lg">{t.registrationInformationTitle}</p>
        <p >{t.registrationInformation}</p>
      </div>

      <div className="mb-12">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScmMTX9ufYMna86AQ7etJasxLPxINa-iHDAGlOrVFFCE18aKg/viewform?embedded=true" 
          width="100%" 
          height="1080" 
          className="border border-black"
          title="Registration Form"
        ></iframe>
      </div>

      <div className="border border-black p-8 text-center bg-gray-50">
        <h2 className="mb-4 font-bold uppercase">{t.restrictedArea}</h2>
        <a 
          href= {`/${lang}/login`}
          className="inline-block bg-red-600 text-white px-6 py-3 hover:bg-gray-800 transition-colors"
        >
          {t.accessButton}
        </a>
      </div>
    </main>
  );
}