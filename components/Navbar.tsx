"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';

export default function Navbar() {
  const params = useParams();
  const lang = (params.lang as string) || 'pt';
  const pathname = usePathname();

  const switchLang = (newLang: string) => {
    return pathname.replace(`/${lang}`, `/${newLang}`);
  };

  return (
    // Alterado para flex-col sempre, mas com largura responsiva nos itens
    <header className="border-b border-black p-4 bg-red-400 sticky top-0 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        {/* TOPO: LOGOS */}
        <div className="flex items-center justify-evenly w-full md:w-auto">
          {/* LOGO IDATA */}
          <div className="relative w-24 h-12">
            <a href="https://www.ufv.br/" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
              <Image src="/logos/logo-ufv.webp" alt="Logo IData" fill sizes="96px" style={{ objectFit: 'contain' }} />
            </a>
          </div>

          <div className="relative w-24 h-12">
            <a href="https://ppg.ufv.br/" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
              <Image src="/logos/logo-ppg.webp" alt="Logo PPG-UFV" fill sizes="96px" style={{ objectFit: 'contain' }} />
            </a>
          </div>
          {/* LOGO UFV (AGORA AQUI) */}
          <div className="relative w-24 h-12">
            <a href="https://idata.ufv.br/" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
              <Image src="/logos/logo-idata.webp" alt="Logo UFV" fill sizes="96px" style={{ objectFit: 'contain' }} />
            </a>
          </div>

          <div className="relative w-24 h-12">
            <a href="https://www.bayer.com.br/pt/" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
              <Image src="/logos/logo-bayer.webp" alt="Logo Bayer" fill sizes="96px" style={{ objectFit: 'contain' }} />
            </a>
          </div>
        </div>




        {/* NAVEGAÇÃO */}
        <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 uppercase tracking-widest text-lg md:text-xl">
          <Link href={`/${lang}/`} className="hover:underline">Home</Link>
          <Link href={`/${lang}/details`} className="hover:underline">Details</Link>
          <Link href={`/${lang}/join`} className="hover:underline">Join</Link>
          <Link href={`/${lang}/map-location`} className="hover:underline">Map</Link>
          <Link href={`/${lang}/login`} className="hover:underline font-bold  rounded p-1 hover:bg-gray-100"
          >
            Login
          </Link>
        </nav>

        {/* IDIOMA (AGORA SOZINHO) */}
        <div className="flex gap-2 border-l border-black pl-4">
          <Link href={switchLang('pt')} className={`${lang === 'pt' ? 'font-bold' : 'opacity-50'}`}>PT</Link>
          <span>/</span>
          <Link href={switchLang('en')} className={`${lang === 'en' ? 'font-bold' : 'opacity-50'}`}>EN</Link>
        </div>

      </div>
    </header>
  );
}