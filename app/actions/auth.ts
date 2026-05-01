'use server'
import { findUserByEmail } from '@/lib/userService';

export type AuthResponse = {
  success: boolean;
  message: string;
  name?: string;
};

export async function loginAction(email: string, lang: string): Promise<AuthResponse> {
  const RELEASE_DATE = new Date('2026-06-26T15:15:00-03:00');
  const now = new Date();

  if (now < RELEASE_DATE) {
    return { 
      success: false, 
      message: lang === 'pt' ? "O material ainda não foi liberado." : "Content not released yet." 
    };
  }

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return { 
        success: false, 
        message: lang === 'pt' ? "E-mail não encontrado." : "Email not found." 
      };
    }

    if (user.status !== "Selecionado") {
      return { 
        success: false, 
        message: lang === 'pt' ? "Sua participação não foi confirmada." : "Participation not confirmed." 
      };
    }

    return { success: true, message: "Sucesso", name: user.nome };
    
  } catch (error) {
    console.error("Erro no servidor:", error);
    return { success: false, message: lang === 'pt' ? "Erro no servidor." : "Server error." };
  }
}