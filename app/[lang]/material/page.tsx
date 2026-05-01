const dict = {
  pt: {
    title: "Material Exclusivo",
    subtitle: "Bem-vindo à área de materiais do UFV-BAYER Hackathon 2026.",
    driveButton: "Acessar Google Drive",
    warning: "Este link é exclusivo para participantes confirmados. Não compartilhe.",
  },
  en: {
    title: "Exclusive Material",
    subtitle: "Welcome to the materials area of the UFV-BAYER Hackathon 2026.",
    driveButton: "Access Google Drive",
    warning: "This link is exclusive to confirmed participants. Do not share.",
  }
};

export default async function MaterialPage({ params }: { params: { lang: 'pt' | 'en' } }) {
  const { lang } = await params;
  const t = dict[lang] || dict.pt;

  // Substitua este link pelo link real do Drive com os datasets do Hackathon
  const DRIVE_LINK = "https://drive.google.com/drive/u/1/folders/1PuuOWpYgrJLU4FcOMbwNtwHNEWL8d_9x";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl w-full bg-white p-10 rounded-lg shadow-lg text-center border-t-4 border-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mono uppercase tracking-widest text-black">
          {t.title}
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          {t.subtitle}
        </p>

        <a 
          href={DRIVE_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition-colors text-lg mb-6"
        >
          {t.driveButton}
        </a>

        <p className="text-sm text-gray-500 font-mono bg-gray-100 p-3 rounded border border-gray-200">
          ⚠️ {t.warning}
        </p>
      </div>
    </main>
  );
}