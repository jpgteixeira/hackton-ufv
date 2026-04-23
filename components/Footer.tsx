export default function Footer() {
  return (
    <footer className="border-t border-black p-8 mt-16 text-center text-xs uppercase tracking-widest">
      <p>&copy; {new Date().getFullYear()} UFV Hackathon Team</p>
      <p className="mt-2 opacity-50">Desenvolvido com Next.js & Tailwind</p>
    </footer>
  );
}