import { maternity } from '../../../../data/maternityPhotographers';

// Handle GET
export async function GET() {
  return new Response(JSON.stringify(maternity), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://pixisphere-three.vercel.app/api',
      'Content-Type': 'application/json',
    },
  });
}

// Handle OPTIONS (CORS preflight)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
