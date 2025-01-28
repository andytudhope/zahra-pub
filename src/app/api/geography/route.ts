import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'x-user-country': request.headers.get('x-user-country') || 'US'
    }
  });
}