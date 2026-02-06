// Docs on request and context
// https://docs.netlify.com/functions/build/#code-your-function-2

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
      JSON.stringify({ message: `Hello ${subject}` }),
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
