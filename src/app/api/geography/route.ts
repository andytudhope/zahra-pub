import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const countryHeader = request.headers.get('x-user-country');
  console.log('Geography API - Received country header:', countryHeader);
  
  return new NextResponse(null, {
    status: 204,
    headers: {
      'x-user-country': countryHeader || 'US'
    }
  });
}