import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('Geography API - Request received');
  console.log('Geography API - All headers:', Object.fromEntries(request.headers));

  const countryHeader = request.headers.get('x-user-country');
  console.log('Geography API - Received country header:', countryHeader);
  
  const response = new NextResponse(null, {
    status: 204,
    headers: {
      'x-user-country': countryHeader || 'US'
    }
  });

  console.log('Geography API - Response headers:', Object.fromEntries(response.headers));
  return response;
}