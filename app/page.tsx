// app/page.tsx 
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en'); // Redireciona quem entra na raiz para o inglês
}