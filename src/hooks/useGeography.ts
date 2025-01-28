'use client';

import { useState, useEffect } from 'react';

export function useGeography() {
  const [country, setCountry] = useState<string>('US');

  useEffect(() => {
    // Get the country from response headers (set by middleware)
    const headers = new Headers();
    fetch('/api/geography', {
      headers,
    }).then(response => {
      const country = response.headers.get('x-user-country');
      if (country) {
        setCountry(country);
      }
    });
  }, []);

  return country;
}