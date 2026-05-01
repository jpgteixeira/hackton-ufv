// app/actions/checkAccess.js
'use server'

export async function getMaterialAccess(userEmail) {
  // 1. Defina a data do evento (Exemplo: Hoje às 20:00)
  const RELEASE_DATE = new Date('2026-05-01T20:00:00-03:00'); 
  const now = new Date();

  // 2. Bloqueio por horário
  if (now < RELEASE_DATE) {
    return { allowed: false, message: `O material será liberado apenas às 20h de 24/06/2026. The Content will be released at 8pm 2026/06/24`  };
  }

  // 3. Consulta ao Google Sheets (via Service Account no .env)
  // Aqui você usa o 'userEmail' para ver se o Status na coluna Z é "Selecionado"
  const userData = await fetchUserFromSheets(userEmail); 

  if (userData?.status === "Selecionado") {
    return { 
      allowed: true, 
      link: process.env.GOOGLE_DRIVE_FOLDER_URL // O link fica escondido no servidor
    };
  }

  return { allowed: false, message: "Acesso não autorizado ou e-mail não selecionado." };
}