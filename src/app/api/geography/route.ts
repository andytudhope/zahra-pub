import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || 'US';
  
  return new NextResponse(null, {
    status: 204,
    headers: {
      'x-user-country': country
    }
  });
}