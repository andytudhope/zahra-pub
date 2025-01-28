import { type NextRequest, NextResponse } from 'next/server'
import { geolocation } from '@vercel/edge'

export function middleware(request: NextRequest) {
  try {
    console.log('Middleware starting...');
    
    // Log the request path
    console.log('Request path:', request.nextUrl.pathname);
    
    // Get and log geolocation data
    const geo = geolocation(request);
    console.log('Full geolocation data:', geo);
    
    const country = geo.country || 'US';
    console.log('Detected country:', country);
    
    // Create response with headers
    const response = NextResponse.next();
    response.headers.set('x-user-country', country);
    console.log('Set x-user-country header to:', country);
    
    return response;
  } catch (error) {
    console.error('Middleware error:', error);
    // Return response with default country if there's an error
    const response = NextResponse.next();
    response.headers.set('x-user-country', 'US');
    return response;
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}