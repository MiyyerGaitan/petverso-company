import { GoogleAuth } from 'google-auth-library';
import { sheets_v4 } from 'googleapis';

const auth = new GoogleAuth({
  keyFile: 'credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function obtenerToken() {
  const client = await auth.getClient();
  const respuesta = await client.getAccessToken();
  const token = respuesta.token;

  return token;
}

export default async (request, context) => {
  try {
    // Validar método
    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method Not Allowed' }),
        { status: 405 }
      );
    }

    // Leer body JSON
    const body = await request.json();
    const subject = body.name || 'World';

    return new Response(
      JSON.stringify(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
