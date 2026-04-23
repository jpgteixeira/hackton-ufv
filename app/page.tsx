import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12">
      
      {/* Container Hero (Banner + Logos) */}
      <section className="border border-black mb-12 bg-gray-50">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-black">
          
          {/* Lado Esq: Banner Visual */}
          <div className="relative w-full md:w-2/3 h-60 md:h-80 overflow-hidden hover:grayscale-0 trasition-all duration-200">
            <Image 
              src="/logos/logo-hackaton.webp" // Sua imagem de banner aqui
              alt="UFV Hackathon 2026 Visual" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />     
          </div>

          {/* Lado Dir: Grade de Logos */}
          <div className="w-full md:w-1/3 p-6 flex flex-col justify-center bg-white">
            <h3 className="text-xs font-mono uppercase tracking-widest text-center mb-6 border-b border-black pb-2">
              Organized by
            </h3>
            
            {/* Grid de Logos - 3 colunas em telas maiores */}
            <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((logoNum) => (
                <div key={logoNum} className="relative w-16 h-16 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200">
                  <Image
                    // SIMULAÇÃO: Usando placeholder do Google para simular logos.
                    // Na produção, troque para: src={`/logos/sponsor-${logoNum}.png`}
                    src={`/logos/logo-${logoNum}.webp`}
                    alt={`Sponsor Logo ${logoNum}`}
                    fill
                    style={{ objectFit: 'contain' }} // Garante que a logo não distorça
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resumo (Mantido o original, com pequenos ajustes de padding) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black pt-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-widest font-mono">UFV Hackathon 2026</h1>
          <p className="text-lg leading-relaxed">
            Unleashing innovation at the intersection of data, technology, and healthcare.
          </p>
        </div>
        <div className="border-l border-black pl-8 font-mono">
          <h2 className="font-bold mb-3 uppercase tracking-wider text-sm border-b border-black pb-1 inline-block">
            Quick Details
          </h2>
          <ul className="space-y-3 text-sm">
            <li><span className="font-bold">📍 LOCATION:</span> UFV Convention Center</li>
            <li><span className="font-bold">📅 DATE:</span> May 20, 2026</li>
            <li><span className="font-bold">🏆 PRIZES:</span> R$ 5,000 Total</li>
          </ul>
        </div>
      </section>
    </main>
  );
}