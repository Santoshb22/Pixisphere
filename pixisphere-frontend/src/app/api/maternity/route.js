import { maternity } from '../../../../data/maternityPhotographers';

export async function GET() {
  return Response.json(maternity);
}
