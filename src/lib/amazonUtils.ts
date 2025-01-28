type AmazonDomain = 'com' | 'co.uk' | 'fr' | 'de' | 'it' | 'es' | 'com.mx' | 'com.br' | 'jp' | 'se' | 'com.au' | 'nl' | 'in' | 'ca';

const countryToDomain: Record<string, AmazonDomain> = {
  US: 'com',
  CA: 'ca',
  MX: 'com.mx',
  BR: 'com.br',
  ZA: 'com',
  GB: 'co.uk',
  IE: 'co.uk',
  FR: 'fr',
  DE: 'de',
  AT: 'de',
  CH: 'de',
  IT: 'it',
  ES: 'es',
  IN: 'in',
  NL: 'nl',
  SE: 'se',
  JP: 'jp',
  AU: 'com.au'
};

export function getAmazonUrl(asin: string | undefined, userCountry: string): string | null {
  if (!asin) return null;

  const domain = countryToDomain[userCountry] || 'com';
  return `https://amazon.${domain}/dp/${asin}`;
}