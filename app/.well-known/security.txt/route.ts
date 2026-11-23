import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakshaai.co';

export const dynamic = 'force-static';

export function GET() {
  const body = `Contact: mailto:security@rakshaai.co
Contact: mailto:support@rakshaai.co
Preferred-Languages: en, hi
Canonical: ${SITE_URL}/.well-known/security.txt
Policy: ${SITE_URL}/privacy-policy
Expires: 2027-05-19T00:00:00Z
`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
