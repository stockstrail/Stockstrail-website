import { GET as feedGet } from '../feed.xml/route';

export const dynamic = 'force-dynamic';

export async function GET() {
  return feedGet();
}
