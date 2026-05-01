import { getGoogleSheetsClient } from './googleSheets';

export async function findUserByEmail(email: string) {
  const sheets = await getGoogleSheetsClient();
  const range = 'Respostas ao formulário 1!W2:Z'; // Ajuste 'Form_Responses' para o nome exato da aba

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: range,
  });

  const rows = response.data.values;

  if (!rows || rows.length === 0) return null;

  // Percorre as linhas procurando o e-mail em X ou Y
  for (const row of rows) {
    const [nome, emailPrinc, emailAlt, status] = row;

    if (
      email.toLowerCase() === emailPrinc?.toLowerCase() || 
      email.toLowerCase() === emailAlt?.toLowerCase()
    ) {
      return { nome, emailPrinc, emailAlt, status };
    }
  }

  return null;
}