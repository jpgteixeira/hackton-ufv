import LoginForm from './LoginForm'

const dict = {
  pt: {
    title: "Acesso ao Material",
    description: "Use o e-mail cadastrado no formulário.",
    emailLabel: "E-mail",
    placeholder: "seu@email.com",
    button: "Entrar",
    loading: "Verificando...",
  },
  en: {
    title: "Content Access",
    description: "Use the email registered in the form.",
    emailLabel: "Email Address",
    placeholder: "your@email.com",
    button: "Sign In",
    loading: "Verifying...",
  }
};

export default async function LoginPage({ params }: { params: { lang: 'pt' | 'en' } }) {
  // Await nos params igual você fez na Home
  const { lang } = await params;
  const t = dict[lang] || dict.pt;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      {/* Passamos o 't' já mastigado para o componente */}
      <LoginForm t={t} lang={lang} />
    </main>
  )
}