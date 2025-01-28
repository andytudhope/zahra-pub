import { type NextRequest, NextResponse } from 'next/server'
import { geolocation } from '@vercel/edge'

export function middleware(request: NextRequest) {
  // Get country from Vercel's edge geolocation
  const { country } = geolocation(request)
  
  // Clone the response
  const response = NextResponse.next()
  
  // Add the country code to headers
  response.headers.set('x-user-country', country || 'US')
  
  return response
}

export const config = {
  matcher: '/:path*',
}