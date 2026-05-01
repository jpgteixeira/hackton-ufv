'use client'
import { useState } from 'react';
import { loginAction, AuthResponse } from '@/app/actions/auth';

// Interface simples, esperando APENAS os textos traduzidos (o 't')
interface LoginFormProps {
  t: {
    title: string;
    description: string;
    emailLabel: string;
    placeholder: string;
    button: string;
    loading: string;
  };
  lang: string;
}

export default function LoginForm({ t, lang }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result: AuthResponse = await loginAction(email, lang);

    if (result.success) {
      window.location.href = `/${lang}/material`;
    } else {
      setError(result.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">{t.title}</h2> 
      <p className="text-sm text-center mb-4 text-gray-600">{t.description}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{t.emailLabel}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder={t.placeholder}
          />
        </div>
        
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md disabled:bg-gray-400 transition-colors"
        >
          {loading ? t.loading : t.button}
        </button>
      </form>
    </div>
  );
}