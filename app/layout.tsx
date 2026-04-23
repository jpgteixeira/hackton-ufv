// app/layout.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Courier_Prime } from 'next/font/google';
import './globals.css';

const courier = Courier_Prime({ weight: '400', subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${courier.className} bg-white text-black min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}