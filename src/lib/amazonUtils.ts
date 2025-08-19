import { AmazonDomain, AmazonRegionalOverrides } from '@/types/geo';

const countryToDomain: Record<string, AmazonDomain> = {
  US: 'com',
  CA: 'ca',
  MX: 'com.mx',
  BR: 'com.br',
  ZA: 'com',      // default stays .com unless a per-book override says otherwise
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

export function getAmazonUrl(
  asin: string | undefined,
  userCountryRaw: string,
  regional?: AmazonRegionalOverrides
): string | null {
  if (!asin) return null;
  const userCountry = (userCountryRaw || '').toUpperCase();
  const override = regional?.[userCountry];
  const chosenAsin = override?.asin ?? asin;
  const chosenDomain = override?.domain ?? countryToDomain[userCountry] ?? 'com';
  return `https://amazon.${chosenDomain}/dp/${chosenAsin}`;
}
